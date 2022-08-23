import React from "react";

const QueryParams = (queryParamProps) => {
  return (
    <div className="http-wrapper">
      <h2 className="request-window-details">Query Params</h2>
      <div className="query-params-wrapper">
      {
        Object.keys(queryParamProps).map((queryParamName, index) => {
          return (
            <span key={`${queryParamName}-${index}`} className="query-param-full">
            <span className="query-param-name">
              {queryParamName}
            </span>
            <span className="query-param-value">
              {queryParamProps[queryParamName]}</span>
            </span>
          )
        })
      }
      </div>
    </div>
  )
}

export default QueryParams;