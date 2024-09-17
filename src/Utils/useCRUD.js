// src/hooks/useCRUD.js

import { useState, useEffect } from "react";
import { fetchCollectionNamesAsync, fetchDocumentsAsync, updateDocumentAsync, deleteDocumentAsync } from "./CRUDUtils"

const useCRUD = () => {
  const [collectionNames, setCollectionNames] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCollectionNames = async () => {
      try {
        const collections = await fetchCollectionNamesAsync();
        setCollectionNames(collections);
      } catch (error) {
        setError(error.message);
      }
    };

    getCollectionNames();
  }, []);

  useEffect(() => {
    if (selectedCollection) {
      const getDocuments = async () => {
        try {
          setIsLoading(true);
          const docs = await fetchDocumentsAsync(selectedCollection);
          setDocuments(docs);
          setSelectedDocument("");
          setFields([]);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      getDocuments();
    }
  }, [selectedCollection]);

  useEffect(() => {
    if (selectedDocument) {
      const loadFields = () => {
        const docData = documents.find(doc => doc.id === selectedDocument);
        if (docData) {
          const fieldEntries = Object.entries(docData).filter(([key]) => key !== 'id');
          setFields(fieldEntries.map(([key, value]) => ({ name: key, value })));
        }
      };

      loadFields();
    }
  }, [selectedDocument, documents]);

  const handleCollectionChange = (e) => setSelectedCollection(e.target.value);
  const handleDocumentChange = (e) => setSelectedDocument(e.target.value);
  const handleFieldChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };
  const addField = () => setFields([...fields, { name: "", value: "" }]);
  const removeField = (index) => setFields(fields.filter((_, i) => i !== index));
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedDocument) return;

    const updatedFields = fields.reduce((acc, field) => {
      if (field.name) acc[field.name] = field.value;
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
      setDocuments(docs => docs.filter(doc => doc.id !== selectedDocument));
      setSelectedDocument("");
      setFields([]);
      alert("Document deleted successfully.");
    } catch (error) {
      alert("Failed to delete document.");
    }
  };

  return {
    collectionNames,
    selectedCollection,
    setSelectedCollection,
    documents,
    selectedDocument,
    setSelectedDocument,
    fields,
    setFields,
    isLoading,
    error,
    handleCollectionChange,
    handleDocumentChange,
    handleFieldChange,
    addField,
    removeField,
    handleUpdate,
    handleDelete
  };
};

export default useCRUD;