"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch"; // Fetching function
import mockupData from "../../public/mockup.json"; // Import JSON mockup data
import UserWelcome from "../components/UserWelcome";
import HealthMetrics from "@/components/HealthMetrics";
import DailyActivity from "@/components/DailyActivity";
import Score from "@/components/Score";

const userUrl = process.env.NEXT_PUBLIC_URL_User;
interface UserData {
  userInfos: {
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
  userId: number;
  sessions: Session[];
}

interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);
  const [userSessions, setUserSessions] = useState<Session | null>(null);

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
        if (fetchUserData) setUserData(fetchUserData.data);
        if (fetchUserActivity) setUserActivity(fetchUserActivity.data);
        console.log("Data daily activity : ", fetchUserActivity.data);
        //console.log("allUserWeight", allUserWeight);
        //console.log("user score", fetchUserData.todayScore);
        if (fetchUserSessions) setUserSessions(fetchUserSessions.data);
      } catch (err) {
        console.log("Error, impossible de récupérer la data : ", err);
      }
    };

    fetchAllData();
  }, []);

  const allUserWeight = userActivity?.sessions.map(
    (session) => session.kilogram
  );

  return (
    <main>
      <div className="container">
        {userData && <UserWelcome userInfos={userData.userInfos} />}
        {userActivity && (
          <div className="container_userActivity">
            <DailyActivity
              dailyActivity={userActivity.sessions}
              dailyActivityWeight={userActivity.sessionsWeight}
            />
          </div>
        )}
        {userData && (
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
        )}
        {userData && (
          <div className="container_userMetrics">
            <Score
              score={userData.score}
            />
          </div>
        )}
      </div>
    </main>
  );
}
