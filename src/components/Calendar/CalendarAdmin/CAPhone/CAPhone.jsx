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
import { useExtendDate } from "../../calendarContext/ExtendDateContext";
import { db } from "../../../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { CAPSeeTimeBlock } from "./CAPcomponents/CAPSeeTimeBlock";
import "./CAPstyles/caphone.css";

const CAPhone = () => {
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
    <div className="calendar-main-container-phone">
      <div className="calendar-phone">
        <div className="calendar-header-phone">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <h2>{format(startDateOfMonth, "MMMM yyyy")}</h2>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
        <div className="calendar-grid-phone">
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
                className={`calendar-day-phone ${
                  !isSameMonth(day, currentMonth) ? "other-month-phone" : ""
                } ${isHighlighted ? "highlighted-phone" : ""} ${
                  isSelectedDate ? "cc-selected-date-phone" : ""
                }`}
                onClick={() => handleSeeSchedClick(day)}
              >
                <div className={`calendar-day-num-phone `}>
                  <p
                    className={`calendar-num-phone ${
                      isToday(day) ? "current-day-phone" : ""
                    }`}
                  >
                    {format(day, "d")}
                  </p>
                </div>
                {hasEvent && <div className="full-schedule-circle-phone"></div>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="see-sched-main-container-phone">
        <CAPSeeTimeBlock
          dateOfEvent={dateOfEvent}
          updateTrigger={updateTrigger}
          setUpdateTrigger={setUpdateTrigger}
        />
      </div>
    </div>
  );
};

export default CAPhone;
