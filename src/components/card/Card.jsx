import React, { Component } from 'react';
import './Card.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt={props.country.name} src={props.country.flag}></img>
    <h2>{props.country.name}</h2>
    <div className="data-table">
      <table>
        <tbody>
          <tr>
            <td>Capital: </td>
            <td className="second-td">{props.country.capital}</td>
          </tr>
          <tr>
            <td>Region: </td>
            <td className="second-td">{props.country.region}</td>
          </tr>
          <tr>
            <td>Sub Region: </td>
            <td className="second-td">{props.country.subregion}</td>
          </tr>
          <tr>
            <td>Population: </td>
            <td className="second-td">{props.country.population}</td>
          </tr>
          <tr>
            <td>TimeZones: </td>
            <td className="second-td">{props.country.timezones[0]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
