import { useState } from "react";
import { format, parse } from "date-fns";
import "../CCPstyles/booknowformphone.css";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import emailjs from "emailjs-com";
import { useBookNowModal } from "../../../../context/BookNowModal";
import closeButton from "../../../../../assets/x-button.png";

export function BookNowFormPhone({
  dateOfEvent,
  setUpdateTrigger,
  timeBlock,
  setTimeBlock,
}) {
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const { isBnActive, setIsBnActive } = useBookNowModal();
  const parsedDate = parse(dateOfEvent, "MM/dd/yy", new Date());
  const formattedDate = format(parsedDate, "MMMM d, yyyy");
  const emailId = import.meta.env.VITE_EMAIL_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;
  const clientEmailTemplateId = import.meta.env.VITE_CLIENT_EMAIL_TEMPLATE_ID;

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
                firstName: firstName,
                lastName: lastName,
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
            from_first_name: firstName,
            from_last_name: lastName,
            from_email: email,
            from_description: description,
            from_date: reFormattedDate,
            from_time: formattedTime,
          };

          const clientTemplateParams = {
            from_first_name: firstName,
            from_last_name: lastName,
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
          emailjs
            .send(
              emailId,
              clientEmailTemplateId,
              clientTemplateParams,
              emailUserId
            )
            .then(
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

          setFirstName("");
          setLastName("");
          setEmail("");
          setDescription("");
          setTimeBlock("");
          alert("Your appointment was successfully booked!");
          closeModal();
        }
      }
    } catch (error) {
      console.error("Error updating schedule:", error);
      setError("Error updating schedule. Please try again.");
    }
  }

  const displayStartTime = timeBlock
    ? format(parse(timeBlock.startTime, "HH:mm", new Date()), "h:mm a")
    : "";
  const displayEndTime = timeBlock
    ? format(parse(timeBlock.endTime, "HH:mm", new Date()), "h:mm a")
    : "";

  return (
    <>
      {isBnActive && (
        <div
          className={`book-now-main-container-phone ${
            isBnActive ? "active" : ""
          }`}
        >
          <div className="book-now-container-phone">
            <form className="form-phone" onSubmit={addClientToTimeBlock}>
              <div className="book-now-close-container-phone">
                <img
                  src={closeButton}
                  width="30px"
                  style={{ cursor: "pointer" }}
                  onClick={() => closeModal()}
                />
              </div>
              <p className="title-phone">Book Appointment </p>
              <div className="book-now-form-input-container-phone">
                <h2 className="m0">
                  <span className="f-thin">Date:</span> {formattedDate}
                </h2>
                <h2 className="m0">
                  <span className="f-thin">Time:</span> {displayStartTime}-
                  {displayEndTime}
                </h2>
              </div>
              <p className="message-phone">Those marked with * are required </p>
              <div className="flex-phone">
                <label>
                  <input
                    className="input-phone"
                    type="text"
                    placeholder=""
                    required=""
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span>Firstname *</span>
                </label>

                <label>
                  <input
                    className="input-phone"
                    type="text"
                    placeholder=""
                    required=""
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <span>Lastname *</span>
                </label>
              </div>

              <label>
                <input
                  className="input-phone"
                  type="email"
                  placeholder=""
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email *</span>
              </label>

              <label>
                <textarea
                  className="input-phone"
                  type="text"
                  placeholder=""
                  required=""
                  rows="7"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <span>Description *</span>
              </label>

              <button className="submit-phone">Book Appointment</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
