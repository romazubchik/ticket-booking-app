import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import styled from 'styled-components';

const CustomFormLabel = styled(FormLabel)`
  font-weight: bold;
  margin: 8px;
`;

const CustomFormControl = styled(FormControl)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 260px;
  background-color: #fff;
  padding: 16px;
`;

const Transfers = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    let newSelectedFilters;

    if (name === 'all') {
      newSelectedFilters = checked ? ['all', 'none', 'one', 'two', 'three'] : [];
    } else {
      newSelectedFilters = checked
        ? [...selectedFilters.filter(f => f !== 'all'), name]
        : selectedFilters.filter(filter => filter !== name);

      if (newSelectedFilters.length === 0 || newSelectedFilters.length === 4) {
        newSelectedFilters = ['all', 'none', 'one', 'two', 'three'];
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
