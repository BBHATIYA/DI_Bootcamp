import React from "react";

class Voting extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  handelClick = (lang) => {
    // console.log("lang");
    lang.votes++;
    console.log(this.state.languages);
    this.setState({ languages: [...this.state.languages] });
  };

  render() {
    return (
      <div>
        <h1>Voting App</h1>
        {this.state.languages.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid #fff",
                padding: "20px",
                margin: "10px",
              }}
            >
              {item.name} {item.votes}
              <button onClick={() => this.handelClick(item)}>Vote</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Voting;
