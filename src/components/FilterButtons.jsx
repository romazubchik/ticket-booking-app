import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { theme } from '../styles/theme.js';

const FilterButton = styled(Button)`
  background-color: ${(props) => (props.selected ? theme.colors.primary : theme.colors.background)};
  color: ${(props) => (props.selected ? theme.colors.background : theme.colors.primary)};
  padding: ${theme.sizes.buttonPaddingY} ${theme.sizes.buttonPaddingX};
  margin: 0 5px;
  &:hover {
    background-color: ${(props) => (props.selected ? theme.colors.primary : theme.colors.background)};
  }
  &.Mui-disabled {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.background};
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
