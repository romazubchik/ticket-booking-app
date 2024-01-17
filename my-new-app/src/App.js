import "./App.css";
import Transfers from "./components/Transfers";
import FilterButtons from "./components/FilterButtons";
import FlightDetails from "./components/FlightCard";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f3f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center; 
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HorizontalContainer>
        <Transfers />
        <VerticalContainer>
          <FilterButtons />
          <FlightDetails />
        </VerticalContainer>
      </HorizontalContainer>
    </div>
  );
}

export default App;
