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
    fontWeight: 'bold',
  }
} as Record<string, React.CSSProperties>;

const options = [
  { value: '1', label: '' },
  { value: '2', label: '' },
  { value: '3', label: '' },
];

export default function Component() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string | null, option: { value: string; label: string }) => {
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
      <h3 style={styles.h3}>Project Leads</h3>
      <h4>Pete Pongpeauk</h4>
      <h4>Samnang Thorn</h4>
      <h4>Amatak Yvi</h4>
      <h3 style={styles.h3}>Contributors</h3>
      <h4>Natasha Takahashi</h4>
      <h4>Jonas Kazimli</h4>
      <h4>Dalbir Kang</h4>
      <h3 style={styles.h3}>Contact Information</h3>
      <h4>Email: samnangt@acm.org</h4>
      <h3 style={styles.h3}>Join our Discord</h3>
      <h4>Link: <a href="https://discord.gg/eqCHp5t2">https://discord.gg/eqCHp5t2</a></h4>
    </Flex>
  );
}
