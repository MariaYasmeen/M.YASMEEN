import React, { createContext, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';

const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('Default Title');

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </TitleContext.Provider>
    );
};

export const useTitle = () => useContext(TitleContext);
