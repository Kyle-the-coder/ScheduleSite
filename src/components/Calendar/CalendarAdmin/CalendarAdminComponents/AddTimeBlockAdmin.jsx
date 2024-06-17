import { useContext, useEffect, useState } from "react";
import close from "../../../../assets/x-button.png";
import "../CalendarAdminStyles/addtimeblockadmin.css";
import gsap from "gsap";
import {
  ExtendDateContext,
  useExtendDate,
} from "../../calendarContext/ExtendDateContext";
import { format } from "date-fns";
import { db } from "../../../../firebase"; // Adjust the import path as necessary
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

export function AddTimeBlockDisplay({
  dateOfEvent,
  setIsAddScheduleModalActive,
  setUpdateTrigger,
  isAddScheduleModalActive,
  dayScheduleList,
}) {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isAvailableAppt, setIsAvailableAppt] = useState(true);
  const [error, setError] = useState(false);
  const [splitIntoHourBlocks, setSplitIntoHourBlocks] = useState(false);
  const { setExtendDate } = useExtendDate();
  const extendDate = useContext(ExtendDateContext);

  function closeModal() {
    const modal = document.querySelector(".modal-container");
    if (modal) {
      gsap.fromTo(
        modal,
        { x: "0%", duration: 1.2, ease: "power4.inOut" },
        {
          x: "100%",
          visibility: "visible",
          boxShadow: "none",
          onComplete: () => setIsAddScheduleModalActive(false),
        }
      );
    }
  }

  async function addDatesToStorage(e) {
    e.preventDefault();
    setError("");

    if (!startTime && !endTime) {
      setError("Start time and End Time are empty.");
      return;
    } else if (!startTime) {
      setError("Start Time is empty");
      return;
    } else if (!endTime) {
      setError("End time is empty.");
      return;
    }

    if (startTime >= endTime) {
      setError("Start time must be before end time.");
      return;
    }

    const timeConflict = dayScheduleList.some((sched) => {
      return (
        (startTime >= sched.startTime && startTime < sched.endTime) ||
        (endTime > sched.startTime && endTime <= sched.endTime) ||
        (startTime <= sched.startTime && endTime >= sched.endTime)
      );
    });

    if (timeConflict) {
      setError("This time block conflicts with an existing one.");
      return;
    }

    const createEventBlock = (start, end, date) => ({
      endTime: end,
      startTime: start,
      id: crypto.randomUUID(),
      dateOfEvent: date,
      isAvailableAppt: isAvailableAppt,
      isConfirmed: false,
    });

    let eventBlocks = [];
    if (splitIntoHourBlocks) {
      let currentStartTime = new Date(`1970-01-01T${startTime}:00`);
      let currentEndTime = new Date(
        currentStartTime.getTime() + 60 * 60 * 1000
      );

      while (currentEndTime <= new Date(`1970-01-01T${endTime}:00`)) {
        eventBlocks.push(
          createEventBlock(
            currentStartTime.toTimeString().slice(0, 5),
            currentEndTime.toTimeString().slice(0, 5),
            dateOfEvent
          )
        );
        currentStartTime = new Date(
          currentStartTime.getTime() + 60 * 60 * 1000
        );
        currentEndTime = new Date(currentEndTime.getTime() + 60 * 60 * 1000);
      }
    } else {
      eventBlocks.push(createEventBlock(startTime, endTime, dateOfEvent));
    }

    try {
      if (extendDate.extendDate) {
        let currentDate = new Date(dateOfEvent);
        const endDate = new Date(extendDate.extendDate);
        endDate.setDate(endDate.getDate() + 1);

        while (currentDate <= endDate) {
          const date = format(currentDate, "yyyy-MM-dd");
          const docRef = doc(db, "DataStorage", "appointmentInfo");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            await updateDoc(docRef, {
              [date]: arrayUnion(
                ...eventBlocks.map((block) => ({ ...block, dateOfEvent: date }))
              ),
            });
          } else {
            await setDoc(docRef, {
              [date]: eventBlocks.map((block) => ({
                ...block,
                dateOfEvent: date,
              })),
            });
          }

          currentDate.setDate(currentDate.getDate() + 1);
        }
      } else {
        const date = format(new Date(dateOfEvent), "yyyy-MM-dd");
        const docRef = doc(db, "DataStorage", "appointmentInfo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          await updateDoc(docRef, {
            [date]: arrayUnion(...eventBlocks),
          });
        } else {
          await setDoc(docRef, {
            [date]: eventBlocks,
          });
        }
      }

      setStartTime(null);
      setEndTime(null);
      setIsAvailableAppt(true);
      setSplitIntoHourBlocks(false);
      setExtendDate(null);
      setUpdateTrigger((prev) => !prev);
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("Failed to save schedule. Please try again.");
    }
  }

  useEffect(() => {
    if (isAddScheduleModalActive) {
      const modal = document.querySelector(".modal-container");
      gsap.fromTo(
        modal,
        { x: "100%", visibility: "visible", boxShadow: "none" },
        { x: "0%", duration: 1.2, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <div className="modal-container">
      <div className="modal-form-container">
        <form className="form-client" onSubmit={addDatesToStorage}>
          {" "}
          <div className="modal-top">
            <h1>Enter A Time Block</h1>
            <img
              src={close}
              onClick={() => closeModal()}
              className="modal-close-button"
            />
          </div>
          <div className="modal-form-input-container">
            <label className="text-label">Start Time:</label>
            <input
              type="time"
              className="text-input"
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="modal-form-input-container">
            <label className="text-label">End Time:</label>
            <input
              type="time"
              className="text-input"
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <div className="modal-form-input-container">
            <label className="text-label">Availability:</label>
            <select
              className="text-input"
              onChange={(e) => setIsAvailableAppt(e.target.value === "true")}
            >
              <option value={true}>Open</option>
              <option value={false}>Closed</option>
            </select>
          </div>
          <div className="modal-form-input-container">
            <label className="text-label">Split into 1-hour blocks:</label>
            <input
              type="checkbox"
              onChange={(e) => setSplitIntoHourBlocks(e.target.checked)}
            />
          </div>
          <div className="modal-form-input-container">
            <label className="text-label">Extend Date:</label>
            <input
              type="date"
              className="text-input"
              value={format(dateOfEvent, "yyyy-MM-dd")}
              onChange={(e) => setExtendDate(e.target.value)}
            />
          </div>
          <div className="error-message">{error && error}</div>
          <button type="submit" className="submit-button">
            Save Schedule
          </button>
        </form>
      </div>
    </div>
  );
}
