import React from "react";

import Layout from "../../components/Layout/Layout";
import DashBoardTitle from "../../components/Header/DashboardTitle";
import DashboardInsight from "../../components/Header/DashboardInsight";
import SalesTurnOver from "../../components/SalesTurnOver/SalesTurnOver";
import AveragePurchaseValue from "../../components/AveragePurchase/AveragePurchaseValue";
import BestSelling from "../../components/BestSelling/BestSelling";
import TopCompetitor from "../../components/TopCompetitor/TopCompetitor";

import "./style.css";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="dashboard">
          <DashBoardTitle />
          <DashboardInsight />
          <SalesTurnOver />
          <div className="dashboard-content">
            <AveragePurchaseValue />
            <BestSelling />
            <TopCompetitor />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;