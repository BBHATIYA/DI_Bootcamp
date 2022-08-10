import React from "react";
import "./Products.css";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchText: "",
      name: "",
      price: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5001/api/products/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handelChange = (e) => {
  //   this.setState({ searchText: e.target.value });
  // };

  handelClick = () => {
    // console.log(this.state.searchText);
    fetch(
      `http://localhost:5001/api/products/search?q=${this.state.searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handelInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addProduct = () => {
    const { name, price } = this.state;
    fetch("http://localhost:5001/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <h1>Shop</h1>
        <div>
          <input
            type="text"
            onChange={this.handelInput}
            name="searchText"
          ></input>
          <button onClick={this.handelClick}>Search</button>
        </div>
        <div>
          name:
          <input type="text" onChange={this.handelInput} name="name"></input>
          Price:
          <input type="text" onChange={this.handelInput} name="price"></input>
          <button onClick={this.addProduct}>Add Products</button>
        </div>
        {this.state.products.map((item) => {
          return (
            <div className="product" key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.price}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Products;
