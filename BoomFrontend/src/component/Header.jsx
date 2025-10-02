import React, { useState } from "react";

function Header() {
  const [message, setmessage] = useState("your calls were encrypted");
  const handeljoin = () => {
    setmessage("joining meet....");
  };
  const handelcreate = () => {
    setmessage("creating a meet....");
  };
  const [sidebaropen,setsidebaropen]=useState(true)
  let issidebaropen=true
  return (
    <div className="relative w-screen h-screen   ">

      {/* sidebar */}

      <div className=" absolute h-full w-[350px] bg-slate-400">
        <span className="flex flex-col gap-1 pl-5 text-black text-4xl">
        <ul>home</ul>
        <ul> service</ul>
        <ul>cart</ul>
        <ul>iojdi</ul>
        </span>
      </div>
        {/* button */}


      <button className="absolute flex flex-col h-[50px] w-[50px]   gap-1 pl-2.5 rounded-full justify-center left-100 top-4 ">
        <div className="bg-white h-[3.5px] w-[25px]"></div>
        <div className="bg-white h-[3.5px] w-[25px]"></div>
        <div className="bg-white h-[3.5px] w-[25px]"></div>
      </button>
      {/* main contet */}
      <div className=" h-full w-full flex justify-center flex-col items-center text-black  ">
        <h1>BOOM</h1>
        <p>{message}</p>

        <span>
          <button onClick={handeljoin}>JoinMeet</button>
          <button onClick={handelcreate}>CretaeMeet</button>
        </span>
      </div>
    </div>
  );
}

export default Header;
