import React, { useState, useEffect } from "react";
import {
  fetchCollectionNamesAsync,
  fetchDocumentsAsync,
  updateDocumentAsync,
  deleteDocumentAsync,
  createDocumentInCollection
} from "../Utils/CRUDUtils";
import LoaderSc from "../Components/LoaderSc";
import { Helmet } from "react-helmet-async";

const UpdateCollection = () => {
  const [collectionNames, setCollectionNames] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newDocumentId, setNewDocumentId] = useState(""); // For new document ID
  const [isAddingNewDoc, setIsAddingNewDoc] = useState(false); // Flag to add new document

  // Fetch collection names when component mounts
  useEffect(() => {
    const getCollectionNames = async () => {
      try {
        const collections = await fetchCollectionNamesAsync();
        setCollectionNames(collections);
      } catch (error) {
        console.error("Failed to fetch collection names: ", error.message);
      }
    };

    getCollectionNames();
  }, []);

  // Fetch documents when the selected collection changes
  useEffect(() => {
    if (selectedCollection) {
      const getDocuments = async () => {
        try {
          setIsLoading(true);
          const docs = await fetchDocumentsAsync(selectedCollection);
          setDocuments(docs);
          setSelectedDocument(""); // Clear selected document
          setFields([]); // Clear fields
          setIsAddingNewDoc(false); // Reset new document flag
        } catch (error) {
          console.error("Failed to fetch documents: ", error.message);
        } finally {
          setIsLoading(false);
        }
      };

      getDocuments();
    }
  }, [selectedCollection]);

  // Load fields of selected document
  useEffect(() => {
    if (selectedDocument) {
      const loadFields = () => {
        const docData = documents.find(doc => doc.id === selectedDocument);
        if (docData) {
          const fieldEntries = Object.entries(docData).filter(([key]) => key !== "id");
          setFields(fieldEntries.map(([key, value]) => ({ name: key, value })));
        }
      };

      loadFields();
    }
  }, [selectedDocument, documents]);

  const handleCollectionChange = (e) => {
    setSelectedCollection(e.target.value);
  };

  const handleDocumentChange = (e) => {
    setSelectedDocument(e.target.value);
    setIsAddingNewDoc(false); // Disable new document mode when selecting an existing document
  };

  const handleFieldChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", value: "" }]);
  };

  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedDocument) return;

    const updatedFields = fields.reduce((acc, field) => {
      if (field.name) {
        acc[field.name] = field.value;
      }
      return acc;
    }, {});

    try {
      await updateDocumentAsync(selectedCollection, selectedDocument, updatedFields);
      alert("Document updated successfully.");
    } catch (error) {
      alert("Failed to update document.");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!selectedDocument) return;

    try {
      await deleteDocumentAsync(selectedCollection, selectedDocument);
      setDocuments(docs => docs.filter(doc => doc.id !== selectedDocument)); // Update documents state
      setSelectedDocument(""); // Clear selected document
      setFields([]); // Clear fields
      alert("Document deleted successfully.");
    } catch (error) {
      alert("Failed to delete document.");
    }
  };

  const handleAddNewDocument = async (e) => {
    e.preventDefault();
  
    const newDocFields = fields.reduce((acc, field) => {
      if (field.name) {
        acc[field.name] = field.value;
      }
      return acc;
    }, {});
  
    try {
      let documentId = newDocumentId.trim() ? newDocumentId : null;
      const addedDocumentId = await createDocumentInCollection(selectedCollection, newDocFields, documentId);
  
      setDocuments([...documents, { id: addedDocumentId, ...newDocFields }]); // Update documents state
      alert("Document added successfully.");
      setNewDocumentId(""); // Clear new document ID
      setFields([]); // Clear fields
    } catch (error) {
      alert("Failed to add document.");
    }
  };
  
  const toggleAddNewDocMode = () => {
    setIsAddingNewDoc(!isAddingNewDoc);
    setSelectedDocument(""); // Clear selected document
    setFields([]); // Clear fields
  };

  return (
    <>
      <Helmet>
        <title>Update | M.Yasmeen</title>
      </Helmet>
      <div className="container mt-4">
        <h2>Update/Delete Document</h2>
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

          {selectedCollection && !isAddingNewDoc && (
            <>
              <div className="form-group">
                <label htmlFor="documentSelect">Select Document</label>
                <select
                  id="documentSelect"
                  className="form-control"
                  value={selectedDocument}
                  onChange={handleDocumentChange}
                >
                  <option value="">Select Document</option>
                  {documents.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.id}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {selectedCollection && (
            <>
              <button
                type="button"
                className="btn btn-secondary mt-2"
                onClick={toggleAddNewDocMode}
              >
                {isAddingNewDoc ? "Cancel Add New Document" : "Add New Document"}
              </button>
            </>
          )}

          {(selectedDocument || isAddingNewDoc) && (
            <div>
              {isAddingNewDoc && (
                <div className="form-group mt-3">
                  <label htmlFor="newDocumentId">Document ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="newDocumentId"
                    value={newDocumentId}
                    onChange={(e) => setNewDocumentId(e.target.value)}
                  />
                </div>
              )}

              <h3>Fields</h3>
              {fields.map((field, index) => (
                <div key={index} className="form-row">
                  <div className="form-group col-md-5">
                    <label htmlFor={`fieldName-${index}`}>Field Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`fieldName-${index}`}
                      name="name"
                      value={field.name}
                      onChange={(e) => handleFieldChange(index, e)}
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor={`fieldValue-${index}`}>Field Value</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`fieldValue-${index}`}
                      name="value"
                      value={field.value}
                      onChange={(e) => handleFieldChange(index, e)}
                    />
                  </div>
                  <div className="form-group col-md-2 d-flex align-items-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeField(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button type="button" className="btn btn-secondary mt-2" onClick={addField}>
                Add Field
              </button>

              <div className="mt-3">
                {isAddingNewDoc ? (
                  <button type="button" className="btn btn-primary" onClick={handleAddNewDocument}>
                    Add Document
                  </button>
                ) : (
                  <>
                    <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                      Update Document
                    </button>
                    <button type="button" className="btn btn-danger ml-2" onClick={handleDelete}>
                      Delete Document
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </form>
        {isLoading && <LoaderSc />}
      </div>
    </>
  );
};

export default UpdateCollection;
