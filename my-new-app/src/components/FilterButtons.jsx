import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const FilterButton = styled(Button)`
  background-color: ${(props) => (props.selected ? '#1976d2' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#1976d2')};
  padding: 6px 20px;
  margin: 0 5px;
  &:hover {
    background-color: ${(props) => (props.selected ? '#1976d2' : '#e3e3e3')};
  }
  &.Mui-disabled {
    color: #bbdefb;
    background-color: white;
  }
  font-weight: bold;
  text-transform: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const FilterButtons = ({ selectedFilter, onSelectFilter }) => {
  return (
    <ButtonGroup>
      <FilterButton
        variant="contained"
        selected={selectedFilter === 'cheapest'}
        onClick={() => onSelectFilter('cheapest')}
      >
        Самый дешевый
      </FilterButton>
      <FilterButton
        variant="contained"
        selected={selectedFilter === 'fastest'}
        onClick={() => onSelectFilter('fastest')}
      >
        Самый быстрый
      </FilterButton>
    </ButtonGroup>
  );
};

export default FilterButtons;
