import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const PriceTag = styled(Typography)`
  color: #4caf50;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const FlightCard = styled(Card)`
  max-width: 345px;
  margin: 16px;
`;

const FlightInfo = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 1rem;
  }

  &.MuiTypography-body2 {
    font-size: 0.875rem;
    color: #757575;
  }
`;

const FlightDetails = ({ flightData }) => {
  return (
    <FlightCard>
      <CardContent>
        <PriceTag>111{/* {flightData.price} */} ₽</PriceTag>
        <FlightInfo variant="body1">
          {/* flightData.departure */} - {/* flightData.arrival */}
        </FlightInfo>
        <FlightInfo variant="body1">
          В пути {/* flightData.duration */}
        </FlightInfo>
        <FlightInfo variant="body2">
         {/*  {flightData.stops} {flightData.stops === 1 ? 'пересадка' : 'пересадки'} {flightData.stopLocations?.join(', ')} */}
        </FlightInfo>
      </CardContent>
    </FlightCard>
  );
};

export default FlightDetails;

/*
const flightDataExample = {
  price:'13 400',
departure: 'MOW',
arrival: 'HKT',
duration: '21ч 15м',
stops: 2,
stopLocations: ['HKG', 'JNB'],
};

<FlightDetails flightData={flightDataExample} />
*/
