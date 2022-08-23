import React from "react";

const Headers = (headerProps) => {
  return (
    <div className="http-wrapper">
      <h2 className="request-window-details">Headers</h2>
      <div className="headers-wrapper">
      {
        Object.keys(headerProps).map((headerName, index) => {

          return (
            <span key={`${headerName}-${index}`} className="request-header-full">
            <span className="request-header-name">
              {headerName}: 
            </span>
            <span className="request-header-value">
              {headerProps[headerName]}</span>
            </span>
          )
        })
      }
      </div>
  </div>
  )
}

export default Headers;