import {
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// Create a document in a collection with an optional custom ID
export const createDocumentInCollection = async (collectionName, documentData, documentId = null) => {
  try {
    if (typeof documentData !== 'object' || documentData === null) {
      throw new Error('Invalid document data. Expected an object.');
    }

    let docRef;
    
    // Use setDoc if a custom document ID is provided
    if (documentId && typeof documentId === 'string') {
      docRef = doc(db, collectionName, documentId);
      await setDoc(docRef, documentData); // Use setDoc to set the document data
    } else {
      // Use addDoc if no document ID is provided
      docRef = await addDoc(collection(db, collectionName), documentData);
    }

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error.message);
    throw new Error("Failed to add document");
  }
};

// Example of adding a new document with correct data structure
const documentData = {
  name: "Product Name",
  price: 100,
  description: "Product Description"
};

// Custom ID or let Firestore generate one
const documentId = "D6Q3Ms1YVQsqCaKpr3o1";

// Calling the function
await createDocumentInCollection("Kidswear", documentData, documentId);

// Existing functions

export const updateDocumentWithCustomID = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, data, { merge: true });
    console.log("Document updated with ID: ", docId);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw new Error("Failed to update document");
  }
};

export const createCollectionAndAddData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error.message);
    throw new Error("Failed to add document");
  }
};

// Add data to an existing collection with a specified document ID
export const addDataToExistingCollection = async (collectionName, docId, data) => {
  try {
    await setDoc(doc(db, collectionName, docId), data, { merge: true });
    console.log("Document updated with ID: ", docId);
  } catch (error) {
    console.error("Error updating document: ", error.message);
    throw new Error("Failed to update document");
  }
};

export const fetchCollectionNames = async () => {
  try {
    const collections = [
      "products",
      "Bridals",
      "Kidswear",
      "Unstitched",
      "jewelry",
      "Couture",
      "tikka-jhoomer",
      "rings",
      "earrings",
      "luxury-formals",
      "luxury-pret",
      "mommy-and-me"
    ];
    return collections;
  } catch (error) {
    console.error("Error fetching collection names: ", error);
    throw new Error("Failed to fetch collection names");
  }
};


// Fetch documents from a specific collection
export const fetchDocumentsFromCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw new Error("Failed to fetch documents");
  }
};

export const updateDataInCollection = async (collectionName, docId, updatedFields) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedFields);
    console.log("Document fields updated for ID: ", docId);
  } catch (error) {
    console.error("Error updating document fields: ", error.message);
    throw new Error("Failed to update document fields");
  }
};

export const fetchSubCollections = async (collectionName) => {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const subCollections = snapshot.docs.map(doc => doc.id);
    return subCollections;
  } catch (error) {
    console.error("Error fetching sub-collections: ", error.message);
    throw new Error("Failed to fetch sub-collections");
  }
};

export const deleteDataFromCollection = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docId);
  } catch (error) {
    console.error("Error deleting document: ", error.message);
    throw new Error("Failed to delete document");
  }
};