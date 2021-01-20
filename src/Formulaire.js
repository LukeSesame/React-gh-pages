import React, { useState } from "react";
import './Formulaire.css';


function Formulaire() {
    
  const [submitting,setSubmitting] = useState(false);
  const handleSubmit = event =>{
    event.preventDefault();
    setSubmitting(true);

    setTimeout(()=> {setSubmitting(false);},3000)
    
  }

return (
    
  <div className="wrapper">
        
        {submitting && 
      <div>submitting Form ...</div>
      }
        <form onSubmit={handleSubmit}>
        
         <div class="banner">
          <h1>New Member Registration</h1>
                 </div>
         <div class="colums">
          <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" required/>
          </div>
          <div class="item">
            <label for="lname"> Last Name<span>*</span></label>
            <input id="lname" type="text" name="lname" required/>
          </div>
          <div class="item">
            <label for="address1">Address 1<span>*</span></label>
            <input id="address1" type="text"   name="address1" required/>
          </div>
          <div class="item">
            <label for="address2">Address 2<span>*</span></label>
            <input id="address2" type="text"   name="address2" required/>
          </div>
          <div class="item">
            <label for="state">State<span>*</span></label>
            <input id="state" type="text"   name="state" required/>
          </div>
          <div class="item">
            <label for="zip">Zip/Postal Code<span>*</span></label>
            <input id="zip" type="text" name="zip" required/>
          </div>
          <div class="item">
            <label for="city">City<span>*</span></label>
            <input id="city" type="text"   name="city" required/>
          </div>
          <div class="item">
            <label for="eaddress">Email Address<span>*</span></label>
            <input id="eaddress" type="text"   name="eaddress" required/>
          </div>
          <div class="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel"   name="phone" required/>
          </div>
         </div>
            <div class="question">
          <label>Membership Type</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="type"/>
              <label for="radio_1" class="radio"><span>Standard</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_2" name="type"/>
              <label for="radio_2" class="radio"><span>Premium</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_3" name="type"/>
              <label for="radio_3" class="radio"><span>Ultimate</span></label>
            </div>
          </div>
            </div>
         <div class="question">
          <label>Preferred way to contact </label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_4" name="contact"/>
              <label for="radio_4" class="radio"><span>Phone</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_5" name="contact"/>
              <label for="radio_5" class="radio"><span>Email</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_6" name="contact"/>
              <label for="radio_6" class="radio"><span>Any</span></label>
            </div>
          </div>
         </div>
            <h2>Terms and Conditions</h2>
         <input type="checkbox" name="checkbox1"></input>
         <label>You consent to receive communications from us electronically. We will communicate with you by e-mail or phone. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.</label>
         <div class="btn-block">
          <button type="submit" >Submit</button>
         </div>


         </form>

        
        
    </div>
)
}

export default Formulaire;
