function SignUp(){
    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
         <div class="modal-content">
            
            <div>
               <div id="page">
                  <div class="modal-block d-flex flex-column">
                     <span class="modal-block__title">Create an account and discover the benefits</span>
                     <span class="modal-block__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                     <div class="form">
                        <form action="#">
                           <div class="row">
                              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <label class="form__label d-flex flex-column">
                                          <span>Company Name</span>
                                          <input type="text"/>
                                       </label>
                              </div>
                              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <label class="form__label d-flex flex-column">
                                          <span>Website</span>
                                          <input type="text"/>
                                       </label>
                              </div>
                           </div>
                           
                           <div class="row">
                                 <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                       <label class="form__label d-flex flex-column">
                                             <span>Address</span>
                                             <input type="text"/>
                                          </label>
                                 </div>
                                 <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                       <label class="form__label d-flex flex-column">
                                             <span>City</span>
                                             <input type="text"/>
                                          </label>
                                 </div>
                              </div>

                              <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                          <label class="form__label d-flex flex-column">
                                                <span>Postal Code / ZIP</span>
                                                <input type="text"/>
                                             </label>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                          <label class="form__label d-flex flex-column">
                                                <span>Phone number</span>
                                                <input type="text"/>
                                             </label>
                                    </div>
                                 </div>
                                 <div class="row">
                                       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                             <label class="form__label d-flex flex-column">
                                                   <span>Country</span>
                                                   <select name="country">
                                                      <option class="selected">USA</option>
                                                   </select>
                                                </label>
                                       </div>
                                       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                             <label class="form__label d-flex flex-column">
                                                   <span>Website</span>
                                                   <input type="text"/>
                                                </label>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 my-auto pt-2">
                                             <input type="checkbox" class="checkbox"/>
                                             <span>I agree to the Google Terms of Service and Privacy Policy</span>
                                       </div>
                                       
                                    </div>
                                    <div class="row d-flex justify-content-center" style={{textAlign: 'center', paddingTop: 30}}>
                                          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                          <button type="submit" class="form__label__btn">Sign Up</button>
                                          <div>
                                                <a href="#">Are your already a member?</a>
                                          </div>
                                       </div>
                                          
                                    </div>
                          
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary">Save changes</button>
            </div>
         </div>
      </div>
   </div>
    )
}

export default SignUp;