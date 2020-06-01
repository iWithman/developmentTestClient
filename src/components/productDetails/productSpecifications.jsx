import React, { Component } from 'react';

class ProductSpecifications extends Component {
  state = {  }
  render() { 
    const { data: product } = this.props
    console.log(product);
    return ( 
      <div className='card mt-4'>
        {/* {product.Details} */}
        <h5 className='m-3'>SPECIFICATIONS</h5>
        <div className='col-md-12 p-5'>
          <table class="col-md-12 table table-borderless table-striped ">
            <tbody>
              <tr>
                <th scope="row" className='border-right font-weight-normal'>Operating System:</th>
                <td className='pl-5 text-muted'>Mark</td>
              </tr>
              <tr>
                <th scope="row" className='border-right'>Processor:</th>
                <td className='pl-5 text-muted'>A12 Bionic Chip</td>
              </tr>
              <tr>
                <th scope="row" className='border-right'>Display</th>
                <td className='pl-5 text-muted'>6.5-inch Super Retina display</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductSpecifications;