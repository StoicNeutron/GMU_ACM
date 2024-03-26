import { Box, Button, Divider, Flex, Select } from '@mantine/core';
import React, { useState } from 'react';

const styles = {
  container: {
    outline: '2px solid black',
    padding: 16,
    borderRadius: 4,
  },
  divider: {
    border: '2px solid black',
  },
  h4: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '25px',
  },
  button: {
    position: 'relative',
    zIndex: 1, // Ensure button appears above other elements
  },
} as Record<string, React.CSSProperties>;

const algorithmsOptions = [
  { value: '1', label: 'DFS' },
  { value: '2', label: 'BFS' },
];

const speedOptions = [
  { value: '1', label: '1X' },
  { value: '2', label: '2X' },
];

export default function Component() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null
  );
  const [selectedSpeed, setSelectedSpeed] = useState<string | null>(null);

  const handleAlgorithmChange = (value: string | null) => {
    setSelectedAlgorithm(value);
  };

  const handleSpeedChange = (value: string | null) => {
    setSelectedSpeed(value);
  };
  return (
    <Flex flex={1} direction={'column'} style={styles.container}>
      <h4 style={styles.h4}>Controller</h4>

      <Select
        data={algorithmsOptions}
        value={selectedAlgorithm}
        onChange={handleAlgorithmChange}
        placeholder="Selected Algorithm"
        style={{ marginBottom: '20px' }}
      />

      <Select
        data={speedOptions}
        value={selectedSpeed}
        onChange={handleSpeedChange}
        placeholder="Selected Speed"
        style={{ marginBottom: '20px' }}
      />

      <Button
        variant="filled"
        color="green"
        size="md"
        radius="md"
        style={{ marginBottom: '20px' }}
      >
        RUN
      </Button>
      <Button
        variant="filled"
        color="green"
        size="md"
        radius="md"
        style={{ marginBottom: '20px' }}
      >
        RESET
      </Button>
      <Divider style={styles.divider} />

      <Box id="analysis" flex={1} />
    </Flex>
  );
}
