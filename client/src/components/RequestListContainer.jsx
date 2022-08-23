import React from "react";

const RequestListContainer = ({children}) => {
  return (
    <div className="preview-bar">
      <h2 className="request-history-title">Request History</h2>
      {children}
    </div>
  )
}

export default RequestListContainer;