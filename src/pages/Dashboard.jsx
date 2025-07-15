import React from 'react';
import {Link, Outlet} from "react-router-dom";
import GridBoard from "../components/GridBoard.jsx";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="widgets/1">Widget 1</Link> |{' '}
        <Link to="widgets/2">Widget 2</Link>
      </nav>
      <section>
        <Outlet/>
        <GridBoard/>
      </section>
    </div>
  );
};

export default Dashboard;