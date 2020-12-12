function Subscriber() {
    return(
        <section style={{marginBottom: 90}}>
      <div id="subscribe" className="carousel slide banner-main container" data-ride="carousel">
        
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="container">
                  <div className="row marginiii">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="carousel-caption">
                           <h1 style={{color: 'white'}}>Subscribe to our newsletter and <br/>receive exclusive offers every
                              week</h1>

                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-auto">
                        <div className="carousel-caption">
                           <input type="text" className="searchTerm form-control" placeholder="Enter your email"/>
                           <button type="submit" className="btn btn-primary subscribeButton">
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

