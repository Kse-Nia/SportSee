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

  // Hook to fetch data
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

  return (
    <main>
      <div className="container">
        <div className="container_welcome">
          {userData && <UserWelcome userInfos={userData.userInfos} />}
        </div>
        {userActivity && (
          <div className="container_userActivity">
            <DailyActivity
              dailyActivity={userActivity.sessions}
              dailyActivityWeight={userActivity.sessionsWeight}
            />
          </div>
        )}
        {userData && (
          <div className="graph">
            <div className="container_userMetrics">
              <HealthMetrics
                dataType="calorieCount"
                dataValue={userData.keyData.calorieCount.toString()}
                proteinCount={userData.keyData.proteinCount.toString()}
                calorieCount={userData.keyData.calorieCount.toString()}
                carbohydrateCount={userData.keyData.carbohydrateCount.toString()}
                lipidCount={userData.keyData.lipidCount.toString()}
              />
            </div>
            <div className="container_userMetrics">
              <Score score={findScore} />
            </div>
            <div className="container_radar">
              <RadarGraphe performances={userPerformance} />
            </div>
            <div className="session_container">
              <Duration sessionDuration={userSessions} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
