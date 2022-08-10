import React from "react";

class App2 extends React.Component {
  constructor(props) {
    super(props);
  }

  sendData = async () => {
    let data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };
    try {
      await fetch("https://webhook.site/7cc52f05-d735-4e8c-8dca-58be27ce23a7", {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <button onClick={this.sendData}>Press me to post some data</button>
      </>
    );
  }
}

export default App2;

// https://webhook.site/7cc52f05-d735-4e8c-8dca-58be27ce23a7

// 7cc52f05-d735-4e8c-8dca-58be27ce23a7@email.webhook.site
