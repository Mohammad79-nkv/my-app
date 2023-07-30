import { useEffect, useState } from "react";
// import { RAPID_API_KEY } from "@env";
import axios from "axios";

export const useFetch = (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setDate] = useState();
  const [error, setError] = useState();

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     // params: {
//     //   ...query,
//     // },
//     params: {
//       query: "Python developer in Texas, USA",
//       page: "1",
//       num_pages: "1",
//     },
//     headers: {
//       "X-RapidAPI-Key": "e3e678bf43msh42dffc576a422bap13d18djsn39aad565eff3",
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//   };

const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    }, 
    headers: {
      'X-RapidAPI-Key': 'e3e678bf43msh42dffc576a422bap13d18djsn39aad565eff3',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.request(options);
      setDate(data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      alert("there is an Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
