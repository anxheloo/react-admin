import React from "react";
import {
  Bar,
  ResponsiveContainer,
  BarChart,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
// import { data } from "../../../data/dummuData";

const BarCharts = ({ data }) => {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <h1 className=" font-bold mb-2">{data?.title}</h1>

      <div className="w-full h-full ">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={data?.chartData}>
            <Tooltip
              labelStyle={{ display: "none" }}
              contentStyle={{
                backgroundColor: "#2a3447",
                borderRadius: "5px",
                border: "1px solid white",
              }}
              cursor={{ fill: "none" }}
            ></Tooltip>
            <Bar dataKey={data?.dataKey} fill={data?.color} />
            <XAxis dataKey={"name"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
