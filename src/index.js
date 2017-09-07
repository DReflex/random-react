import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'

class Quote extends React.Component{
  constructor(){
    super()
    this.state ={
      quote:"this is Qoute",
      author: "author"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    fetch('https://talaikis.com/api/quotes/random/').then(function(data){
      return data.json();
    }).then( res => {
      this.setState({quote: res.quote, author: res.author})

    })
  }
  render(){
    return(
      <div>
        <h1>This is Random Quote Machine</h1>
        <div id="quote-box" className="box">
        <div className="box1">
          <h2 id="text"> {this.state.quote}</h2><br />
          <p id='author'> {this.state.author}</p>

        </div>
        <div className="button-align">
          <button onClick={this.handleClick} id="new-quote" className="btn btn-danger" name="button">New Quote</button>
          <a id="tweet-quote" className="btn btn-info" target="_blank" href={`https://twitter.com/intent/tweet?text= ${this.state.quote}`}>Tweet</a>
        </div>

          </div>
      </div>
    )
  }
}
ReactDOM.render(<Quote />, document.getElementById('root'))
