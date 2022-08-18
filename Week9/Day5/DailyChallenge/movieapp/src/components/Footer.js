import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <p>
          Using React JS & Redux JS integrated with external movies data API
          <a href="http://www.omdbapi.com/">OMDB</a>
        </p>
      </>
    );
  }
}

export default Footer;
