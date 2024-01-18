import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { theme } from '../styles/theme.js';

const logoUrlAir = process.env.PUBLIC_URL + "/logo.png";

const PriceTag = styled(Typography)`
  color: ${theme.colors.success};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: ${theme.sizes.medium};
`;

const FlightCard = styled(Card)`
  width: ${theme.sizes.flightCardWidth};
  margin: ${theme.sizes.medium};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FlightInfo = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 1rem;
    margin-bottom: ${theme.sizes.small};
  }

  &.MuiTypography-body2 {
    font-size: 0.875rem;
    color: ${theme.colors.mutedText};
    margin-bottom: ${theme.sizes.small};
  }
`;

const FlightSegment = styled.div`
  margin-bottom: ${theme.sizes.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

const AirlineLogo = styled.img`
  height: ${theme.sizes.logoHeight};
  float: right;
`;

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}ч ${mins}м`;
};

const formatDate = (dateString) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString('ru-RU', options);
};

const FlightDetails = ({ flightData }) => {
  const renderSegment = (segment, index) => (
    <FlightSegment key={index}>
      <FlightInfo variant="body1">
        {segment.origin} - {segment.destination}
      </FlightInfo>
      <FlightInfo variant="body1">
        {formatDate(segment.date)} - {formatDuration(segment.duration)}
      </FlightInfo>
      <FlightInfo variant="body2">
        {segment.stops.length > 0 ? `${segment.stops.length} пересадк${segment.stops.length === 1 ? 'a' : 'и'}: ${segment.stops.join(', ')}` : 'Без пересадок'}
      </FlightInfo>
    </FlightSegment>
  );

  return (
    <FlightCard>
      <CardContent>
        <PriceTag>{flightData.price} ₽</PriceTag>
        <AirlineLogo src={logoUrlAir} alt={`${flightData.carrier} Logo`} />
        {flightData.segments.map(renderSegment)}
      </CardContent>
    </FlightCard>
  );
};

export default FlightDetails;
