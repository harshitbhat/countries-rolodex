import React, { Component } from 'react';
import { Card } from '../card/Card';
import './CardList.css';

export const CardList = (props) => (
  <div className="CardList">
    {props.countries.length > 0 &&
      props.countries.map((country) => (
        <Card key={country.numericCode} country={country} />
      ))}
  </div>
);
