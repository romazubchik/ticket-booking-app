import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'; // Замінено import
import styled from 'styled-components';
import { theme } from '../styles/theme.js';

const CustomFormLabel = styled(FormLabel)`
  font-weight: bold;
  margin: ${theme.sizes.medium};
`;

const CustomFormControl = styled(FormControl)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.sizes.customFormControlWidth};
  height: ${theme.sizes.customFormControlHeight};
  background-color: ${theme.colors.formControlBackground};
  padding: ${theme.sizes.medium};
  box-shadow: ${theme.colors.formControlBoxShadow};
  border: ${theme.colors.formControlBorder};
  border-radius: ${theme.sizes.customFormControlBorderRadius};

  @media ${theme.mediaQueries.mobile} {
    width: ${theme.sizes.customFormControlMobileWidth};
  }
`;

const Transfers = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    let newSelectedFilters;

    if (name === 'all') {
      newSelectedFilters = checked ? ['all', 'none', 'one', 'two', 'three'] : [];
    } else {
      if (checked) {
        newSelectedFilters = [...selectedFilters.filter(f => f !== 'all'), name];
      } else {
        newSelectedFilters = selectedFilters.filter(filter => filter !== name);
      }

      if (newSelectedFilters.length === 0 || newSelectedFilters.length === 4) {
        newSelectedFilters = ['all', 'none', 'one', 'two', 'three'];
      }

      if (newSelectedFilters.includes('all') && !checked) {
        newSelectedFilters = newSelectedFilters.filter(f => f !== 'all');
      }
    }

    setSelectedFilters(newSelectedFilters);
    onFilterChange(newSelectedFilters);
  };

  return (
    <CustomFormControl component="fieldset">
      <FormGroup>
        <CustomFormLabel component="legend">Кількість пересадок</CustomFormLabel>
        <FormControlLabel
          control={
            <Checkbox 
              checked={selectedFilters.includes('all')} 
              onChange={handleChange} 
              name="all" 
            />
          }
          label="Всі"
        />
        {['none', 'one', 'two', 'three'].map(item => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox 
                checked={selectedFilters.includes(item)} 
                onChange={handleChange} 
                name={item} 
              />
            }
            label={
              item === 'none'
                ? 'Без пересадок'
                : item === 'one'
                ? '1 пересадка'
                : item === 'two'
                ? '2 пересадки'
                : '3 пересадки'
            }
          />
        ))}
      </FormGroup>
    </CustomFormControl>
  );
};

export default Transfers;
