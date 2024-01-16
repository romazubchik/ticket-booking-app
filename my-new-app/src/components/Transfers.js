import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import styled from 'styled-components';

const CustomFormLabel = styled(FormLabel)`
  font-weight: bold;
`;

const CustomFormControl = styled(FormControl)`
  margin: 16px;
  width: 230px;
  height: 250px;
`;

const Transfers = () => {
  const [state, setState] = React.useState({
    all: false,
    none: false,
    one: false,
    two: false,
    three: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'all') {
      const newState = {
        all: checked,
        none: checked,
        one: checked,
        two: checked,
        three: checked,
      };
      setState(newState);
    } else {
      const newState = { ...state, [name]: checked };

      // Check if all the individual checkboxes are selected
      const allSelected = ['none', 'one', 'two', 'three'].every(item => newState[item]);
      newState.all = allSelected; // Update the state of 'all' based on other checkboxes

      setState(newState);
    }
  };

  return (
    <CustomFormControl component="fieldset">
      <CustomFormLabel component="legend">Количество пересадок</CustomFormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.all}
              onChange={handleChange}
              name="all"
            />
          }
          label="Все"
        />
        {['none', 'one', 'two', 'three'].map((item, index) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                checked={state[item]}
                onChange={handleChange}
                name={item}
              />
            }
            label={
              item === 'none' 
              ? 'Без пересадок' 
              : index === 1 
              ? `${index} пересадка` 
              : `${index} пересадк${index === 0 ? '' : 'и'}`
            }
          />
        ))}
      </FormGroup>
    </CustomFormControl>
  );
}

export default Transfers;
