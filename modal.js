modal=document.getElementById("sign_up_modal");
modal.innerHTML = `<div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="sign_up_modal_Title">GymSpot</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="sign_up">
                          <p>Don't have an account?</p>
                          <h2>Sign Up</h2>
                          <form class="signin_form">    
                              <li><label> Username: &nbsp </label> <input type="text" name="username" id="sign_up_username" value="" placeholder="username" /></li>
                              <li><label> Password: &nbsp </label><input type="password" name="password" id="sign_up_password" value="" placeholder="password" /></li>
                              <li><label> Repeat password: &nbsp </label><input type="password" name="password" id="sign_up_password_repeat" value="" placeholder="repeat password" /></li>
                              <li><label> Email: &nbsp </label><input type="email" name="email" id="sign_up_email" value="" placeholder="email" /></li>
                          </form>
                          <button class="btn btn-primary" id="sign_up_button">Sign Up</button>
                        </div>
                        <div class="sign_in">
                          <p>Already have an account?</p>
                          <h2>Log In</h2>
                          <form class="signin_form">
                              <li><label> Username: &nbsp </label><input type="text" name="username" id="sign_in_username" value="" placeholder="username" /></li>
                              <li><label> Password: &nbsp </label><input type="password" name="password" id="sign_in_password" value="" placeholder="password" /></li>
                          </form>
                          <button class="btn btn-primary" id="sign_in_button" data-dismiss="modal">Log In</button>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                    </div>`;