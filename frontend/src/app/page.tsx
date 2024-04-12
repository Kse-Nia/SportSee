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
    fetchData("http://localhost:3000/user/12", "../../public/mockup.json")
      .then((response) => {
        console.log("Fetched data:", response.data);
        console.log("Type of data:", typeof response.data);
        console.log("Is an array?", Array.isArray(response.data));
        if (response.data) {
          console.log("userInfos:", response.data.userInfos);
          console.log("keyData:", response.data.keyData);
          setData(response.data); // Set data
        }
      })
      .catch((error) =>
        console.error("Error, impossible de récupérer la data:", error)
      );
  }, []);

  return (
    <main>
      <h1>Hi</h1>
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
