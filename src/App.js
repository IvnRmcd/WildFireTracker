import { useState, useEffect } from "react";
import Map from "./component/Map/Map";
import * as SVGLoaders from "svg-loaders-react";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await response.json();
      console.log(events);
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);
  return (
    <div>
      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <SVGLoaders.Bars stroke="#98ff98" fill="#98ff98" />
          <h1>Fetching Data</h1>
        </div>
      )}
    </div>
  );
}

export default App;
