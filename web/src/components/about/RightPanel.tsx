import React, { useState } from 'react';
import { Flex, Select } from '@mantine/core';

const styles = {
  container: {
    padding: 20,
    //outline: '1px solid black',
  },
  h3: {
    marginBottom: 20,
    marginTop: 20,
  }

} as Record<string, React.CSSProperties>;

const options = [
  { value: '1', label: '2024 Spring' },
  { value: '2', label: '2024 Fall' },
  { value: '3', label: '2025 Spring' },
];

export default function Component() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Flex flex={1} direction="column" style={styles.container}>
      <Select
        data={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Selected Term"
      />
      <h3 style={styles.h3}>Current Offices</h3>
      <h4>Dum Dum</h4>
      <h4>Dum Dum</h4>
      <h4>Dum Dum</h4>
      <h4>Dum Dum</h4>
      <h3 style={styles.h3}>Core Members</h3>
      <h4>Natasha Takahashi</h4>
      <h4>Dum Dum</h4>
      <h4>Dum Dum</h4>
      <h4>Dum Dum</h4>
    </Flex>
  );
}