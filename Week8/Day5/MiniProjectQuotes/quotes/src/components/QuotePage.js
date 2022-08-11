import React from "react";
import QuotesDatabase from "./QuotesDatabase";

class QuotePage extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      color: "",
      num: 0,
    };
  }

  handelClick = () => {
    let quoteData = QuotesDatabase;
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomQuote;

    do {
      randomQuote = Math.floor(Math.random() * quoteData.length);
      console.log();
    } while (randomQuote === this.state.num);
    this.setState({ num: randomQuote });
    this.setState({ quote: quoteData[randomQuote] });
    this.setState({ color: "#" + randomColor });
  };

  render() {
    return (
      <body style={{ backgroundColor: this.state.color }} className="bodyStyle">
        <div style={{ backgroundColor: "#FFFFFF" }} className="divStyle">
          <h1 style={{ color: this.state.color }}>{this.state.quote.quote}</h1>
          <br></br>
          <i>{"-" + this.state.quote.author + "-"}</i>
          <br></br>
          <button
            className="btnStyle"
            style={{ backgroundColor: this.state.color }}
            onClick={this.handelClick}
          >
            New quote
          </button>
        </div>
      </body>
    );
  }
}

export default QuotePage;
