import React from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends React.Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h4> Your Courses </h4>
                  <CartColumns />
                  <CartList value= {value}/>
                  <CartTotals value={value}/>
                </React.Fragment>
              );
            }
            if (cart.length === 0) {
              return (
                <React.Fragment>
                  <EmptyCart />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
export default Cart;
