import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div class="card">
      <div class="card-body weather-days">
        <div class="row row-cols-2">
          <div class="col-2">
            <h4 class="saturday" />
            SAT <br /> <br />
            &#9728;&#65039;
            <br /> <br />
            <p>35&#8451; 24&#8451;</p>
          </div>

          <div class="col-2">
            <h4 class="sunday" />
            SUN <br /> <br />
            &#9728;&#65039;
            <br /> <br />
            <p>34&#8451; 24&#8451;</p>{" "}
          </div>
          <br />
          <div class="col-2">
            <h4 class="monday" />
            MON <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>35&#8451; 24&#8451;</p>
          </div>
          <br />
          <div class="col-2">
            <h4 class="tuesday" />
            TUE <br /> <br />
            &#9728;&#65039;
            <br /> <br /> <p>34&#8451; 24&#8451;</p>{" "}
          </div>
          <br />
          <div class="col-2">
            <h4 class="wednesday" />
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
