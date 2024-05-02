import React from "react";
import { ResponsiveContainer, Cell, Pie, PieChart, Tooltip } from "recharts";

const PieChartBox = ({ data }) => {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <h1 className="text-[25px] font-bold mb-2">{data?.title}</h1>

      <div className="w-full h-full flex justify-center items-center">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            ></Tooltip>

            <Pie
              data={data?.chartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
            >
              {data?.chartData.map((item, index) => (
                <Cell key={item?.name} fill={item?.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className=" flex gap-3 justify-between">
        {data?.chartData.map((item) => (
          <div className="  flex flex-col">
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full bg-red-600"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
            </div>

            <span className=" mx-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
