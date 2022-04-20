import React from "react";
import OIWC from "../Images/Home.jpg";

export default function Home() {
  return (
    <div className="container">
      <div>
        <img src={OIWC} style={{ width: "80vw", height: "50vh", margin: '1em'}} />
      </div>

      <div>
        <h5>
          IWC is the International Women's Club at Omaha. This nonprofit
          organization is run by several volunteers who are more than 80 years
          old. It has been running for 30 years since 1992. They organize
          various activities about the culture of the United States and
          different countries every two weeks. Their purpose is to establish
          cross-cultural friendships; help immigrants and refugees assimilate;
          help with, and encourage, learning English; educate on health,
          climate, safety, education, and recreational issues; and have fun
          together.
        </h5>
      </div>
    </div>
  );
}
