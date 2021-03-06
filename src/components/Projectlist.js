import React, { Component } from 'react';
import keyolologo from '../images/keyolologo1.png';
import checklogo from '../images/logocheck.png';

import { Link } from 'react-router-dom';



class Projectlist extends Component {
  render() {
    return (  
      
      <div>
        {/* <div className="row purple" >
          <div className="New">
            <form>
              <button type="button" className="small theme">Add New Project</button>
            </form>

          </div>
        </div> */}
                       
        <div className="row margint " >
          <div className="col-lg-2 col-sm-6">
            <div className="circle-tile">
              <a href="#">
                <div className="circle-tile-heading dark-blue">
                  <i className="fa fa-users fa-fw fa-3x">
                    <img src={keyolologo} className="img-modifiy " alt="chill-logo" />
                  </i>
                </div>
              </a>
              <div className="circle-tile-content dark-blue">
                <div className="circle-tile-description text-faded">
                  Keyolo
                                </div>
                <div className="circle-tile-number text-faded">
                  7
                                    <span id="sparklineA"></span>
                </div>
                 <Link to="/viewservices" className="circle-tile-footer">View Service<i className="fa fa-chevron-circle-right"></i> </Link>

                {/* <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a> */}
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="circle-tile">
              <a href="#">
                <div className="circle-tile-heading green">
                  <i className="fa fa-money fa-fw fa-3x">
                  <img src={checklogo} className="img-modifiy " alt="chill-logo" />
                  </i>
                </div>
              </a>
              <div className="circle-tile-content green">
                <div className="circle-tile-description text-faded">
                  Drop Box
                                </div>
                <div className="circle-tile-number text-faded">
                  5
                                </div>
                <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            </div>
          </div>

           <div className="col-lg-2 col-sm-6">
            <div className="circle-tile">
              <a href="#">
                <div className="circle-tile-heading dark-blue">
                  <i className="fa fa-users fa-fw fa-3x">
                    <img src={keyolologo} className="img-modifiy " alt="chill-logo" />
                  </i>
                </div>
              </a>
              <div className="circle-tile-content dark-blue">
                <div className="circle-tile-description text-faded">
                  Keyolo
                                </div>
                <div className="circle-tile-number text-faded">
                  7
                                    <span id="sparklineA"></span>
                </div>
                <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            </div>
          </div>
           <div className="col-lg-2 col-sm-6">
            <div className="circle-tile">
              <a href="#">
                <div className="circle-tile-heading green">
                  <i className="fa fa-money fa-fw fa-3x">
                  <img src={checklogo} className="img-modifiy " alt="chill-logo" />
                  </i>
                </div>
              </a>
              <div className="circle-tile-content green">
                <div className="circle-tile-description text-faded">
                  Drop Box
                                </div>
                <div className="circle-tile-number text-faded">
                  5
                                </div>
                <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            </div>
          </div>
      
      <div className="col-lg-2 col-sm-6">
            <div className="circle-tile">
              <a href="#">
                <div className="circle-tile-heading dark-blue">
                  <i className="fa fa-users fa-fw fa-3x">
                    <img src={keyolologo} className="img-modifiy " alt="chill-logo" />
                  </i>
                </div>
              </a>
              <div className="circle-tile-content dark-blue">
                <div className="circle-tile-description text-faded">
                  Keyolo
                                </div>
                <div className="circle-tile-number text-faded">
                  7
                                    <span id="sparklineA"></span>
                </div>
                <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            </div>
          </div>
           <div className="col-lg-2 col-sm-6">
            <div className="circle-tile">
              <a href="#">
                <div className="circle-tile-heading green">
                  <i className="fa fa-money fa-fw fa-3x">
                  <img src={checklogo} className="img-modifiy " alt="chill-logo" />
                  </i>
                </div>
              </a>
              <div className="circle-tile-content green">
                <div className="circle-tile-description text-faded">
                  Drop Box
                                </div>
                <div className="circle-tile-number text-faded">
                  5
                                </div>
                <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            </div>
          </div>
      
        
        
       
         

        </div>
      </div>
    );
  }
}
export default Projectlist;