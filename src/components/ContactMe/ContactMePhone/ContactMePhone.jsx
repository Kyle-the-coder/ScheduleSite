import { useState } from "react";
import { FormButton } from "../../FormButton/FormButton";
import emailjs from "emailjs-com";
import "./contactmephone.css";

export default function ContactMePhone() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const emailId = import.meta.env.VITE_EMAIL2_ID;
  const templateId = import.meta.env.VITE_TEMP2_ID;
  const emailUserId = import.meta.env.VITE_EMAIL2_USERID;

  function sendMessage() {
    console.log(name, email, phone, option, message);

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_option: option,
      from_message: message,
    };

    emailjs.send(emailId, templateId, templateParams, emailUserId).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
      },
      (error) => {
        console.error("Failed to send email.", error);
      }
    );

    alert("Your message was successfully sent!");
  }

  return (
    <div className="contact-phone-main-container">
      <div className="contact-phone-left-display-container">
        <h1 className="m0 font3">
          <span className="darkPinkText">G</span>et In{" "}
          <span className="purpleText">T</span>ouch
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada. Nulla facilisi.
        </p>
      </div>
      <div className="contact-phone-right-form-container">
        <form className="contact-phone-form" onSubmit={sendMessage}>
          <div className="contact-phone-form-input-container">
            <div className="input-container">
              <label className="f1-2">Name:</label>
              <input
                type="text"
                className="input-field"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="f1-2">Email Address:</label>
              <input
                type="text"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contact-phone-form-input-container">
            <div className="input-container">
              <label className="f1-2">Phone:</label>
              <input
                type="text"
                className="input-field"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="f1-2">Interested In:</label>
              <select
                id="choice"
                className="input-field"
                defaultValue=""
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="" hidden disabled>
                  Select Option
                </option>
                <option value="pilates">Pilates</option>
                <option value="personal training">Personal Training</option>
                <option value="mobility renewal">Mobility Renewal</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="contact-phone-form-input-container">
            <div className="input-container area">
              <label className="f1-2">Message:</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="input-field area"
                rows={5}
                cols={10}
                type="text"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <FormButton buttonName="Send Message" />
        </form>
      </div>
    </div>
  );
}
