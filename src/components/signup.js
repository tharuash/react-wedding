function SignUp(){
    return(
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
         <div className="modal-content">
            
            <div>
               <div id="page">
                  <div className="modal-block d-flex flex-column">
                     <span className="modal-block__title">Create an account and discover the benefits</span>
                     <span className="modal-block__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                     <div className="form">
                        <form action="#">
                           <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <label className="form__label d-flex flex-column">
                                          <span>Company Name</span>
                                          <input type="text"/>
                                       </label>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <label className="form__label d-flex flex-column">
                                          <span>Website</span>
                                          <input type="text"/>
                                       </label>
                              </div>
                           </div>
                           
                           <div className="row">
                                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                       <label className="form__label d-flex flex-column">
                                             <span>Address</span>
                                             <input type="text"/>
                                          </label>
                                 </div>
                                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                       <label className="form__label d-flex flex-column">
                                             <span>City</span>
                                             <input type="text"/>
                                          </label>
                                 </div>
                              </div>

                              <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                          <label className="form__label d-flex flex-column">
                                                <span>Postal Code / ZIP</span>
                                                <input type="text"/>
                                             </label>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                          <label className="form__label d-flex flex-column">
                                                <span>Phone number</span>
                                                <input type="text"/>
                                             </label>
                                    </div>
                                 </div>
                                 <div className="row">
                                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                             <label className="form__label d-flex flex-column">
                                                   <span>Country</span>
                                                   <select name="country">
                                                      <option className="selected">USA</option>
                                                   </select>
                                                </label>
                                       </div>
                                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                             <label className="form__label d-flex flex-column">
                                                   <span>Website</span>
                                                   <input type="text"/>
                                                </label>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 my-auto pt-2">
                                             <input type="checkbox" className="checkbox"/>
                                             <span>I agree to the Google Terms of Service and Privacy Policy</span>
                                       </div>
                                       
                                    </div>
                                    <div className="row d-flex justify-content-center" style={{textAlign: 'center', paddingTop: 30}}>
                                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                          <button type="submit" className="form__label__btn">Sign Up</button>
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
            <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" className="btn btn-primary">Save changes</button>
            </div>
         </div>
      </div>
   </div>
    )
}

export default SignUp;