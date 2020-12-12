import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Blogs() {
    return (
        <div id="plant" class="plants">

      <div class="container">
         <div class="row" id="image-slide">
             <OwlCarousel className="owl-carousel owl-theme" items={3}
			loop={true}
			autoplay= {false}
			autoplayTimeout= {3000}
			autoplayHoverPause= {true}
			autoWidth= {true}
			nav= {true}
            marginWidth={10}>

            <div class="plants-box item" style={{width: 560}}>
               <figure><img src="images/img/adult-black-clothes-dark-1040421.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>Latest Wedding <br/> Albums / Photographs</h3>

                  <a class="btn btn-primary" href="#" role="button">Show Collection</a>

               </div>

            </div>

            <div class="plants-box item" style={{width: 288}}>
               <figure><img src="images/img/beach-black-pants-black-shirt-2001293.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>Biggest Dress <br/> Store</h3>

                  <a class="btn btn-primary" href="#" role="button">More Details</a>

               </div>

            </div>

            <div class="plants-box item" style={{width: 288}}>
               <figure><img src="images/img/person-sale-sign-1785138.png" alt="img" /></figure>
               <div class="plants-box-text ">
                  <h3 style={{color: 'white'}}>37 Romantic<br/>Ways to Propose</h3>

                  <a class="btn btn-primary" href="#" role="button">View All</a>

               </div>

            </div>
            </OwlCarousel>



         </div>
         <a class="carousel-control-prev" href="#image-slide" role="button" data-slide="prev" id="image_slide_prev">
            <i class='fa fa-angle-left'></i></a>
         <a class="carousel-control-next" href="#image-slide" role="button" data-slide="next" id="image_slide_next">
            <i class='fa fa-angle-right'></i></a>

      </div>
   </div>
    );
  }
  
  export default Blogs;