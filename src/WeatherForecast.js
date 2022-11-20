import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="card">
      <div className="card-body weather-days">
        <div className="row row-cols-2">
          <div className="col-2">
            SAT <br /> <br />
            &#9728;&#65039;
            <br /> <br />
            <p>35&#8451; 24&#8451;</p>
          </div>

          <div className="col-2">
            SUN <br /> <br />
            &#9728;&#65039;
            <br /> <br />
            <p>34&#8451; 24&#8451;</p>{" "}
          </div>
          <br />
          <div className="col-2">
            MON <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>35&#8451; 24&#8451;</p>
          </div>
          <br />
          <div className="col-2">
            TUE <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>34&#8451; 24&#8451;</p>{" "}
          </div>
          <br />
          <div className="col-2">
            WED <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>32&#8451; 25&#8451;</p>{" "}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
