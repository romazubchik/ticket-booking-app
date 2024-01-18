const express = require('express');
const mockTickets = require('./mockTickets.cjs');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.get('/search', (req, res) => {
  res.json({ searchId: mockTickets.searchId });
});

app.get('/tickets', (req, res) => {
  const { searchId } = req.query;

  if (!searchId) {
    res.status(400).json({ error: 'SearchId is required' });
    return;
  }

  if (searchId === mockTickets.searchId) {
    res.json(mockTickets);
  } else {
    res.status(404).json({ error: 'SearchId not found' });
  }
});

app.get('/filtered-tickets', (req, res) => {
  const { searchId, filter } = req.query;

  if (!searchId || filter === undefined) {
    res.status(400).json({ error: 'SearchId and filter are required' });
    return;
  }

  if (searchId === mockTickets.searchId) {
    const stopsCountFilter = parseInt(filter, 10);
    const filteredTickets = mockTickets.tickets.filter(ticket => {
      const totalStops = ticket.segments.reduce((total, segment) => total + segment.stops.length, 0);
      return totalStops === stopsCountFilter || (stopsCountFilter === 0 && totalStops === 0);
    });

    res.json({ searchId, tickets: filteredTickets, stop: mockTickets.stop });
  } else {
    res.status(404).json({ error: 'SearchId not found' });
  }
});

app.get('/', (req, res) => {
  res.send('Mock server is running');
});

app.get('/simulate-error', (req, res) => {
  res.status(500).send('An error has occurred');
});

app.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});
