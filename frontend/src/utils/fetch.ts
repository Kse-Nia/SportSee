import "../../public/mockup.json";

export async function fetchData<T>(
  url: string,
  mockupData: string = "/mockup.json"
): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Impossible de charger les données");
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error:", error);
    console.log("JSON Data");
    const response = await fetch(mockupData);
    if (!response.ok) {
      throw new Error("Impossible de charger les données json");
    }
    return (await response.json()) as T;
  }
}
