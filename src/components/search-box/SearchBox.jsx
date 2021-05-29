import React, { Component } from 'react';
import './SearchBox.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder="Search Countries"
    onChange={handleChange}
  />
);
