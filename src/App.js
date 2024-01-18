import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FilterButtons, TicketList, Transfers } from './components/index.js';
import { theme } from './styles/theme.js';
import { getSearchId } from './api.js';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.pageBackground};
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
  margin: ${theme.sizes.medium};
`;

const SortFilterMessage = styled.p`
  font-size: ${theme.sizes.sortFilterMessageFontSize};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.sortFilterMessageText};
  background-color: ${theme.colors.sortFilterMessageBackground};
  padding: ${theme.sizes.sortFilterMessagePadding};
  border-radius: ${theme.sizes.sortFilterMessageBorderRadius};
`;

function App() {
  const [searchId, setSearchId] = useState(null);
  const [filter, setFilter] = useState('cheapest');
  const [transfersFilter, setTransfersFilter] = useState([]);
  const [sortedOrFiltered, setSortedOrFiltered] = useState(false);

  useEffect(() => {
    const fetchSearchIdData = async () => {
      try {
        const searchId = await getSearchId();
        setSearchId(searchId);
      } catch (error) {
        console.error('Помилка при отриманні searchId:', error);
      }
    };

    fetchSearchIdData();
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setSortedOrFiltered(true);
    setTimeout(() => {
      setSortedOrFiltered(false);
    }, 2000);
  };

  const handleTransfersFilterChange = (selectedTransfers) => {
    setTransfersFilter(selectedTransfers);
    setSortedOrFiltered(true);
    setTimeout(() => {
      setSortedOrFiltered(false);
    }, 1000);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HorizontalContainer>
          <Transfers onFilterChange={handleTransfersFilterChange} />
          <VerticalContainer>
            <FilterButtons selectedFilter={filter} onSelectFilter={handleFilterChange} />
            {sortedOrFiltered && <SortFilterMessage>Отфильтровано</SortFilterMessage>}
            {searchId ? (
              <TicketList searchId={searchId} filter={filter} transfersFilter={transfersFilter} />
            ) : (
              <p>Завантаження...</p>
            )}
          </VerticalContainer>
        </HorizontalContainer>
      </AppContainer>
    </>
  );
}

export default App;