export default async function getContry() {
  try {
    const response = await fetch("https://ipapi.co/json");
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error("Error al obtener la ubicación:", error);
    return null;
  }
}
