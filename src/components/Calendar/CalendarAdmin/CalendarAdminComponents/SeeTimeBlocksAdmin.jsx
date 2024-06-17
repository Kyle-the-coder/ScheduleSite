import "../CalendarAdminStyles/seetimeblockadmin.css";
import tbDelete from "../../../../assets/close.png";
import { useEffect, useState } from "react";
import { parse, format } from "date-fns";
import { AddTimeBlockDisplay } from "./AddTimeBlockAdmin";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

export function SeeTimeBlocksAdmin({ setUpdateTrigger, dateOfEvent }) {
  const [fullScheduleList, setFullScheduleList] = useState([]);
  const [dayScheduleList, setDayScheduleList] = useState([]);
  const [isSchedLoaded, setIsSchedLoaded] = useState(false);
  const [isAddScheduleModalActive, setIsAddScheduleModalActive] =
    useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeBlock, setTimeBlock] = useState(null);
  const parsedDate = parse(dateOfEvent, "MM/dd/yy", new Date());
  const formattedDate = format(parsedDate, "MMMM d, yyyy");

  function handleAddTimeBlockModal() {
    setIsAddScheduleModalActive(true);
  }

  useEffect(() => {
    const fetchFullScheduleList = async () => {
      try {
        const docRef = doc(db, "DataStorage", "appointmentInfo");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const scheduleList = Object.keys(data).map((key) =>
            format(parse(key, "yyyy-MM-dd", new Date()), "yyyy-MM-dd")
          );
          setFullScheduleList(scheduleList);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };
    fetchFullScheduleList();
  }, [setFullScheduleList]);

  function handleTimeBlockClick(sched) {
    setTimeBlock(sched);
  }

  // Inside the component function
  useEffect(() => {
    const updateDayScheduleList = async () => {
      if (dateOfEvent) {
        try {
          const docRef = doc(db, "DataStorage", "appointmentInfo");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            // Reformat dateOfEvent to "yyyy-MM-dd"
            const formattedDate = format(dateOfEvent, "yyyy-MM-dd");
            // Check if data has a property corresponding to the formatted dateOfEvent
            if (data.hasOwnProperty(formattedDate)) {
              // Get the schedule list corresponding to the formatted dateOfEvent
              const scheduleList = data[formattedDate];
              // Sort the schedule list by start time
              const sortedScheduleList = scheduleList.sort((a, b) => {
                const timeA = parse(a.startTime, "HH:mm", new Date());
                const timeB = parse(b.startTime, "HH:mm", new Date());
                return timeA - timeB;
              });
              // Update the state variables
              setDayScheduleList(sortedScheduleList);
              setIsSchedLoaded(true);
            } else {
              // If the dateOfEvent does not exist in the data, set dayScheduleList to an empty array
              setDayScheduleList([]);
              setIsSchedLoaded(true);
            }
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
        }
      }
    };

    updateDayScheduleList();
  }, [dateOfEvent, isAddScheduleModalActive]);

  async function deleteTb(sched) {
    try {
      const docRef = doc(db, "DataStorage", "appointmentInfo");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const formattedDate = format(dateOfEvent, "yyyy-MM-dd");
        if (data.hasOwnProperty(formattedDate)) {
          const scheduleList = data[formattedDate];
          // Filter out the specific time block based on the id
          const updatedScheduleList = scheduleList.filter(
            (item) => item.id !== sched.id
          );
          // Check if the updated schedule list is empty
          if (updatedScheduleList.length === 0) {
            // If the schedule list is empty, delete the key-value pair
            const newData = { ...data };
            delete newData[formattedDate];
            // Update Firestore document without the key-value pair
            await setDoc(docRef, newData);
          } else {
            // If the schedule list is not empty, update Firestore document with the updated schedule list
            await setDoc(docRef, {
              ...data,
              [formattedDate]: updatedScheduleList,
            });
          }
          // Update the state variables
          setDayScheduleList(updatedScheduleList);
          setUpdateTrigger((prev) => !prev);
        } else {
          console.log("No schedule found for the specified date.");
        }
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error deleting time block:", error);
    }
  }

  useEffect(() => {
    setTimeBlock("");
  }, [dateOfEvent]);

  return (
    <div className="see-timeblock-main-container">
      <div className="timeblock-display-container">
        <div className="tb-display-top">
          <p className="m0 f1-5">Schedule for:</p>
          <h1 className="m0">{formattedDate}</h1>
        </div>
        <div className="tb-sched-container">
          {dayScheduleList.length === 0 ? (
            <h3 style={{ margin: "0 auto", marginTop: "35%" }}>
              No Time Blocks on this Date
            </h3>
          ) : (
            isSchedLoaded &&
            dayScheduleList.map((sched, index) => {
              const endTimeParsed = parse(sched.endTime, "HH:mm", new Date());
              const endTime = format(endTimeParsed, "hh:mm a");
              const startTimeParsed = parse(
                sched.startTime,
                "HH:mm",
                new Date()
              );
              const startTime = format(startTimeParsed, "hh:mm a");

              const isSelected =
                timeBlock &&
                sched.startTime === timeBlock.startTime &&
                sched.endTime === timeBlock.endTime;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: isSelected
                      ? sched.isAvailableAppt
                        ? "darkGreen"
                        : "darkRed"
                      : hoveredIndex === index
                      ? sched.isAvailableAppt
                        ? "rgb(78, 203, 78)"
                        : "rgb(200, 62, 62)"
                      : sched.isAvailableAppt
                      ? "lightGreen"
                      : "lightCoral",
                  }}
                  className="tb-container"
                  onClick={() => handleTimeBlockClick(sched)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h4 className="tb">
                    {startTime} - {endTime}
                  </h4>
                  <div className="tb-delete-container">
                    {sched.isAvailableAppt ? (
                      <h4 className="tb-end">Available</h4>
                    ) : (
                      <h4 className="tb-end">Booked</h4>
                    )}
                    <img
                      src={tbDelete}
                      className="tb-delete"
                      onClick={() => deleteTb(sched)}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="add-schedule-button-container">
          <button
            className="tb-submit-button"
            onClick={() => handleAddTimeBlockModal()}
          >
            Add Time Block
          </button>
          {isAddScheduleModalActive && (
            <AddTimeBlockDisplay
              dateOfEvent={dateOfEvent}
              setIsAddScheduleModalActive={setIsAddScheduleModalActive}
              setUpdateTrigger={setUpdateTrigger}
              isAddScheduleModalActive={isAddScheduleModalActive}
              dayScheduleList={dayScheduleList}
            />
          )}
        </div>
      </div>
    </div>
  );
}
