// src/components/DynamicForm.jsx

import React from "react";
import useDynamicForm from "../Utils/useDynamicForm";
import { Helmet } from "react-helmet-async";

const AddNewCollection = () => {
  const {
    collectionName,
    handleCollectionNameChange,
    fields,
    handleFieldChange,
    addField,
    removeField,
    data,
    handleDataChange,
    documentId,
    customId,
    handleCustomIdChange,
    handleSubmit,
    error
  } = useDynamicForm();

  return (
    <>
     <Helmet>
        <title>AddNew | M.Yasmeen</title>
      </Helmet>
    <div className="container mt-4">
      <h2>Add New Collection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="collectionName">Collection Name</label>
          <input
            type="text"
            className="form-control"
            id="collectionName"
            value={collectionName}
            onChange={handleCollectionNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="customId">Custom Document ID (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="customId"
            value={customId}
            onChange={handleCustomIdChange}
            placeholder="Enter a custom ID (leave empty to auto-generate)"
          />
        </div>

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
                required
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
                required
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
        <button type="button" className="btn btn-secondary" onClick={addField}>
          Add Field
        </button>

        <h3>Data</h3>
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`data-${field.name}`}>{field.name}</label>
            <input
              type="text"
              className="form-control"
              id={`data-${field.name}`}
              value={data[field.name] || ""}
              onChange={(e) => handleDataChange(field.name, e)}
            />
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {documentId && (
          <div className="mt-3">
            <h4>Document ID</h4>
            <p>{documentId}</p>
          </div>
        )}

        {error && (
          <div className="mt-3 alert alert-danger">
            {error}
          </div>
        )}
      </form>
    </div>
    
    </>
  );
};

export default AddNewCollection;