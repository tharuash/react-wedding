function Banner() {
    return (
        <section>
        <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
           <ol class="carousel-indicators">
              <li data-target="#main_slider" data-slide-to="0" class="active"></li>
              <li data-target="#main_slider" data-slide-to="1"></li>
              <li data-target="#main_slider" data-slide-to="2"></li>
           </ol>
           <div class="carousel-inner">
              <div class="carousel-item active">
                 <div class="container">
                    <div class="row marginii">
                       <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div class="carousel-caption ">
                             <h1 style={{color: 'white'}}>Let's find <br/> Your wedding team</h1>
                             <div class="wrap">
                                <div class="search">
                                   <input type="text" class="searchTerm form-control"
                                      placeholder="Search hotels weddings photographers"/>
                                   <input type="text" class="searchTermMiddle form-control" placeholder="City/Country"/>
                                   <button type="submit" class="searchButton">
                                      <i class="fa fa-search"></i>
                                   </button>
                                </div>
                             </div>
  
                          </div>
                       </div>
  
                    </div>
                 </div>
  
              </div>
  
           </div>
           <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i class='fa fa-angle-left'></i></a>
           <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i class='fa fa-angle-right'></i>
           </a>
        </div>
     </section>
    );
  }
  
  export default Banner;