import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize"> Courses</p>
        </div>
         <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize"> Course name</p>
        </div>
         <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize"> price</p>
        </div>
         <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Buy</p>
        </div>
         <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize"> remove</p>
        </div>
         <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize"> total</p>
        </div>
      </div>
    </div>
  );
}
