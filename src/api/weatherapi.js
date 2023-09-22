import axios from "axios";

const baseUrl = "https://api.tomorrow.io/v4/weather/forecast?";

export const getWeatherData = async (cityname) => {
  console.log(process.env.REACT_APP_API_KEY);
  try {
    const { data } = await axios.get(
      baseUrl + `apikey=${process.env.REACT_APP_API_KEY}&location=${cityname}`
    );
    console.log(
      "Inside api/weatherapi:" +
        " " +
        baseUrl +
        `apikey=${process.env.REACT_APP_API_KEY}&location=${cityname}`
    );
    console.log(data);
    return data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      // if (error.response.status===429){
      //     apiKey =process.env.REACT_APP_API_KEY2
      //     getWeatherData(cityname);
      // }
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};
