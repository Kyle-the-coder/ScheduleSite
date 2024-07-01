import { useState } from "react";
import { FormButton } from "../../FormButton/FormButton";
import "./contactmemonitor.css";

export default function ContactMeMonitor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    console.log(name, email, phone, option, message);
  }
  return (
    <div className="contact-monitor-main-container">
      <div className="contact-monitor-left-display-container">
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
      <div className="contact-monitor-right-form-container">
        <form className="contact-monitor-form" onSubmit={sendMessage}>
          <div className="contact-monitor-form-input-container">
            <div className="input-container">
              <label className="f1-5">Name:</label>
              <input
                type="text"
                className="input-field"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="f1-5">Email Address:</label>
              <input
                type="text"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contact-monitor-form-input-container">
            <div className="input-container">
              <label className="f1-5">Phone:</label>
              <input
                type="text"
                className="input-field"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="f1-5">Interested In:</label>
              <select
                id="choice"
                className="input-field"
                defaultValue=""
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Option
                </option>
                <option value="pilates">Pilates</option>
                <option value="personal training">Personal Training</option>
                <option value="mobility renewal">Mobility Renewal</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="contact-monitor-form-input-container">
            <div className="input-container area">
              <label className="f1-5">Message:</label>
              <textarea
                className="input-field area"
                rows={5}
                cols={10}
                type="text"
                style={{ width: "100%" }}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          {/* <button className="contact-monitor-button">Contact Me</button> */}
          <FormButton buttonName="Send Message" />
        </form>
      </div>
    </div>
  );
}
