"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch";
import mockupData from "../../public/mockup.json";
import UserWelcome from "../components/UserWelcome";
import HealthMetrics from "@/components/HealthMetrics";

type Data = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetchData("http://localhost:3000/user/12", mockupData)
      .then((response) => {
        if (response.data) {
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
