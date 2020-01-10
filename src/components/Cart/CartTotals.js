import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { enrollSubTotal, enrollTax, enrollTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-captalize text-right ">
            <Link to="/courses">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title" >
              SubTotal:
              </span>
              <strong>$ {enrollSubTotal}</strong>
            </h5>
             <h5>
              <span className="text-title" >
              Tax:
              </span>
              <strong>$ {enrollTax}</strong>
            </h5>
             <h5>
              <span className="text-title" >
              Total:
              </span>
              <strong>$ {enrollTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
