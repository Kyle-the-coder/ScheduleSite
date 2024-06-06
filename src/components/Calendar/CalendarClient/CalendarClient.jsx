import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  startOfWeek,
  addDays,
  subDays,
  getDaysInMonth,
  isSameMonth,
  isToday,
} from "date-fns";
import "./CalendarClientStyles/calendarclient.css";
import { SeeTimeBlocksClient } from "./CalendarClientComponents/SeeTimeBlockClient";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const CalendarClient = () => {
  const [fullScheduleList, setFullScheduleList] = useState([]);

  //STATES FOR MODALS
  const [isModalActive, setIsModalActive] = useState(false);
  const [isAddScheduleModalActive, setIsAddScheduleModalActive] =
    useState(false);
  const [dateOfEvent, setDateOfEvent] = useState(
    format(new Date(), "MM/dd/yy")
  );
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const startDateOfMonth = startOfMonth(currentMonth);
  const startDateOfWeek = startOfWeek(startDateOfMonth);
  const daysInMonth = getDaysInMonth(currentMonth);
  const allDaysInGrid = [];
  let currentDay = startDateOfWeek;
  while (allDaysInGrid.length < 35) {
    allDaysInGrid.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }
  const goToPreviousMonth = () => {
    setCurrentMonth(subDays(startDateOfMonth, 1));
  };
  const goToNextMonth = () => {
    setCurrentMonth(addDays(startDateOfMonth, 32));
  };
  const handleSeeSchedClick = (date) => {
    const formattedDate = format(date, "MM/dd/yy");
    setDateOfEvent(formattedDate);
    setIsModalActive(true);
    setUpdateTrigger(!updateTrigger);
  };

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      const docRef = doc(db, "DataStorage", "appointmentInfo");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const scheduleList = Object.keys(data);
        setFullScheduleList(scheduleList);
      } else {
        console.log("Document does not exist!");
      }
    };

    fetchDataFromFirestore();
  }, [updateTrigger, isAddScheduleModalActive, isModalActive]);

  console.log(fullScheduleList);
  return (
    <div className="calendar-client-main-container">
      <div className="calendar-client">
        <div className="calendar-client-header">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <h2>{format(startDateOfMonth, "MMMM yyyy")}</h2>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
        <div className="calendar-client-grid">
          {allDaysInGrid.map((day, index) => {
            const formattedDate = format(day, "MM/dd/yy");
            const hasEvent =
              fullScheduleList &&
              fullScheduleList.some((schedule) => {
                const formattedDate = format(day, "yyyy-MM-dd");
                return schedule === formattedDate;
              });
            const isSelectedDate = formattedDate === dateOfEvent;

            return (
              <div
                key={index}
                className={`calendar-client-day ${
                  !isSameMonth(day, startDateOfMonth) && "cc-other-month"
                }  ${!hasEvent && "cc-no-event"} ${
                  isSelectedDate ? "cc-selected-date" : ""
                }`}
                onClick={() => handleSeeSchedClick(day)}
              >
                <div className={`calendar-client-day-num `}>
                  <p
                    className={`calendar-client-num ${
                      isToday(day) ? "cc-current-day" : ""
                    }`}
                  >
                    {format(day, "d")}
                  </p>
                </div>
                {hasEvent && <div className="cc-full-schedule-circle"></div>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="see-tbc-main-container">
        <SeeTimeBlocksClient
          dateOfEvent={dateOfEvent}
          setIsModalActive={setIsModalActive}
          updateTrigger={updateTrigger}
          setUpdateTrigger={setUpdateTrigger}
        />
      </div>
    </div>
  );
};

export default CalendarClient;
