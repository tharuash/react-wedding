function Header() {
    return (
    <header>
      <div class="header">
         <div class="container">
            <div class="row">
               <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
                  <div class="full">
                     <div class="center-desk">
                        <div class="logo"> <a href="#"><img src="images/img/logo1 copy.png" alt="#"/></a> </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 my-auto">
                  <div class="menu-area">
                     <div class="limit-box">
                        <nav class="main-menu">
                           <ul class="menu-area-main">
                              <li class="active"> <a href="#" style={{textTransform: 'initial'}}>Bridal</a> </li>
                              <li> <a href="#about" style={{textTransform: 'initial'}}>Groom</a> </li>
                              <li><a href="#plant" style={{textTransform: 'initial'}}>Services</a></li>
                              <li><a href="#gallery" style={{textTransform: 'initial'}}>Packages</a></li>
                              <li><a href="#" style={{visibility: 'hidden'}}></a></li>
                              <li><a href="#" style={{color: '#FBB03B'}}>LOG IN</a></li>
                              <li><a href="#" style={{color: '#FBB03B'}} data-toggle="modal"
                                    data-target="#exampleModal">JOIN NOW</a></li>
                              <li><a href="#" class="btn btn-warning" style={{borderRadius: 20, color: 'white'}}>REGISTER
                                    YOUR BUISNESS</a></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
   </header>
    );
  }
  
  export default Header;