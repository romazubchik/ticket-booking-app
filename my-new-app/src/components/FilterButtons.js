import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const FilterButton = styled(Button)`
  background-color: #2196f3;
  color: white;
  &:hover {
    background-color: #1976d2;
  }
  &.Mui-disabled {
    color: white;
    background-color: #bbdefb;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 8px 0;
`;

const FilterButtons = ({ selectedFilter, onSelectFilter }) => {
  return (
    <ButtonGroup>
      <FilterButton
        variant="contained"
        disabled={selectedFilter === 'cheapest'}
        onClick={() => onSelectFilter('cheapest')}
      >
        Самый дешевый
      </FilterButton>
      <FilterButton
        variant="contained"
        disabled={selectedFilter === 'fastest'}
        onClick={() => onSelectFilter('fastest')}
      >
        Самый быстрый
      </FilterButton>
    </ButtonGroup>
  );
};

export default FilterButtons;
