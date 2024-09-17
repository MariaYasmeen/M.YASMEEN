// DynamicForm.jsx

import React, { useState } from "react";
import { addDataToExistingCollection } from "../Utils/firebaseUtils";

const CategoryForm = ({ collectionName, fieldNames }) => {
  const [formData, setFormData] = useState({});
  const [newFieldName, setNewFieldName] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDataToExistingCollection(collectionName, formData);
      alert("Data added successfully!");
      setFormData({}); // Clear form data after submission
    } catch (error) {
      alert("Failed to add data. Please try again.");
    }
  };

  // Add new field
  const handleAddField = () => {
    if (newFieldName.trim() === "") {
      alert("Field name cannot be empty");
      return;
    }
    fieldNames.push(newFieldName); // Add new field to the array
    setNewFieldName(""); // Reset new field name
  };

  return (
    <div>
      <h1>Add Data to {collectionName}</h1>
      <form onSubmit={handleSubmit}>
        {fieldNames.map((field, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={field}>{field}</label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Add Data
        </button>
      </form>
      <div className="mt-3">
        <h2>Add New Field</h2>
        <input
          type="text"
          value={newFieldName}
          onChange={(e) => setNewFieldName(e.target.value)}
          className="form-control mb-2"
          placeholder="Enter new field name"
        />
        <button onClick={handleAddField} className="btn btn-secondary">
          Add Field
        </button>
      </div>
    </div>
  );
};

export default CategoryForm;
