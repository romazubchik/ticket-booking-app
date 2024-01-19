import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  FilterButtons,
  TicketList,
  Transfers,
  CommentsForm,
} from "./components/index.js";
import { theme } from "./styles/theme.js";
import { getSearchId } from "./api.js";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const LeaveReviewButton = styled(Button)`
  && {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    padding: ${theme.sizes.buttonPaddingY} ${theme.sizes.buttonPaddingX};
    margin: 15px;

    &:hover {
      background-color: ${theme.colors.primary};
    }

    &.Mui-disabled {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.background};
    }

    font-weight: bold;
    text-transform: none;
  }
`;

function App() {
  const [searchId, setSearchId] = useState(null);
  const [filter, setFilter] = useState("cheapest");
  const [transfersFilter, setTransfersFilter] = useState([]);
  const [sortedOrFiltered, setSortedOrFiltered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchSearchIdData = async () => {
      try {
        const searchId = await getSearchId();
        setSearchId(searchId);
      } catch (error) {
        console.error("Помилка при отриманні searchId:", error);
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

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <HorizontalContainer>
            <Transfers onFilterChange={handleTransfersFilterChange} />
            <VerticalContainer>
              <FilterButtons
                selectedFilter={filter}
                onSelectFilter={handleFilterChange}
              />
              {sortedOrFiltered && (
                <SortFilterMessage>Отфільтровано</SortFilterMessage>
              )}
              {searchId ? (
                <TicketList
                  searchId={searchId}
                  filter={filter}
                  transfersFilter={transfersFilter}
                />
              ) : (
                <p>Завантаження...</p>
              )}
            </VerticalContainer>
          </HorizontalContainer>
          <Link to="/popup/comments">
            <LeaveReviewButton onClick={handleOpenPopup}>
              Залишити свій відгук
            </LeaveReviewButton>
          </Link>
          <Routes>
            <Route path="/popup" element={<PopupOverlay className={isPopupOpen ? 'open' : 'closed'} />} />
            <Route
              path="/popup/comments"
              element={
                <CommentsForm
                  onAddComment={(comment) => console.log(comment)}
                  onClosePopup={handleClosePopup}
                />
              }
            />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
