import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewLayout from "../ViewLayout";
import RequestListContainer from "../RequestListContainer";
import SingleRequestPreview from "../SingleRequestPreview";
import RequestWindow from "../PageSections/RequestWindow";
import FlexWrapper from "../Wrappers/FlexWrapper";
import EndpointBanner from "../PageSections/EndpointBanner";
import BASE_URL from '../../const/base-url';
// import { io } from "socket.io-client";

const BinView = () => {
  const { binId } = useParams();
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState({});

  useEffect(() => {
    (async () => await fetchRequests(binId))();
  }, []);

  const fetchRequests = async (binId) => {
    const result = await fetch(`${BASE_URL}view_bin/${binId}`, { method: 'GET', mode: 'cors' });
    const data = await result.json();
    setRequests(data);
  }

  const fetchRequest = async (event) => {
    event.preventDefault();
    const requestId = (event.currentTarget.id);
    const result = await fetch(`${BASE_URL}view_bin/${binId}/${requestId}`, { method: 'GET', mode: 'cors' });
    const data = await result.json();
    setRequest(data);
  }

// const socket = io("ws://localhost:3001");
//   socket.on("request received", args => {
//     console.log(args);
//     //update state
//   })

 
  return (
    <ViewLayout>
      <EndpointBanner binId={binId} />
      <FlexWrapper>
        <RequestListContainer>
          <ul className="request-history-list">
            {
              requests.map((req) => {
                return <SingleRequestPreview key={req.id}
                  request={req}
                  onClick={fetchRequest}>
                </SingleRequestPreview>
              })
            }
          </ul>
        </RequestListContainer>
        <RequestWindow request={request} binId={binId}></RequestWindow>
      </FlexWrapper>
    </ViewLayout>
  )
}

export default BinView;