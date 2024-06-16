import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import close from "../../../../assets/close.png";
import gsap from "gsap";
import "../CalendarClientStyles/booknowform.css";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import emailjs from "emailjs-com";
import { FormButton } from "../../../FormButton/FormButton";
import { useBookNowModal } from "../../../context/BookNowModal";

export function BookNowForm({
  dateOfEvent,
  setUpdateTrigger,
  timeBlock,
  setTimeBlock,
}) {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const { isBnActive, setIsBnActive } = useBookNowModal();
  const emailId = import.meta.env.VITE_EMAIL_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;

  function closeModal() {
    setIsBnActive(false);
  }

  async function addClientToTimeBlock(e) {
    e.preventDefault();
    try {
      const docRef = doc(db, "DataStorage", "appointmentInfo");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const formattedDate = format(dateOfEvent, "yyyy-MM-dd");
        if (data.hasOwnProperty(formattedDate)) {
          const scheduleList = data[formattedDate];
          const updatedScheduleList = scheduleList.map((block) => {
            if (block.id === timeBlock.id) {
              return {
                ...block,
                name: name,
                email: email,
                description: description,
                isAvailableAppt: false,
              };
            }
            return block;
          });
          await setDoc(docRef, {
            ...data,
            [formattedDate]: updatedScheduleList,
          });
          setUpdateTrigger((prev) => !prev);

          const reFormattedDate = format(dateOfEvent, "MMMM d, yyyy");

          // Format time as "1:00pm"
          const startTimeParsed = parse(
            timeBlock.startTime,
            "HH:mm",
            new Date()
          );
          const endTimeParsed = parse(timeBlock.endTime, "HH:mm", new Date());
          const formattedStartTime = format(startTimeParsed, "h:mma");
          const formattedEndTime = format(endTimeParsed, "h:mma");
          const formattedTime = `${formattedStartTime}-${formattedEndTime}`;

          // Send email using EmailJS
          const templateParams = {
            from_name: name,
            from_email: email,
            from_description: description,
            from_date: reFormattedDate,
            from_time: formattedTime,
          };

          emailjs.send(emailId, templateId, templateParams, emailUserId).then(
            (response) => {
              console.log(
                "Email sent successfully!",
                response.status,
                response.text
              );
            },
            (error) => {
              console.error("Failed to send email.", error);
            }
          );

          setName("");
          setEmail("");
          setDescription("");
          setTimeBlock("");
          closeModal();
        }
      }
    } catch (error) {
      console.error("Error updating schedule:", error);
      setError("Error updating schedule. Please try again.");
    }
  }

  const displayStartTime = timeBlock
    ? format(parse(timeBlock.startTime, "HH:mm", new Date()), "hh:mm a")
    : "";
  const displayEndTime = timeBlock
    ? format(parse(timeBlock.endTime, "HH:mm", new Date()), "hh:mm a")
    : "";

  return (
    <>
      {isBnActive && (
        <div
          className={`book-now-main-container ${isBnActive ? "active" : ""}`}
        >
          <div className="book-now-blur-background"></div>

          <div className="book-now-container">
            <div className="book-now-top-container">
              <h1>Enter Appt. Info</h1>
              <img
                src={close}
                onClick={() => closeModal()}
                className="book-now-close-button"
              />
            </div>
            <div className="book-now-form-container">
              <form className="book-now-form" onSubmit={addClientToTimeBlock}>
                <div className="book-now-form-input-container">
                  <h2>
                    Time: {displayStartTime}-{displayEndTime}
                  </h2>
                </div>
                <div className="book-now-form-input-container">
                  <label className="book-now-text-label">Name:</label>
                  <input
                    type="text"
                    className="book-now-text-input"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="book-now-form-input-container">
                  <label className="book-now-text-label">Email:</label>
                  <input
                    type="text"
                    className="book-now-text-input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="book-now-form-area-container">
                  <label className="book-now-area-label">Description:</label>
                  <textarea
                    type="text"
                    rows="7"
                    className="book-now-area-input"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="error-message">{error && error}</div>
                <FormButton buttonName="Book Appointment" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
