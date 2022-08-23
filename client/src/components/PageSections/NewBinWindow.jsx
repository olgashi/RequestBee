import React from "react";
import { useNavigate } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import BASE_URL from '../../const/base-url';

const NewBinWindow = () => {
  const navigate = useNavigate();
  const requestBin = async (event) => {
    event.preventDefault();
    const result = await fetch(BASE_URL, { method: 'POST', mode: 'cors'});
    const data = await result.json();
    const { binId } = data;
    navigate(`/bin/view/${binId}`);
  }

  return (
    <Card sx={{ minWidth: 200, marginTop: 5}}>
      <CardContent>
        <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
          A request bin to inspect HTTP or webhook requests
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          View and inspect HTTP and webhook requests in a straightforward way.
          This tool gives you the ability to see Method, Path, Headers, Body and Parameters for any request served to a custom endpoint.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={requestBin}> Create Public Bin</Button>
      </CardActions>
    </Card>
  )
}

export default NewBinWindow;