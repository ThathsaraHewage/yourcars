export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "2ed903a564mshfc427c34875b303p18ffbajsnedcce03acd28",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
