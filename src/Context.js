import React, { Component } from "react";
import { storeProducts, detailProduct } from "./components/pages/Tabs/Data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    enrollSubTotal: 0,
    enrollTax: 0,
    enrollTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

/*setProducts */
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

/*enroll */

  enroll = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.enroll = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

/*increment */
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  /*decrement */
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    }
else {
      product.total = product.count * product.price;
       this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
    }
   
  };

 /*removeItem */
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.enroll = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
 
 /*clearCart */
  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

/*addTotals */
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        enrollSubTotal: subTotal,
        enrollTax: tax,
        enrollTotal: total
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          enroll: this.enroll,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
