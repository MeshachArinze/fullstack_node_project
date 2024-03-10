const fetch = require("node-fetch");

const url = "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "fd62ea2f85msh9a3b24c5d67d0b4p15ad19jsn8cc24a0dd050",
    "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
  },
};

const getF = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
}

getF();
