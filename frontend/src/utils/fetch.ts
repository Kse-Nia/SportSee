export async function fetchData(url: string, mockupData: string): Promise<any> {
  let data = null;

  try {
    const response = await fetch(url);
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
  if (!data) {
    console.log("Loading mockup JSON");
    const response = await fetch(mockupData);
    if (response.ok) {
      data = await response.json();
    } else {
      throw new Error("Impossible de charger les données json");
    }
  }
  return data;
}
