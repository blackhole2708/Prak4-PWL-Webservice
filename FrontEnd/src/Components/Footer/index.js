import React from "react";

const Footer = () => (
  <footer style={{backgroundColor:'#247881',color:'white'}} className="page-footer font-small blue pt-4 mt-5">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Hasiholan Owen Ambarita</h5>
          <p>
          Motivasi untuk menuangkan ide dalam sebuah aplikasi menjadikan saya semangat untuk belajar dunia IT. Semoga saya dapat berguna bagi masyarakat dalam bidang IT.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">KONTAK</h5>
          <ul className="list-unstyled"> 
            <li>
              <a  style={{color:'white', textDecoration:'none'}} href="#!">WA : 08989180249</a>
            </li>
            <li>
              <a href="#!"  style={{color:'white', textDecoration:'none'}}>Email : hasiholan.119140173@student.itera.ac.id</a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
    </div>
  </footer>
);

export default Footer;
