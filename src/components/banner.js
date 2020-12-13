function Banner() {
    return (
        <section>
        <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
           <ol className="carousel-indicators">
              <li data-target="#main_slider" data-slide-to="0" className="active"></li>
              <li data-target="#main_slider" data-slide-to="1"></li>
              <li data-target="#main_slider" data-slide-to="2"></li>
           </ol>
           <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="images/img/beautiful-beauty-casual-2830170.png" width="100%"/>
              </div>

              <div className="carousel-item">
              <img src="images/img/beautiful-beauty-casual-2830170.png" width="100%"/>
              </div>

              <div className="container">
                  <div className="row marginii">
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="carousel-caption ">
                           <h1 style={{color: 'white'}}>Let's find <br/> Your wedding team</h1>
                           <div className="wrap">
                              <div className="search">
                                 <input type="text" className="searchTerm form-control"
                                    placeholder="Search hotels weddings photographers"/>
                                 <input type="text" className="searchTermMiddle form-control" placeholder="City/Country"/>
                                 <button type="submit" className="searchButton">
                                    <i className="fa fa-search"></i>
                                 </button>
                              </div>
                           </div>

                        </div>
                     </div>

                  </div>
               </div>
           </div>

           
           <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className='fas fa-arrow-left'></i></a>
           <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i className='fas fa-arrow-right'></i>
           </a>
        </div>
     </section>
    );
  }
  
  export default Banner;