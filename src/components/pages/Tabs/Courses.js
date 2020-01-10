import React, { Component } from "react";
import CourseDetails from './CourseDetails'
import '../style.css';
import {ProductConsumer} from '../../../Context'
import {storeProducts} from './Data'

class Courses extends Component {
    constructor(){
      super();
      this.state={
        products:storeProducts
      }
    }
  render() {
    return (
      <div className="py-5">
      <div className='container'>
      <div className ='row'>
      
      <ProductConsumer>
     {value => {
       return value.products.map( product => {
         return <CourseDetails key ={product.id} product ={product}/>;
       })
     }}
      </ProductConsumer>
      </div>
     
      </div>
      </div>
    );
  }
}
export default Courses;
