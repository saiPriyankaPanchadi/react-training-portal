import React, { Component } from "react";
import { ProductConsumer } from "../../../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            enroll
          } = value.detailProduct;
          console.log(value.detailProduct);
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-dark my-5">
                  <h1> {title} </h1>
                </div>
              </div>
              {/* Product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="reactjs" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
                  <h3>Course : {title} </h3>
                  <h6 className="text-title text-muted mt-3 mb-2">
                    Sponsored by :
                    <span className="text-uppercase"> {company}</span>
                  </h6>
                  <h6 className="text-primary">
                    Price: <span>${price}</span>
                  </h6>
                  <p className=" text-capitalize font-weight-bold mt-3 mb-0">
                    Some Info about the Course :
                  </p>
                  <p className="text muted lead">{info}</p>
                  <div>
                  <Link to= "/courses">
                  <ButtonContainer>Back to Courses</ButtonContainer>
                  </Link>
                    <ButtonContainer enroll disabled ={enroll?true :false} onClick={()=>{
                      value.enroll(id)
                    }}> {enroll?"Enrolled" : "Enroll to course"}</ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default Details;
