import React from "react";
import { useState } from "react";
import axios  from "./../../node_modules/axios/dist/esm/axios";

function ScheduleMeet() {
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const [Meet, setMeet] = useState("");

  function createmeet() {
    const payload = {
      name: Meet,
      date: Date,
      time: Time,
    };
    axios
      .post("", payload)
      .then((response) => {
        console.log("Meet Scheduled", response.data);
        alert("meet scheduled successfully");
      })
      .catch((error) => {
        console.log("meet not scheduled", error);
        alert("meet not scheduled");
      });
    // alert("meet schedulde");
  }
  return (
    <div>
      <div className="flex gap-1">
        <h2 className="text-3xl text-black">Name Of Meet</h2>
        <input
          type="text"
          placeholder="Enter Meet Name"
          value={Meet}
          onChange={(e) => setMeet(e.target.value)}
          className="border-2 border-black text-black"
        />
      </div>

      <div className="flex gap-10">
        <input
          type="Time"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
          className="text-black text-3xl "
        />
        <input
          type="date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          className="text-black"
        />
      </div>
      <button onClick={createmeet}>Create</button>
    </div>
  );
}

export default ScheduleMeet;
