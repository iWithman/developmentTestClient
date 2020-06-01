import React, { Component } from 'react';
import Product from './product';
import ProductSpecifications from './productSpecifications';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  state = {  }
  render() { 
    const { product } = this.props
    if( product === undefined ) {
      return (
        <Link className='btn btn-primary' to='/products'>Products</Link>
      )
    }
    return ( 
      <div id='product-details' className='container'>
        <Product 
          data={product}
        />
        <ProductSpecifications 
          data={product}
        />
      </div>
    );
  }
}

export default ProductDetails;