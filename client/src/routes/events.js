import * as React from "react";
import ErrorComponent from "../Components/ErrorComponent";
import DateTimePicker from 'react-datetime-picker'
import Event from "../Components/Event";
import { EventsURL } from "../Constants/AppLinks";

function Events() {
  const [events, setEvents] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [date, setDate] = React.useState(() => new Date());

  const fetchPageData = (filters) => {
    fetch(`${EventsURL}`)
      .then((res) => res.json())
      .then((res) => {
        setEvents(res.events);
      })
      .catch((err) => {
        setError("failed to fetch data!");
      });
  };

  React.useEffect(() => {
    fetchPageData(date);
  }, [date]);

  if (error) return <ErrorComponent error={error} />;

  if (!events || !events.length)
    return <ErrorComponent error={"No events found!"} />;

  return (
    <div className="container h-100">
      <div className="m-3">
       <button className="m-2 p-1 rounded today-btn" >Today</button>
        <DateTimePicker onChange={setDate} value={date} disableClock={true} />
      </div>
      {events.map((event) => (
        <Event event={event} />
      ))}
    </div>
  );
}

export default React.memo(Events);
