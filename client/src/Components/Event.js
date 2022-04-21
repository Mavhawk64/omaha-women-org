import React from "react";
import { formatAMPM, getDay, getDayName } from "../utils/DateHelpers";
import "../Styles/events.css";
 
export default function Event({ event }) {
  if (!event) return null;

  const startDay = getDayName(event.Event_Start);
  const startDate = getDay(event.Event_Start);
  const endDay = getDayName(event.Event_END);
  const endDate = getDay(event.Event_END);

  return (
    <div style={{display: "flex", margin: "10px"}}>
      <div className="event-card">
        <div>{startDay}</div>
        <div>
          <h3>{startDate}</h3>
        </div>
      </div>
      <div className="event-card">
        <div>
          {`${startDay} ${startDate} ${formatAMPM(
            event.Event_Start
          )} - ${endDay} ${endDate} ${formatAMPM(event.Event_END)}`}
        </div>
        <div>
          <h4>{event.Event_Title}</h4>
        </div>
        <div>{event.Event_Location}</div>
        <div>{event.Event_Description}</div>
        <div>
          <a>RSVP now</a>
        </div>
      </div>
      <div className="event-card">
        <div classname="card">
          <img src="https://picsum.photos/180" />
        </div>
      </div>
    </div>
  );
}
