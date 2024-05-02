import React from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  data,
  strokeColor,
} from "recharts";
// import { data } from "../../../data/dummuData";

const ChartBox = ({ data }) => {
  return (
    <div className="flex w-full h-full ">
      <div className="w-1/2 h-full flex flex-col justify-between items-start">
        <div className="flex gap-2 items-center">
          <img src={data?.icon} alt={data?.icon}></img>
          <span>{data?.title}</span>
        </div>

        <h1 className="text-2xl font-bold">{data?.number}</h1>

        <Link to={""} style={{ color: data?.color }}>
          View all
        </Link>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-between ">
        <div className="w-full h-full">
          <ResponsiveContainer width="99%" height="99%">
            <LineChart data={data?.chartData}>
              <Tooltip
                labelStyle={{ display: "none" }}
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                position={{ x: 10, y: 55 }}
              ></Tooltip>
              <Line
                type="monotone"
                dataKey={data?.dataKey}
                stroke={data?.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col items-end">
          <span
            className={`font-bold text-[20px] ${
              data?.percentage > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {data?.percentage}%
          </span>
          <span>this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
