import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Transfers from './components/Transfers.jsx';
import FilterButtons from './components/FilterButtons.jsx';
import TicketList from './components/TicketList.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f3f7fa;
    font-family: Arial, sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 50px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
function App() {
  const [searchId, setSearchId] = useState(null);
  const [filter, setFilter] = useState('cheapest');
  const [transfersFilter, setTransfersFilter] = useState([]);

  useEffect(() => {
    const fetchSearchId = async () => {
      try {
        const response = await fetch('http://localhost:3002/search');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSearchId(data.searchId);
      } catch (error) {
        console.error('Помилка при отриманні searchId:', error);
      }
    };

    fetchSearchId();
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleTransfersFilterChange = (selectedTransfers) => {
    setTransfersFilter(selectedTransfers);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HorizontalContainer>
          <Transfers onFilterChange={handleTransfersFilterChange} />
          <VerticalContainer>
            <FilterButtons selectedFilter={filter} onSelectFilter={handleFilterChange} />
            {searchId ? <TicketList searchId={searchId} filter={filter} transfersFilter={transfersFilter} /> : <p>Завантаження...</p>}
          </VerticalContainer>
        </HorizontalContainer>
      </AppContainer>
    </>
  );
}

export default App;