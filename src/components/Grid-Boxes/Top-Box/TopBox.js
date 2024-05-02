import React from "react";
import { topDealUsers } from "../../../data/dummuData";

const TopBox = () => {
  return (
    <div className=" flex flex-col gap-3 h-full justify-between ">
      <h1 className=" text-2xl font-bold mb-[20px]">Top Deals</h1>

      <ul className="flex flex-1 flex-col gap-5 ">
        {topDealUsers.map((item) => (
          <li key={item.id} className="flex gap-3 justify-between items-center">
            <img
              src={item.img}
              alt={item.img}
              className="w-9 h-9 object-cover rounded-full"
            ></img>
            <div className="flex flex-1 flex-col text-sm">
              <span className="text-[14px] font-bold">{item.username}</span>
              <span className="text-[12px]">{item.email}</span>
            </div>
            <span>${item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBox;
