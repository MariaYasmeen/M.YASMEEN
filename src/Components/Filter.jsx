// src/Components/Filter.jsx

import React from "react";
import { Link } from "react-router-dom";

const Filter = ({ onFilterChange, onSortChange }) => {
    return (
        <>
            <div className="filtercss">
                <div className="text2">
                    <div className="nav-item">
                        <Link
                            to=""
                            className="nav-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            FILTER
                        </Link>
                        <ul className="dropdown-menu filterropdown">
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onFilterChange('PRICE')}
                                >
                                    <i className="fa-solid fa-tag"></i> PRICE
                                </button>
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onFilterChange('COLOR')}
                                >
                                    <i className="fa-solid fa-palette"></i> COLOR
                                </button>
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onFilterChange('SIZE')}
                                >
                                    <i className="fa-solid fa-shirt"></i> SIZE
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text1">
                    <div className="nav-item dropdown">
                        <Link
                            to=""
                            className="nav-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            SORT
                        </Link>
                        <ul className="dropdown-menu filterropdown">
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onSortChange('PRICE_LOW_TO_HIGH')}
                                >
                                    <i className="fa-solid fa-arrow-up-9-1"></i> PRICE: LOW TO HIGH
                                </button>
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onSortChange('PRICE_HIGH_TO_LOW')}
                                >
                                    <i className="fa-solid fa-arrow-down-9-1"></i> PRICE: HIGH TO LOW
                                </button>
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onSortChange('DATE_NEW_TO_OLD')}
                                >
                                    <i className="fa-regular fa-clock"></i> DATE: NEW TO OLD
                                </button>
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => onSortChange('DATE_OLD_TO_NEW')}
                                >
                                    <i className="fa-solid fa-clock-rotate-left"></i> DATE: OLD TO NEW
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;
