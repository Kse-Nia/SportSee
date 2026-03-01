import mockupData from "../data/mockup.json" with { type: "json" }; // Import JSON data

export async function fetchData(url: string, useMock: boolean = false) {
  if (useMock) {
    const urlParts = url.split("/");
    const userIdIndex = urlParts.indexOf("user") + 1; // Get index of user ID in URL
    const userId = parseInt(urlParts[userIdIndex] ?? "0"); // Extract user ID from URL / if not found default to 0

    // Find User in the mockup based on user ID
    const user = Array.isArray(mockupData)
      ? mockupData.find((u: any) => u.id === userId)
      : mockupData;

      // Error handling if user not found
    if (!user) {
      console.error(`User ${userId} not found in mock`);
      return null;
    }

    // Return  datas based on endpoints
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
