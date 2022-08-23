import React from "react";
import TopPageHeader from "./TopPageHeader";

const ViewLayout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <TopPageHeader></TopPageHeader>
      <main>
        {children}
      </main>

    </div>
  )
}

export default ViewLayout;