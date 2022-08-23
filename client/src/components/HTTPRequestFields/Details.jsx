import React from "react";
import HTTPFieldWrapper from "../Wrappers/HTTPFieldWrapper";

const Details = ({ method, path, binId, queryParams }) => {
  const methodClass = ["POST", "PUT", "GET", "DELETE"].includes(method) ? `method-${method}` : 'method-other';
  const requestPath = path.slice(binId.length + 1);

  let fullRequestPath = requestPath;
  const qParams = JSON.parse(queryParams);
  if (requestPath.length === 0) {
    const url = Object.keys(qParams).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(qParams[k])
  }).join('&');
    fullRequestPath = '/'+ url;
  } 

  return (
    <HTTPFieldWrapper>
      <h2 className="request-window-details">Details</h2>
      <span className={`request-window-method ${methodClass.toLowerCase()}`}>{method.toUpperCase()}</span>
      <span className="request-window-path">{fullRequestPath}</span>
    </HTTPFieldWrapper>
  )
}

export default Details;