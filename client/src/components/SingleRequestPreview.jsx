import React from "react";
import moment from 'moment';

const SingleRequestPreview = ({request, onClick}) => {
  const { bin_id, request_id, method, request_path, date_received } = request;
  const methodClass = ["POST", "PUT", "GET", "DELETE"].includes(method) ? `method-${method.toLowerCase()}` : 'method-other';
  let path = request_path.slice(bin_id.length + 1); // need to slice off binId, because it is currently included in the path but it is not a part of the path 
  // TODO: we are not using path because the data that is stored in pg does not contain path data we need 
  // (it has binId bc it is interpreted as path by express but in our case we need path that is added ny the user + any query parameters)
  const dateReceived = moment(date_received, "YYYY-MM-DDTHH:mm:ss.SSSSZ", true).local();
  return (
    <li key={`${bin_id}-${request_id}`} id={request_id} className="single-request-preview" onClick={onClick}>
      <span className="request-history-time">{dateReceived.format("ddd, MMMM Do YYYY, h:mm a")}</span>
      <span className={`request-history-method ${methodClass}`}> {method.toUpperCase()} </span>
    </li>
  )
}

export default SingleRequestPreview;