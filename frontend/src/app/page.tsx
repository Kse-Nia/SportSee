"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch"; // Fetching function
import mockupData from "../../public/mockup.json"; // Import JSON mockup data
import UserWelcome from "../components/UserWelcome";
import HealthMetrics from "@/components/HealthMetrics";
import DailyActivity from "@/components/DailyActivity";
import Score from "@/components/Score";
import RadarGraphe from "@/components/Radar";
import Duration from "@/components/Duration";
const userUrl = process.env.NEXT_PUBLIC_URL_User;
import { chechScore } from "@/utils/formatData";

import Calories from "../../public/assets/icons/calories.svg";
import Protein from "../../public/assets/icons/protein.svg";
import Carbs from "../../public/assets/icons/carbs.svg";
import Fat from "../../public/assets/icons/fat.svg";

interface UserData {
  userInfos: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}
interface UserActivity {
  id: number;
  sessions: Session[];
}

interface Session {
  day: string;
  sessionsWeight: number;
  calories: number;
}

interface UserPerformance {
  id: number;
  kind: string;
  data: {
    value: number;
    kind: string;
  };
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null); // User data
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null); // User activity
  const [userSessions, setUserSessions] = useState<Session[] | null>(null); // User sessions
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null); // User performance

  const findScore = chechScore(userData); // Get the right score

  // Hook to fetch data API
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const fetchUserData = await fetchData(`${userUrl}/12`, mockupData);
        const fetchUserActivity = await fetchData(
          `${userUrl}/12/activity`,
          mockupData
        );
        const fetchUserSessions = await fetchData(
          `${userUrl}/12/average-sessions`,
          mockupData
        );
        const fetchUserPerformance = await fetchData(
          `${userUrl}/12/performance`,
          mockupData
        );

        if (fetchUserData) setUserData(fetchUserData.data);
        if (fetchUserActivity) setUserActivity(fetchUserActivity.data);
        if (fetchUserSessions) setUserSessions(fetchUserSessions.data.sessions);
        if (fetchUserPerformance) setUserPerformance(fetchUserPerformance.data);
      } catch (err) {
        console.log("Error, impossible de récupérer la data : ", err);
      }
    };
    fetchAllData();
  }, []);

  // Metrics data for the HealthMetrics component
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

  return (
    <main className="dashboard">
      <div className="dashboard__welcome">
        {userData && <UserWelcome userInfos={userData.userInfos} />}
      </div>
      <div className="dashboard__content">
        <div className="dashboard__activity">
          {userActivity && (
            <>
              <div className="activity__daily">
                <DailyActivity
                  dailyActivity={userActivity.sessions}
                  dailyActivityWeight={userActivity.sessionsWeight}
                />
              </div>
              <div className="activity__graphs">
                <Duration sessionDuration={userSessions} />
                <RadarGraphe performances={userPerformance} />
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
