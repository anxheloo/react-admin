import React from "react";
import styles from "./home.module.css";
import TopBox from "../../components/Grid-Boxes/Top-Box/TopBox";
import ChartBox from "../../components/Grid-Boxes/Chart-box/ChartBox";

import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
  pieChartData,
} from "../../data/dummuData";
import BarChart from "../../components/Grid-Boxes/BarChartBox/BarCharts";
import PieChartBox from "../../components/Grid-Boxes/PieChartBox/PieChartBox";
import BigChartBox from "../../components/Grid-Boxes/BigChartBox/BigChartBox";

const Home = () => {
  return (
    <div id={styles.home} className="w-full h-full overflow-y-scroll">
      <div id={styles.box} className={`${styles.box1}`}>
        <TopBox></TopBox>
      </div>
      <div id={styles.box} className="box2">
        <ChartBox data={chartBoxUser}></ChartBox>
      </div>
      <div id={styles.box} className="box3">
        <ChartBox data={chartBoxProduct}></ChartBox>
      </div>
      <div id={styles.box} className={`${styles.box4}`}>
        <PieChartBox data={pieChartData}></PieChartBox>
      </div>
      <div id={styles.box} className="box5">
        <ChartBox data={chartBoxRevenue}></ChartBox>
      </div>
      <div id={styles.box} className="box6">
        <ChartBox data={chartBoxConversion}></ChartBox>
      </div>
      <div id={styles.box} className={`${styles.box7} hidden xl:flex`}>
        <BigChartBox></BigChartBox>
      </div>
      <div id={styles.box} className="box8">
        <BarChart data={barChartBoxVisit}></BarChart>
      </div>
      <div id={styles.box} className="box9">
        <BarChart data={barChartBoxRevenue}></BarChart>
      </div>
    </div>
  );
};

export default Home;
