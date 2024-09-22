import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
  });

  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [msgError, setMsgError] = useState("")

  const [isFormVisible, setIsFormVisible] = useState(true)
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    let validForm = true

    if (formData.firstName.trim() === "") {
        setFirstNameError("First name is required")
        validForm = false
    }
    else {
        setFirstNameError("")
    }

    if (formData.lastName.trim() === "") {
        setLastNameError("Last name is required")
        validForm = false
    }
    else {
        setLastNameError("")
    }

    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setEmailError("Please enter a valid email address")
        validForm = false
    }
    else {
        setEmailError("")
    }

    if (formData.msg.trim() === "") {
        setMsgError("Message is required")
        validForm = false
    }
    else {
        setMsgError("")
    }

    if (validForm) {
        setIsFormVisible(false)
        setIsSuccessVisible(true)
    }

    

  }
  return (
    <div className="contact-page">
    <div className="contact" style={{display: isFormVisible ? "block" : "none"}}>
      <h2>Got questions?</h2>
      <p>
        We'd love to hear from you! Send us a message using the form below and
        we'll get back to you as soon as we can.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="name-inputs">
        <input
          type="text"
          placeholder="First name"
          className="first-name-box"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
        <p>{firstNameError}</p>
        <input
          type="text"
          placeholder="Last name"
          className="last-name-box"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
             <p>{lastNameError}</p>
             </div>
        <input
          type="text"
          placeholder="Email address"
          className="email-box"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
             <p>{emailError}</p>
        <textarea
          placeholder="Message"
          className="message-box"
          name="msg"
          value={formData.msg}
          onChange={handleChange}
       />
             <p>{msgError}</p>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
    <div className="success" style={{display: isSuccessVisible ? "block" : "none"}}>
        <div className="success-content-container">
        <img src= "./assets/images/thank-you.jpg" alt="hands joined together in a praying position"/>
        <div className="success-text-container"><h2>Thank you!</h2>
        <p>Your message has been sent successfully. A member of our team will get back to you as soon as possible.</p>
        </div>
    </div>
    </div>
    </div>
  );
}
