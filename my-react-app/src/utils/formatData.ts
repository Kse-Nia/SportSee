import { DailyActivityItem, dataPerformance } from "./types";

// Daily activity format data for indexing
export const formatDailyActivityData = (
  dailyActivity: DailyActivityItem[]
): (DailyActivityItem & { index: number })[] => {
  return dailyActivity.map((item, index) => ({
    ...item,
    index: index + 1,
  }));
};

// Radar data

export const formatData = (performances) => {
  // Translate kinds data
  const kindTranslation = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const mapped = performances.data.map((item) => ({
    kind: kindTranslation[item.kind],
    value: item.value,
  }));

  // Change order of kinds
  const order = [
    "Intensité",
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
  ];

  // Return reordered data
  return order.map((label) => mapped.find((item) => item.kind === label));
};

// Score format to %
export const formatScoreData = (score) => {
  // change ! tofixed
  return [{ name: "Score", value: score * 100, fill: "#FF0000" }];
};

// Get right score
export const checkScore = (userData) => {
  return userData?.todayScore ? userData?.todayScore : userData?.score;
};

// Duration session; day to letter
export const formatDurationData = (sessionDuration) => {
  const daysTypes = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  return sessionDuration?.map((session) => ({
    day: daysTypes[session.day],
    sessionLength: session.sessionsWeight,
  }));
};
