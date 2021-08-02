import React from "react";
import "../Css/FooterCss.css";

const Footer = (): JSX.Element => (
  <footer
    className="footer bg-dark pt-4 text-light navbar-expand-sm mt-4"
    id="fotter"
  >
    <div className="container-fluid text-center text-md-left">
      <h5 className="text-uppercase">İletİşİm</h5>
      <div className="row">
        <div className="col-md-4">
          <h6>ADRES</h6>
          <p>
            Bağlıca Mahallesi Çambayırı Caddesi
            <br></br>
            Ankara/Etimesgut
            <br></br>
          </p>
        </div>
        <div className="col-md-4">
          <h6 className="text-uppercase">Telefon</h6>
          <p>
            Telefon Numarası: 05077344565 <br></br>
            Faks: +90 1-2222 8888
          </p>
        </div>
        <div className="col-md-4">
          <h6 className="text-uppercase">Mail</h6>
          <p>
            <a
              href="mailto:yakupkursat@hotmail.com"
              className="btn btn-outline-light col-md-5"
            >
              Buraya
            </a>
            <br></br> tıklayarak mail gönderebilirsiniz.
          </p>
        </div>
      </div>
      <hr className="clearfix w-100 d-md-none pb-0" />
    </div>
    {/* <hr className="mb-0"></hr> */}
    <div className="footer-copyright text-center py-3">
      Sayfanın tüm telif hakları saklıdır.
    </div>
  </footer>
);

export default Footer;
