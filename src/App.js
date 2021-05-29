import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchField: '',
    };
  }
  async fetchCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();
    this.setState({ countries: data });
  }
  componentDidMount() {
    this.fetchCountries();
  }
  handleChange = (evt) => {
    this.setState({ searchField: evt.target.value });
  };
  render() {
    const { countries, searchField } = this.state;
    let filteredCountries = [];
    if (countries) {
      filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchField.toLowerCase())
      );
    }

    return (
      <div className="App">
        <h1>Countries Rolodex</h1>
        <SearchBox
          placeholder="Search Countries"
          handleChange={this.handleChange}
        />
        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default App;
