"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch"; // Fetching function
import mockupData from "../../public/mockup.json"; // Import JSON mockup data
import UserWelcome from "../components/UserWelcome";
import HealthMetrics from "@/components/HealthMetrics";

const userUrl = process.env.NEXT_PUBLIC_URL_User;

interface Data {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
  sessionsWeight: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
  sessionsLength: {
    day: number;
    sessionLength: number;
  }[];
  kind: { [key: string]: string };
  data: {
    value: number;
    kind: string;
  }[];
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetchData(`${userUrl}/12`, mockupData)
      .then((response) => {
        if (response.data) {
          console.log("Data récupérée:", response.data);
          setData(response.data); // Set data
        }
      })
      .catch((error) =>
        console.error("Erreur, impossible de récupérer la data:", error)
      );
  }, []);

  return (
    <main>
      <div className="container">
        {data && <UserWelcome userInfos={data.userInfos} />}
        {data && (
          <HealthMetrics
            dataType="calorieCount"
            dataValue={data.keyData.calorieCount.toString()}
            proteinCount={data.keyData.proteinCount.toString()}
            calorieCount={data.keyData.calorieCount.toString()}
            carbohydrateCount={data.keyData.carbohydrateCount.toString()}
            lipidCount={data.keyData.lipidCount.toString()}
          />
        )}
      </div>
    </main>
  );
}
