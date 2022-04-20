import * as React from "react";
import ErrorComponent from "../Components/ErrorComponent";

import Event from "../Components/Event";
import Pagination from "../Components/Pagination";
import { EventsURL } from "../Constants/AppLinks";

function Events() {
  const [events, setEvents] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fetchPageData = (pageNumber) => {
    fetch(`${EventsURL}/?page=${pageNumber}`)
      .then((res) => res.json())
      .then((res) => {
        setEvents(res.events);
      })
      .catch((err) => {
        setError("failed to fetch data!");
      });
  };

  if(error) return <ErrorComponent error={error} />

  return (
    <div>
      <Event />
      <Pagination fetchPageData={fetchPageData} />
    </div>
  );
}

export default React.memo(Events);
