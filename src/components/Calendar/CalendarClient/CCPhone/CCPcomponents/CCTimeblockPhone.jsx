import { useEffect, useState } from "react";
import { parse, format } from "date-fns";
import { BookNowFormPhone } from "./BookNowFormPhone";
import "../CCPstyles/cctimeblockphone.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { FormButton } from "../../../../FormButton/FormButton";
import { useBookNowModal } from "../../../../context/BookNowModal";

export function CCTimeblockPhone({ setUpdateTrigger, dateOfEvent }) {
  const [fullScheduleList, setFullScheduleList] = useState([]);
  const [dayScheduleList, setDayScheduleList] = useState([]);
  const [isSchedLoaded, setIsSchedLoaded] = useState(false);
  const [isAddScheduleModalActive, setIsAddScheduleModalActive] =
    useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeBlock, setTimeBlock] = useState(null);
  const { isBnActive, setIsBnActive } = useBookNowModal();
  const [isTbSelected, setIsTbSelected] = useState(false);
  const parsedDate = parse(dateOfEvent, "MM/dd/yy", new Date());
  const formattedDate = format(parsedDate, "MMMM d, yyyy");
  function handleAddTimeBlockModal() {
    setIsBnActive(true);
  }

  function handleTimeBlockClick(sched) {
    setTimeBlock(sched);
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
  }, []);

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
  }, [dateOfEvent, isBnActive]);

  useEffect(() => {
    setTimeBlock("");
  }, [dateOfEvent]);

  useEffect(() => {
    const selected = timeBlock ? timeBlock.isAvailableAppt : false;
    setIsTbSelected(selected);
  }, [timeBlock]);

  return (
    <div className="see-timeblock-client-main-container-phone">
      <div className="timeblock-client-display-container-phone">
        <div className="tbc-display-top-phone">
          <h1 className="font2 m0">{formattedDate}</h1>
          <p className="m0 f1-2">please click on available time below</p>
        </div>
        <div className="tbc-sched-container-phone">
          {dayScheduleList.length === 0 ? (
            <h3 style={{ margin: "0 auto", marginTop: "35%" }}>
              No Appointments on this Date
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
                  className={`tbc-container-phone ${
                    isSelected ? "selected-tbc-phone" : ""
                  }`}
                  onClick={() => handleTimeBlockClick(sched)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h4 className="tbc-phone">
                    {startTime} - {endTime}
                  </h4>
                  {sched.isAvailableAppt ? (
                    <h4 className="tbc-end-phone">Available</h4>
                  ) : (
                    <h4 className="tbc-end-phone">Booked</h4>
                  )}
                </div>
              );
            })
          )}
        </div>
        <div className="book-now-button-container-phone">
          <FormButton
            buttonName="Book Now"
            buttonFunction={handleAddTimeBlockModal}
            disabledButton={
              !timeBlock ||
              !timeBlock.isAvailableAppt ||
              isAddScheduleModalActive
            }
          />
        </div>
      </div>
      {isBnActive && (
        <BookNowFormPhone
          dateOfEvent={dateOfEvent}
          setIsAddScheduleModalActive={setIsAddScheduleModalActive}
          setUpdateTrigger={setUpdateTrigger}
          isAddScheduleModalActive={isAddScheduleModalActive}
          dayScheduleList={dayScheduleList}
          timeBlock={timeBlock}
          setTimeBlock={setTimeBlock}
        />
      )}
    </div>
  );
}
