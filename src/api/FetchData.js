import { useEffect, useState } from "react";

const FetchData = (endpoint) => {
  //  Define state variables to manage fetched data, loading state, and errors
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErros] = useState(null);

  useEffect(() => {
    // Define an asynchronous function to fetch data from the specified endpoint
    const fetchData = async () => {
      try {
      } catch (error) {}
    };
  });
};
