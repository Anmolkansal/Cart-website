import React from "react";

export default function Product(props) {

    const mystyle = {
      color: "red",
      backgroundColor: "white",
      padding: "5px",
      fontFamily: "Arial"
    };

  return (
    <div className="row mt-2" style={{marginBottom:'50px'}}>
      <div className="col-5">
        <h2 style={{fontSize:25,border:'2px solid black'}}className="badge rounded-pill bg-warning text-dark">
          {props.product.name}
        </h2><br />
          <span style={{fontSize:20,border:'1px solid black'}}className="badge bg-secondary">₹{props.product.price}</span>
      </div>
      <div style={{fontSize:20}} className="col-3">
        <div
          class="btn-group"
          role="group"
          style={{height:50}}
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            id="bnm"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div style={mystyle} className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
        className="col-2 mb-5 btn btn-danger"
        style={{padding:15,border:'3px solid black',borderRadius:'30px',marginTop:2}}
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}