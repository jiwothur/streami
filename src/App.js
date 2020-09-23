import React, { Component } from 'react';
import DogList from './DogList';
import './AutoCompleteText.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 10,
      dogs: [],
      names: [],
      suggestions: []
    }
  }

  getDogs = async (props) => {
    const name = props;
    await fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code !== 404) {
          this.setState({ dogs: data.message.slice(0, this.state.items) })
        }
        else {
          alert('해당 견종이 없습니다.');
        }
      })
  }
  getDogNames = async () => {
    await fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ names: Object.keys(data.message) })
      })
  }
  onTextChanged = (e) => {
    const { names } = this.state;
    const { value } = e.target;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = names.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value, items: 10 }));
  }
  suggestionSelected(value) {
    this.setState(() => ({ text: value, suggestions: [] }));
    this.getDogs(value);
  }
  handleKeyPress = (e) => {
    const { value } = e.target;
    if (e.key === "Enter") {
      this.setState(() => ({ text: value, suggestions: [] }));
      this.getDogs(value);
    }
  };
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map((dog) => {
          return <li onClick={() => this.suggestionSelected(dog)}>{dog}</li>
        })}
      </ul>
    )
  }
  infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      this.setState({
        items: this.state.items + 10
      })
      this.getDogs(this.state.text);
    }
  }

  componentDidMount() {
    this.getDogNames();
    window.addEventListener('scroll', this.infiniteScroll, true)
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Streami Assignment
        </h1>
        <div className="AutoCompleteText">
          <input type="text" value={text} onChange={this.onTextChanged} onKeyPress={this.handleKeyPress} />
          {this.renderSuggestions()}
        </div>
        <DogList dogs={this.state.dogs} />
      </div>
    )
  }
}

export default App;