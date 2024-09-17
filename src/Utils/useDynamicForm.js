// src/hooks/useDynamicForm.js

import { useState } from "react";
import { createCollectionAndAddDataAsync } from "../Utils/CRUDUtils"

const useDynamicForm = () => {
  const [collectionName, setCollectionName] = useState("");
  const [fields, setFields] = useState([{ name: "", value: "" }]);
  const [data, setData] = useState({});
  const [documentId, setDocumentId] = useState("");
  const [customId, setCustomId] = useState("");
  const [error, setError] = useState(null);

  const handleCollectionNameChange = (e) => setCollectionName(e.target.value);
  const handleFieldChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };
  const addField = () => setFields([...fields, { name: "", value: "" }]);
  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    const updatedData = { ...data };
    delete updatedData[fields[index].name];
    setData(updatedData);
  };
  const handleDataChange = (fieldName, e) => {
    setData({
      ...data,
      [fieldName]: e.target.value,
    });
  };
  const handleCustomIdChange = (e) => setCustomId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = fields.reduce((acc, field) => {
      acc[field.name] = data[field.name] || field.value;
      return acc;
    }, {});
  
    console.log("Submitting data:", formattedData); // Debugging line
  
    try {
      const docId = await createCollectionAndAddDataAsync(collectionName, formattedData, customId);
      console.log("Document ID:", docId); // Debugging line
      setDocumentId(docId);
      alert(`Collection created and data added successfully. Document ID: ${docId}`);
      setCollectionName("");
      setFields([{ name: "", value: "" }]);
      setData({});
      setCustomId("");
    } catch (error) {
      console.error("Error adding data:", error); // Debugging line
      setError("Failed to add data. Please try again.");
    }
  };
  

  return {
    collectionName,
    setCollectionName,
    fields,
    setFields,
    data,
    setData,
    documentId,
    setDocumentId,
    customId,
    setCustomId,
    error,
    handleCollectionNameChange,
    handleFieldChange,
    addField,
    removeField,
    handleDataChange,
    handleCustomIdChange,
    handleSubmit
  };
};

export default useDynamicForm;