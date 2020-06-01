import React from 'react';
import './products.css'
import { Link } from 'react-router-dom';

const ProductCards = ({ data, onSelectProductFn, onSelectedProductIndex }) => {
  return ( 
    <div className='row'>
      {data.map((product, index) => (
        <div key={product.ProductId} className='col-md-4 pl-2 pr-2'>
          <div id='the-card' className="card col-md-12 p-3 m-1">
            <div className='text-center'>
              <img style={{ width: '100px'}} src={require('../assets/images/byop.png')} className="card-img-top" alt="..." />
            </div>
            <div className="">
              <p className="card-title m-0 font-2">{product.Name}</p>
              <h5 className="card-text font-1">{product.Description}</h5>
              <hr />
              <div className='d-flex colors-container mb-3 bt-3'>
                <div className='color color1'></div>
                <div className='color ml-2 mr-2 color2'></div>
                <div className='color color3'></div>
              </div>
              <div className='d-flex justify-content-between prices-container'>
                <h5 className='align-self-center'>{`$${product.Price}`}</h5>
                <div className='divider'></div>
                <div className='monthly-container mr-2'>
                  <h5 className='m-0'>$10.15/mo</h5>
                  <div className='font-2'>For 24 mos.</div>
                </div>
              </div>
              <Link
                to={`/products/${product.ProductId}`}
                onClick={() => onSelectProductFn(index)}
                selected={ onSelectedProductIndex === index}
                className='btn btn-outline-primary col-12 mb-3 mt-3'
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
 
export default ProductCards;