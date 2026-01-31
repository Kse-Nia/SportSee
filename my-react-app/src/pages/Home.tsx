import React from "react";
import { useEffect, useState } from "react"; // Hooks
import { fetchData } from "../utils/fetch.js"; // Fetching function
import mockupData from "../data/mockup.json" with { type: "json" };/// JSON data instead of API
const userUrl = import.meta.env.VITE_USER_URL; // .env import

import HomeError from "../components/errors/HomeError.js";
import UserWelcome from "../components/UserWelcome.js"; // Welcome component
import HealthMetrics from "../components/charts/HealthMetrics.js"; // Health metrics component
import DailyActivity from "../components/DailyActivity.js"; // Daily activity component
import Score from "../components/charts/Score.js"; // Score component
import PerformanceGraphe from "../components/charts/Performance.js"; // Radar graph component
import Duration from "../components/charts/Duration.js"; // Duration component

import { checkScore } from "../utils/formatData.js"; // check score function

// Activities Icons
import Calories from "../assets/icons/calories.svg";
import Protein from "../assets/icons/protein.svg";
import Carbs from "../assets/icons/carbs.svg";
import Fat from "../assets/icons/fat.svg";

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

  const findScore = checkScore(userData); // Get the right score

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
        return <HomeError />;
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
        {
          icon: Fat,
          count: userData.keyData.lipidCount,
          type: "Lipides",
        },
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
