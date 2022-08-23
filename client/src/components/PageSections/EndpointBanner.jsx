import React from "react";
import copyUrl from "../../utils/copyUrl";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Tooltip, Button } from '@mui/material';
import BASE_URL from '../../const/base-url';

const EndpointBanner = ({ binId }) => {
  return (
    <div className="endpoint-banner">
      <span className="endpoint-banner-text">
        Your endpoint is:
      </span>
      <span id="endpoint-url" className="endpoint-banner-url">{BASE_URL}endpoint/{binId}</span>
      <Button onClick={copyUrl}>
        <Tooltip title="Copy to clipboard">
          <AssignmentIcon sx={{ color: "white" }} />
        </Tooltip>
      </Button>
    </div>
  )
}

export default EndpointBanner;