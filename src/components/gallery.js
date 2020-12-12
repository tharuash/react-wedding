import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Gallery() {
    return (
        <div id="gallery" class="Gallery plants" style={{paddingTop: 0}}>
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <div class="titlepage" style={{paddingBottom: 0}}>
                  <h2>Gallery</h2>
               </div>
            </div>
         </div>
      </div>

      <div class="container">
         <div class="row" id="gallery_slider">
         <OwlCarousel className="owl-carousel owl-theme" items={4}
			loop={true}
			autoplay= {false}
			autoplayTimeout= {3000}
			autoplayHoverPause= {true}
            nav= {true}
            >

            <div class="plants-box item">
               <figure><img src="images/img/AdobeStock_236655481.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/>Store</h3>

                  <a class="btn btn-primary" href="#" role="button">More Details</a>

               </div>

            </div>

            <div class="plants-box item">
               <figure><img src="images/img/AdobeStock_118120200.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a class="btn btn-primary" href="#" role="button">More Details</a>

               </div>

            </div>

            <div class="plants-box item">
               <figure><img src="images/img/AdobeStock_136908398.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a class="btn btn-primary" href="#" role="button">More Details</a>


               </div>

            </div>
            <div class="plants-box item">
               <figure><img src="images/img/AdobeStock_173519034.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a class="btn btn-primary" href="#" role="button">More Details</a>


               </div>

            </div>


            </OwlCarousel>
         </div>
         <a class="carousel-control-prev" href="#gallery_slide" role="button" data-slide="prev" id="image_slide_prev"
            style={{top: 1860}}>
            <i class='fa fa-angle-left'></i></a>
         <a class="carousel-control-next" href="#gallery-slide" role="button" data-slide="next" id="image_slide_next"
            style={{top: 1860}}>
            <i class='fa fa-angle-right'></i></a>

      </div>
   </div>
    );
  }
  
  export default Gallery;