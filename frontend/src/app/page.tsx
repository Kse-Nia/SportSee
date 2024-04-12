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
};

export default function Home() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData("http://localhost:3000/user/12", "../../public/mockup.json")
      .then((response) => {
        console.log("Fetched data:", response.data);
        console.log("Fetched data:", response.data);
        console.log("Type of data:", typeof response.data);
        console.log("Is an array?", Array.isArray(response.data));
        if (response.data && response.data.length > 0) {
          // console.log("user id:", response.data[0].id);
          console.log("userInfos:", response.data[0].userInfos);
          console.log(typeof response.data);
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
      </div>
    </main>
  );
}
