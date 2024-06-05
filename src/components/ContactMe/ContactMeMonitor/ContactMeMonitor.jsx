import "./contactmemonitor.css";

export default function ContactMe() {
  return (
    <div className="contact-main-container">
      <div className="contact-left-display-container">
        <h1 className="m0 font3">
          <span className="darkPinkText">G</span>et In{" "}
          <span className="greenText">T</span>ouch
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada. Nulla facilisi.
        </p>
      </div>
      <div className="contact-right-form-container">
        <form className="contact-form">
          <div className="contact-form-input-container">
            <div className="input-container">
              <label>Name:</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-container">
              <label>Email Address:</label>
              <input type="text" className="input-field" />
            </div>
          </div>
          <div className="contact-form-input-container">
            <div className="input-container">
              <label>Phone:</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-container">
              <label>Interested In:</label>
              <select id="choice" className="input-field">
                <option value="">Select Option</option>
                <option value="pilates">Pilates</option>
                <option value="personal training">Personal Training</option>
                <option value="mobility renewal">Mobility Renewal</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="contact-form-input-container">
            <div className="input-container area">
              <label>Message:</label>
              <textarea
                className="input-field area"
                rows={5}
                cols={10}
                type="text"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <button className="contact-me-button">Contact Me</button>
        </form>
      </div>
    </div>
  );
}
