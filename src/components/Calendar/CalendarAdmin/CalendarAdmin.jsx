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
  isWithinInterval,
  parse,
  endOfMonth,
} from "date-fns";
import "./CalendarAdminStyles/calendaradmin.css";
import { SeeTimeBlocksAdmin } from "./CalendarAdminComponents/SeeTimeBlocksAdmin";
import { useExtendDate } from "../context/ExtendDateContext";
import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";

const CalendarAdmin = () => {
  const [fullScheduleList, setFullScheduleList] = useState([]);
  const { extendDate, setExtendDate } = useExtendDate();

  const [dateOfEvent, setDateOfEvent] = useState(
    format(new Date(), "MM/dd/yy")
  );
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const startDateOfMonth = startOfMonth(currentMonth);
  const endDateOfMonth = endOfMonth(currentMonth);
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
    setCurrentMonth(addDays(endDateOfMonth, 1));
  };

  const handleSeeSchedClick = (date) => {
    const formattedDate = format(date, "MM/dd/yy");
    setDateOfEvent(formattedDate);
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
  }, [updateTrigger]);

  return (
    <div className="calendar-main-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <h2>{format(startDateOfMonth, "MMMM yyyy")}</h2>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
        <div className="calendar-grid">
          {allDaysInGrid.map((day, index) => {
            const formattedDate = format(day, "MM/dd/yy");
            const hasEvent =
              fullScheduleList &&
              fullScheduleList.some((schedule) => {
                const formattedDate = format(day, "yyyy-MM-dd");
                return schedule === formattedDate;
              });
            const isHighlighted = extendDate
              ? isWithinInterval(day, {
                  start: parse(dateOfEvent, "MM/dd/yy", new Date()),
                  end: parse(extendDate, "yyyy-MM-dd", new Date()),
                })
              : false;

            const isSelectedDate = formattedDate === dateOfEvent;
            return (
              <div
                key={index}
                className={`calendar-day ${
                  !isSameMonth(day, currentMonth) ? "other-month" : ""
                } ${isHighlighted ? "highlighted" : ""} ${
                  isSelectedDate ? "cc-selected-date" : ""
                }`}
                onClick={() => handleSeeSchedClick(day)}
              >
                <div className={`calendar-day-num `}>
                  <p
                    className={`calendar-num ${
                      isToday(day) ? "current-day" : ""
                    }`}
                  >
                    {format(day, "d")}
                  </p>
                </div>
                {hasEvent && <div className="full-schedule-circle"></div>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="see-sched-main-container">
        <SeeTimeBlocksAdmin
          dateOfEvent={dateOfEvent}
          updateTrigger={updateTrigger}
          setUpdateTrigger={setUpdateTrigger}
        />
      </div>
    </div>
  );
};

export default CalendarAdmin;
