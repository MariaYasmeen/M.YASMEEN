// src/hooks/useFetchCollData.js

import { useState, useEffect } from "react";
import useFetchCollection from "../Utils/useFetchCollection"; // Assuming this is your existing hook
import LoaderSc from "../Components/LoaderSc"; // Import the LoadingScreen component

const useFetchCollData = (collectionName) => {
  const [showLoader, setShowLoader] = useState(true); // State to control the loading screen visibility
  const { data, loading, error } = useFetchCollection(collectionName);

  useEffect(() => {
    if (loading) {
      setShowLoader(true); // Show loader while fetching
    } else {
      setShowLoader(false); // Hide loader once data is fetched
    }
  }, [loading]);

  return { data, loading, error, showLoader };
};

export default useFetchCollData;
