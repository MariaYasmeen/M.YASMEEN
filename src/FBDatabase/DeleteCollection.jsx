import React, { useState, useEffect } from "react";
import { fetchCollectionNamesAsync, deleteCollectionAsync } from "../Utils/CRUDUtils";
import LoaderSc from "../Components/LoaderSc";
import { Helmet } from "react-helmet-async";

const DeleteCollection = () => {
  const [collectionNames, setCollectionNames] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch collection names when component mounts
  useEffect(() => {
    const getCollectionNames = async () => {
      try {
        setIsLoading(true);
        const collections = await fetchCollectionNamesAsync();
        setCollectionNames(collections);
      } catch (error) {
        console.error("Failed to fetch collection names: ", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCollectionNames();
  }, []);

  const handleCollectionChange = (e) => {
    setSelectedCollection(e.target.value);
  };

  const handleDeleteCollection = async (e) => {
    e.preventDefault();
    if (!selectedCollection) return;

    if (window.confirm("Are you sure you want to delete this collection? This action cannot be undone.")) {
      try {
        await deleteCollectionAsync(selectedCollection);
        setCollectionNames(collections => collections.filter(name => name !== selectedCollection));
        setSelectedCollection("");
        alert("Collection deleted successfully.");
      } catch (error) {
        alert("Failed to delete collection.");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Delete Collection | M.Yasmeen</title>
      </Helmet>
      <div className="container mt-4">
        <h2>Delete Collection</h2>
        <form>
          <div className="form-group">
            <label htmlFor="collectionSelect">Select Collection</label>
            <select
              id="collectionSelect"
              className="form-control"
              value={selectedCollection}
              onChange={handleCollectionChange}
            >
              <option value="">Select Collection</option>
              {collectionNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {selectedCollection && (
            <button
              type="button"
              className="btn btn-danger mt-3"
              onClick={handleDeleteCollection}
            >
              Delete Collection
            </button>
          )}
        </form>
        {isLoading && <LoaderSc />}
      </div>
    </>
  );
};

export default DeleteCollection;
