"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch";
import UserWelcome from "../components/UserWelcome";
import HealthMetrics from "@/components/HealthMetrics";

type User = {
  userInfos: {
    firstName: string;
  };
};

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    fetchData<User>("http://localhost:3000/user/12")
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((error) => console.error("IMPOSSIBLE CHARGER USER DATA ", error));
  }, []);

  //console.log("user", user);
  console.log("user firstname", user?.userInfos?.firstName);

  return (
    <main>
      <h1>Hi</h1>
      {user && <UserWelcome userInfos={user.userInfos.firstName} />}
      {/*  <HealthMetrics dataValue={} */}
    </main>
  );
}
