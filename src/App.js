import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      booksArray: [],
    }
    
  }

  stringifyFormData = (fd) => {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
      }
      return JSON.stringify(data, null, 2);
  }

  addBook = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log('data',data);
    console.log('e',e.target);

    // let stringifiedData = this.stringifyFormData(data);
    // console.log('stringifiedData',stringifiedData);


    // this.state.booksArray.push(stringifiedData)
    // console.log('this.state.booksArray',this.state.booksArray);


    e.target.reset();

  }




  discountPrompt = () => {
   let discountValue = prompt("What percent discount to apply?")/100;
   console.log(discountValue);

  this.state.booksArray.map(book => {
    book.price *= discountValue;
    console.log('this.state.booksArray',this.state.booksArray);


    return book
  })


  }

  test = (e) => {
    console.log('e',e);
    console.log('e.target.value',e.target.value);

  }


  render() {



    return (
      <div className="App">
        <form onSubmit={this.addBook}>
          <input type="text" name="title" placeholder="Title"/>
          <input type="text" name="author" placeholder="Author"/>
          <input type="integer" name="price" placeholder="Price"/>
          <button onClick={this.state.test}className="submit-btn" type="submit" name="submit">Submit Book</button>

        </form> 

        <button onClick={this.discountPrompt}>Calculate Total Price</button>
      </div>
    );
  }
}

export default App;
