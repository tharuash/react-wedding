import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Gallery() {
    return (
        <div id="gallery" className="Gallery plants" style={{paddingTop: 0, marginTop: 0}}>
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="titlepage" style={{paddingBottom: 0}}>
                  <h2>Gallery</h2>
               </div>
            </div>
         </div>
      </div>

      <div className="container">
         <div className="row" id="gallery_slider">
         <OwlCarousel className="owl-carousel owl-theme" items={4}
			loop={true}
			autoplay= {true}
			autoplayTimeout= {3000}
			autoplayHoverPause= {true}
         nav= {true}
         dots={false}
         navClass={'.gallery_slide_prev', '.gallery_slide_next'}
         id="gallery_slide"
         >

            <div className="plants-box item">
               <figure><img src="images/img/AdobeStock_236655481.png" alt="img" /></figure>
               <div className="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/>Store</h3>

                  <a className="btn btn-primary" href="#" role="button">More Details</a>

               </div>

            </div>

            <div className="plants-box item">
               <figure><img src="images/img/AdobeStock_118120200.png" alt="img" /></figure>
               <div className="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a className="btn btn-primary" href="#" role="button">More Details</a>

               </div>

            </div>

            <div className="plants-box item">
               <figure><img src="images/img/AdobeStock_136908398.png" alt="img" /></figure>
               <div className="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a className="btn btn-primary" href="#" role="button">More Details</a>


               </div>

            </div>
            <div className="plants-box item">
               <figure><img src="images/img/AdobeStock_173519034.png" alt="img" /></figure>
               <div className="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a className="btn btn-primary" href="#" role="button">More Details</a>


               </div>

            </div>

            <div className="plants-box item">
               <figure><img src="images/img/AdobeStock_173519034.png" alt="img" /></figure>
               <div className="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a className="btn btn-primary" href="#" role="button">More Details</a>


               </div>

            </div>


            </OwlCarousel>
         </div>

      </div>
   </div>
    );
  }
  
  export default Gallery;