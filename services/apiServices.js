const URL = "http://192.168.0.92:3006/location/all";

export const getLocations = async () => {
  const response = await fetch(URL);
  const data = await response.json()
  // console.log(data)
  return data
};