import React, { useEffect, useState } from 'react';
import FlightDetails from './FlightCard.jsx';

const TicketList = ({ searchId, filter, transfersFilter }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      if (!searchId) {
        console.log('SearchId не визначено, запит на отримання квитків не може бути виконаний');
        return;
      }

      try {
        const response = await fetch(`http://localhost:3002/tickets?searchId=${searchId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.tickets) {
          setTickets(data.tickets);
        }
      } catch (error) {
        console.error('Помилка при отриманні квитків:', error);
      }
    };

    fetchTickets();
  }, [searchId]);

  const getFilteredTickets = () => {
    let filteredTickets = [...tickets];

    if (filter === 'cheapest') {
      filteredTickets.sort((a, b) => a.price - b.price);
    } else if (filter === 'fastest') {
      filteredTickets.sort((a, b) => {
        const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
        const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
        return durationA - durationB;
      });
    }

    if (transfersFilter.length > 0 && !transfersFilter.includes('all')) {
      filteredTickets = filteredTickets.filter(ticket => {
        return ticket.segments.some(segment => {
          const stopsCount = segment.stops.length;
          if (transfersFilter.includes('none') && stopsCount === 0) return true;
          if (transfersFilter.includes('one') && stopsCount === 1) return true;
          if (transfersFilter.includes('two') && stopsCount === 2) return true;
          if (transfersFilter.includes('three') && stopsCount === 3) return true;
          return false;
        });
      });
    }

    return filteredTickets;
  };

  const filteredTickets = getFilteredTickets();

  return (
    <div>
      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket, index) => (
          <FlightDetails key={index} flightData={ticket} />
        ))
      ) : (
        <p>К сожалению, таких билетов нет.</p>
      )}
    </div>
  );
};

export default TicketList;
