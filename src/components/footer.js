function Footer() {
    return(
        <footer>
      <div style={{padding: 20, marginTop: '5%'}}>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo"> <a href="index.html"><img src="images/img/logo1 copy.png" alt="#"/></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                     <p className="footer-text">It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum
                        passages, and more recently with desktop publishing software</p>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{paddingTop: 20}}>
                     <div>
                        <i className="fab fa-facebook-square" style={{marginRight: 20}}></i>
                        <i className="fab fa-twitter" style={{marginRight: 20}}></i>
                        <i className="fab fa-linkedin-in" style={{marginRight: 20}}></i>
                        <i className="fab fa-instagram" style={{marginRight: 20}}></i>
                        <i className="fab fa-youtube"></i>

                     </div>
                  </div>

               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="row" style={{paddingTop: 50}}>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <h5 className="footer-heading">Quick Links</h5>
                        <div>
                           <a href="#" className="footer-text">Invitation Cards</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Cake Boxes</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Thanking Cards</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Hotels and Resorts</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Contact Us</a>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <h5 className="footer-heading">Consultation</h5>
                        <div>
                           <a href="#" className="footer-text">Photographers</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Cinematographers</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Dresses</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Music &amp; DJ</a>
                        </div>
                        <div>
                           <a href="#" className="footer-text">Wedding Planning</a>
                        </div>
                     </div>

                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <h5 className="footer-heading">Contact</h5>
                        <div>
                           <p className="footer-text">store@wedshop.com</p>
                        </div>
                        <div>
                           <p className="footer-text">Hotline: +1 131 138 138</p>
                        </div>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </footer>
    );
}

export default Footer;