import React, { Component } from 'react';
import { getProducts } from '../services/productService';
import WelcomeMessage from './welcomeMessage';
import ProductCards from './productCards';
import Product from './productDetails/product';
import ProductSpecifications from './productDetails/productSpecifications';

class Products extends Component {

  render() { 
    const { onSelectProductFn, onSelectedProductIndex, products } = this.props
    return ( 
      <div>
        <WelcomeMessage />
        <ProductCards
          props={this.props}
          data={products}
          onSelectProductFn={onSelectProductFn}
          onSelectedProductIndex={onSelectedProductIndex}
        />
      </div>
     );
  }
}
 
export default Products;