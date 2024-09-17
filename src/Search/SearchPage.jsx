import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ProductCard } from '../Components/ProductCard';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Components/Footer';
import LoaderSc from '../Components/LoaderSc';
import { useTitle } from '../Context/TitleContext';
import searchFirebase from './searchFirebase';
import SearchBar from './SearchBar';
const SearchPage = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false); // Initialize loading as false
    const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '');
    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle(`Search: ${searchTerm} - M.Yasmeen Designs`);
    }, [searchTerm, setTitle]);

    const handleSearch = async () => {
        setLoading(true); // Show loader
        try {
            const searchResults = await searchFirebase(searchTerm);
            setResults(searchResults);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Helmet>
                <title>{`Search: ${results.length} results found for "${searchTerm}" - M.Yasmeen Designs`}</title>
            </Helmet>
            <Navbar />
            <div>
                <div className="diplyflex">
                <SearchBar 
                    searchTerm={searchTerm} 
                    onSearch={handleSearch} 
                    onChange={handleSearchTermChange} 
                />
                </div>
                <h2  style={{padding:"20px", fontSize:"14px"}}> Searches for {searchTerm} ~</h2>

                {loading ? (
                    <LoaderSc /> // Show LoaderSc while loading
                ) : (
                    <>
                        <div className="product-grid">
                            {results.length > 0 ? (
                                results.map((result) => (
                                    <ProductCard
                                        key={result.id}
                                        id={result.id}
                                        image1={result.image1 || "No image"}
                                        image2={result.image2 || "No image"}
                                        title={result.title || "No Name"}
                                        code={result.code || "No Description"}
                                        price={result.price || "No Price"}
                                        collectionName={result.collection || "Unknown Collection"}
                                    />
                                ))
                            ) : (
                                <p>No results found.</p>
                            )}
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchPage;
