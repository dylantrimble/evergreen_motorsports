import React, { useState} from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import "../Main.css"



function contact() {

  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [userEmail, updateEmail] = useState('');
  const [userPhone, updatePhone] = useState('');
  const [userComment, updateComment] = useState('');
  const [fnameError, updatefNameError] = useState("");
  const [lnameError, updatelNameError] = useState("");
  const [phoneError, updatePhoneError] = useState("");
  const [commentError, updateComError] = useState("");
  const [errorMessage, updateErrorMessage] = useState("");


  const letters = /^[A-Za-z\s]*$/;
  const phoneNumbers = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  const checkName = (input, cb) => {
    if (!(input.match(letters)) || input === "") {
      updateErrorMessage("Name must only contain letters, spaces, and cannot be blank.");
      cb("error-styles");
    } else if (input.length > 500) {
      updateErrorMessage("Error, name must be less than 500 characters.");
      cb("error-styles");
    } else {
      console.log(`User input valid: ${input}`);
      updateErrorMessage("");
      cb("")
      return true;
    };
  };

  const checkComment = (input) => {
    if (input.length > 500) {
      updateErrorMessage("comment must be less than 500 characters.");
      updateComError("error-styles");
    } else if (input === "") {
      updateErrorMessage("comment box cannot be blank.");
      updateComError("error-styles");
    } else {
      console.log("User input valid: Comment");
      updateComError("");
      updateErrorMessage("");
      return true;
    };
  };

  const checkPhone = (input) => {
    if (!(input.match(phoneNumbers)) || input === ""){
      updateErrorMessage("Phone Number Must Only Contain Numbers and be 10 digits long");
      updatePhoneError("error-styles");
    }else{
      console.log("User input valid: Phone");
      updatePhoneError("");
      updateErrorMessage("");
      return true;
    }
  }
  const handleSubmit = e => {
    e.preventDefault();
    // console.log([firstName, lastName, userEmail, userPhone, userComment])
    if(checkName(firstName, updatefNameError) &&
      checkName(lastName, updatelNameError) &&
      checkComment(userComment) &&
      checkPhone(userPhone)){
        console.log([firstName, lastName, userEmail, userPhone, userComment])
    }

  }

  return (
    <>
      <NavBar />
      <div className='contact-container'>
        <div className="contact-info">
          <h1>Contact Us</h1>
          <h1>Evergreen Motorsports Headquarters</h1>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
            </svg> 123 Apex Avenue <br /> Seattle, WA 98106
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg> Mon-Fri 8:00AM - 6:00PM PST
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg> 704-613-drft
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
            </svg> questions@evergreenmotorsports.com
          </p>
        </div>
        <div className="contact-form-container">
          <section className="contact-heading">
            <div>
              <h1>Drop Us A Line</h1>
            </div>
          </section>
          <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              name="first-name"
              type="text" id='first-name'
              className={`contact-input ${fnameError}`}
              placeholder='First Name'
              onChange={e => updateFirstName(e.target.value)}
            />
            <input
              name="last-name"
              type="text" id='last-name'
              className={`contact-input ${lnameError}`}
              placeholder='Last Name'
              onChange={e => updateLastName(e.target.value)}
            />
            <input
              name="Email"
              type="email"
              id='cont-email '
              className={`contact-input`}
              placeholder='Email'
              onChange={e => updateEmail(e.target.value)}
            />
            <input
              name="phone-number"
              type="tel"
              id='phone-number '
              className={`contact-input ${phoneError}`}
              placeholder='phone number'
              onChange={e => updatePhone(e.target.value)}
            />
            <textarea
              name="comment"
              id="comment"
              className={`contact-input ${commentError}`}
              cols="45" rows="5"
              placeholder='Comments/Questoins'
              onChange={e => updateComment(e.target.value)}
            ></textarea>
            <br />
            <button className='cont-submit-btn' >Submit</button>
            <p className='error-message'>{errorMessage}</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default contact