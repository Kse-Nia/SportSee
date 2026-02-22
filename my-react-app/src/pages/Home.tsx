import { useEffect, useState } from "react"; // Hooks
import { useOutletContext } from "react-router"; // Access context from Layout
import type {
  UserData,
  UserActivity,
  FormattedSession,
  UserPerformance,
} from "./../utils/types.js"; // TS types
import { formatDurationData, checkScore } from "../utils/formatData.js"; // Format data
import { fetchData } from "../utils/fetch.js"; // Fetching function
const userUrl = import.meta.env.VITE_USER_URL; // .env import

import HomeError from "../components/errors/HomeError.js";
import UserWelcome from "../components/UserWelcome.js"; // Welcome component
import HealthMetrics from "../components/charts/HealthMetrics.js"; // Health metrics component
import DailyActivity from "../components/DailyActivity.js"; // Daily activity component
import Score from "../components/charts/Score.js"; // Score component
import PerformanceGraphe from "../components/charts/Performance.js"; // Radar graph component
import Duration from "../components/charts/Duration.js"; // Duration component

// Activities Icons
import Calories from "../assets/icons/calories.svg";
import Protein from "../assets/icons/protein.svg";
import Carbs from "../assets/icons/carbs.svg";
import Fat from "../assets/icons/fat.svg";

interface OutletContext {
  useMock: boolean;
}

export default function Home() {
  const { useMock } = useOutletContext<OutletContext>(); // Mock state from Layout context
  const [userData, setUserData] = useState<UserData | null>(null); // User data for welcome and health metrics
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null); // Activity data for DailyActivity component
  const [userSessions, setUserSessions] = useState<FormattedSession[] | null>(
    null
  ); // Session duration data for Duration component
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null); // Performance data for PerformanceGraphe component
  const [error, setError] = useState<string | null>(null); // Error state for fetch issues

  useEffect(() => {
    const fetchAllData = async () => {
      setError(null);
      try {
        const [d1, d2, d3, d4] = await Promise.all([
          fetchData(`${userUrl}/12`, useMock),
          fetchData(`${userUrl}/12/activity`, useMock),
          fetchData(`${userUrl}/12/average-sessions`, useMock),
          fetchData(`${userUrl}/12/performance`, useMock),
        ]);

        if (d1) setUserData(d1.data);
        if (d2) setUserActivity(d2.data);
        if (d3?.data?.sessions)
          setUserSessions(formatDurationData(d3.data.sessions));
        if (d4) setUserPerformance(d4.data);
      } catch (err) {
        console.error("Erreur fetch :", err);
        setError("Impossible de récupérer les données.");
      }
    };

    fetchAllData();
  }, [useMock]);

  const findScore = checkScore(userData);

  const metrics = userData
    ? [
        {
          icon: Calories,
          count: userData.keyData.calorieCount,
          type: "Calories",
        },
        {
          icon: Protein,
          count: userData.keyData.proteinCount,
          type: "Protéines",
        },
        {
          icon: Carbs,
          count: userData.keyData.carbohydrateCount,
          type: "Glucides",
        },
        { icon: Fat, count: userData.keyData.lipidCount, type: "Lipides" },
      ]
    : [];
  if (error) return <HomeError />;

  return (
    <main className="dashboard">
      <div className="dashboard__welcome">
        {userData && <UserWelcome userInfos={userData.userInfos} />}
      </div>

      <div className="dashboard__content">
        <div className="dashboard__activity">
          {userActivity && (
            <>
              <DailyActivity dailyActivity={userActivity.sessions} />
              <div className="dashboard__graphs">
                <Duration sessionDuration={userSessions} />
                <PerformanceGraphe performances={userPerformance} />
                <Score score={findScore} />
              </div>
            </>
          )}
        </div>
        <div className="dashboard__health-metrics">
          {userData && <HealthMetrics metrics={metrics} />}
        </div>
      </div>
    </main>
  );
}
