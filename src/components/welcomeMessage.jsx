import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className='row'>
      <div className="col-md-12 pl-2 pr-2">
        <div className='card col-md-12 p-5 m-1'>
          <h4 className='row ml-3'>welcome</h4>
          <div className="row d-flex justify-content-between">
            <div className="col-md-3 text-center">
              <img alt='welcome-img' src={require('../assets/images/Image29.png')} />
            </div>
            <div className='col-md-9 align-self-center'>
              <div className=" col-md-12 ">
                Welcome to Q Link Wireless... Dui, sit tortor magnis. 
                Aliquet dis pellentesque a torquent ac viverra. 
                Viverra sem lobortis mattis nostra vehicula. 
                Parturient sodales rutrum semper magnis sed consequat 
                sociis nibh massa.
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default WelcomeMessage;