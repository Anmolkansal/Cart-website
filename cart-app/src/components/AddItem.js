import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" style={{fontSize:25,border:'2px solid black'}} className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            placeholder="Enter Product Name"
            required
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" style={{fontSize:25,border:'2px solid black'}} className="form-label">
            Price
          </label>
          <input
            type="tel"
            className="form-control"
            id="price"
            name="productPrice"
            placeholder="Enter Product Price"
            required
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value});
            }}
            value={this.state.productPrice}
          />
        </div>
        <button style={{padding:10,height:50,marginTop:42,marginLeft:30,border:'2px solid black'}} type="submit" className="btn btn-primary col-1 mb-3">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;