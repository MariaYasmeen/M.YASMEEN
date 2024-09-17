// src/hooks/useFetchData.js

import { useState, useEffect } from "react";
import useFetchCollection from "./useFetchCollection";
import LoaderSc from "../Components/LoaderSc";

const useFetchData = (collectionName) => {
  const [showLoader, setShowLoader] = useState(true);
  const { data, loading, error } = useFetchCollection(collectionName);

  useEffect(() => {
    setShowLoader(loading);
  }, [loading]);

  return { data, loading, error, showLoader };
};

export default useFetchData;
