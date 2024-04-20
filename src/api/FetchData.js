import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = (endpoint) => {
  //  Define state variables to manage fetched data, loading state, and errors
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    // Define an asynchronous function to fetch data from the specified endpoint
    const fetchData = async () => {
      try {
        // Make a GET request using Axios to fetch data from the specified endpoint
        const response = await axios.get(
          `https://my-json-server.typicode.com/${endpoint}`
        );
          //   Update the data state variable with the fetched data
          setData(response.data)
        ;
      } catch (errors) {
        // If an error occurs during fetching, set the error state variable
        setErrors(errors);
      } finally {
        // Set the loading state variable to false once fetching is complete, regardless of success or failure
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts or when the endpoint changes
    fetchData();

    return () => {
      // Clean up function if required
    };
  }, [endpoint]);

  // Return the fetched data, loading state, and error state for use in the component
  return { data, isLoading, errors };
};

export default FetchData;
