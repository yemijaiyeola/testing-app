import { useEffect, useState } from "react";

function DataFetch(url) {
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(true);
  const [fetchedData, setFetchedData] = useState("");
  useEffect(() => {
    const fetchContent = async () => {
      fetch(url).then((response) => {
        console.log("response");
        return response
          .json()
          .then((result) => {
            setStatus(false);
            setFetchedData(result);
          })
          .catch((error) => {
            setError(true);
            setStatus(false);
          });
      });
    };
    fetchContent();
  }, [url]);
  return {
    data: fetchedData,
    status: status,
    isError: error,
  };
}

export default DataFetch;
