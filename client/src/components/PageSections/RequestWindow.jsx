import React from "react";
import Details from "../HTTPRequestFields/Details";
import Headers from "../HTTPRequestFields/Headers";
import QueryParams from "../HTTPRequestFields/QueryParams";
import Body from "../HTTPRequestFields/Body";

const RequestWindow = ({request, binId}) => {
  if(!request.path) {
    return (
      <div className="request-window">
      </div>
    )
  } else {
    const { method, path, data } = request;
    const { headers, body, query_params } = data;
  return (
    <div className="request-window">
      <Details method={method} path={path} binId={binId} queryParams={JSON.stringify(query_params)}/>
      <Headers {...headers}/>
      <QueryParams {...query_params} />
      <Body body={body}/>
    </div>
  )
  }
}

export default RequestWindow;