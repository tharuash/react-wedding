function Subscriber() {
    return(
        <section style={{marginBottom: 90}}>
      <div id="subscribe" class="carousel slide banner-main container" data-ride="carousel">
        
         <div class="carousel-inner">
            <div class="carousel-item active">
               <div class="container">
                  <div class="row marginiii">
                     <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="carousel-caption">
                           <h1 style={{color: 'white'}}>Subscribe to our newsletter and <br/>receive exclusive offers every
                              week</h1>

                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-auto">
                        <div class="carousel-caption">
                           <input type="text" class="searchTerm form-control" placeholder="Enter your email"/>
                           <button type="submit" class="btn btn-primary subscribeButton">
                              SUBSCRIBE
                           </button>

                        </div>
                     </div>

                  </div>
               </div>

            </div>

         </div>
      </div>
   </section>
    )
}

export default Subscriber;

