import mockupData from "../data/mockup.json"; // Import JSON data

export async function fetchData(url: string, useMock: boolean = false) {
  if (useMock) {
    const urlParts = url.split("/");
    const userIdIndex = urlParts.indexOf("user") + 1;
    const userId = parseInt(urlParts[userIdIndex]);

    const user = Array.isArray(mockupData)
      ? mockupData.find((u) => u.id === userId)
      : mockupData;

    if (!user) {
      console.error(`Utilisateur ${userId} introuvable dans les mocks`);
      return null;
    }

    // Determine which data to return based on URL
    if (url.includes("/performance")) return { data: user.performance };
    if (url.includes("/average-sessions"))
      return { data: user.averageSessions };
    if (url.includes("/activity")) return { data: user.activity };
    return { data: user };
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return await response.json();
}
