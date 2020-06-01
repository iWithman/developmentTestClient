import React, { Component } from 'react';
import './productDetails.css'

class Product extends Component {
  state = {  }
  render() { 
    const { data: product } = this.props
    return ( 
      <div className='card'>
        <div className='row p-5'>
          <div className='col-md-4'>
            <div className='col-md-12 text-center'>
              <img alt='phone' src={require('../../assets/images/iphone_xs_max.png')} />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='col-md-12'>
              <div className='d-flex flex-column pb-3'>
                <div className='name-details-container'>
                  <div>{product.Name}</div>
                  <h3 className='font-weight-bolder'>{product.Description}</h3>
                  <hr />
                </div>
                <p>{product.Summary}</p>
                <div className='options-container mb-3'>
                  <div>Free shipping</div>
                  <div>Free SIMP card included</div>
                </div>
                <div className='colors-main-container mt-3'>
                  <h5>COLOR: BLACK</h5>
                  <div className=' btn-group btn-group-toggle colors-container d-flex'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="color1" value="option1" />
                      {/* <label className="form-check-label" for="color1">
                      </label> */}
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="color2" value="option2" />
                      {/* <label className="form-check-label" for="color2">
                      </label> */}
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="color3" value="option3" />
                      {/* <label className="form-check-label" for="color3">
                      </label> */}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className='storage-container'>
                <h5>STORAGE</h5>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-outline-secondary rounded active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
                  </label>
                  <label class="btn btn-outline-secondary rounded ml-2 mr-2">
                    <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
                  </label>
                  <label class="btn btn-outline-secondary rounded">
                    <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
                  </label>
                </div>
              </div>
              <hr />
              <div className='payment-container'>
                <h5>PAYMENT</h5>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-outline-secondary rounded active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Pay Monthly
                  </label>
                  <label class="btn btn-outline-secondary rounded ml-2 mr-2">
                    <input type="radio" name="options" id="option2" autocomplete="off" /> Pay In Full
                  </label>
                </div>
              </div>
              <div className='payment-options-container mt-4'>
                <h5 className='payment-option1'>FINANCE WITH</h5>
                <div className='d-flex'>
                  <div>$10.15 / mo.</div>
                  <div className='ml-5'>SMARTPAY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;