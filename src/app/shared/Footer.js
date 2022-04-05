import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer align-self-center ">
        <div className="d-sm-flex  justify-content-center justify-content-sm-between py-2" >
          <span className="text-muted   text-sm-left d-block d-sm-inline-block"> Copyright ©  SuperVision 2022 </span>
          {/*<span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Free <a href="https://www.bootstrapdash.com/react-admin-templates/" target="_blank" rel="noopener noreferrer"> react admin </a> templates from BootstrapDash.com.  </span>*/}
        </div>
      </footer> 
    );
  }
}

export default Footer;