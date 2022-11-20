import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="card">
      <div className="card-body weather-days">
        <div className="row row-cols-2">
          <div className="col-2">
            <h4 className="saturday" />
            SAT <br /> <br />
            &#9728;&#65039;
            <br /> <br />
            <p>35&#8451; 24&#8451;</p>
          </div>

          <div className="col-2">
            <h4 className="sunday" />
            SUN <br /> <br />
            &#9728;&#65039;
            <br /> <br />
            <p>34&#8451; 24&#8451;</p>{" "}
          </div>
          <br />
          <div className="col-2">
            <h4 className="monday" />
            MON <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>35&#8451; 24&#8451;</p>
          </div>
          <br />
          <div className="col-2">
            <h4 className="tuesday" />
            TUE <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>34&#8451; 24&#8451;</p>{" "}
          </div>
          <br />
          <div className="col-2">
            <h4 className="wednesday" />
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
