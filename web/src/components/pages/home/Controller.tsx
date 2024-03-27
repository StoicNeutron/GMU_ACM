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
    zIndex: 1,
  },
} as Record<string, React.CSSProperties>;

const algorithmsOptions = [
  { value: '1', label: 'DFS', fullName: 'Depth First Search', des: 'Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It prioritizes depth, commonly used for pathfinding and cycle detection.' },
  { value: '2', label: 'BFS', fullName: 'Breadth First Search', des: 'Breadth-First Search (BFS) is a graph traversal algorithm that explores neighboring nodes before moving deeper. It uses a queue to ensure nodes are visited in the order they were discovered. BFS is efficient for finding the shortest path in unweighted graphs and exploring tree structures.' },
];

const speedOptions = [
  { value: '1', label: '1X' },
  { value: '2', label: '2X' },
];

export default function Component() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null
  );
  const [selectedAlgorithmName, setSelectedAlgorithmName] = useState<string | null>(
    null
  );
  const [selectedAlgorithmDes, setSelectedAlgorithmDes] = useState<string | null>(
    null
  );
  const [selectedSpeed, setSelectedSpeed] = useState<string | null>(null);

  const handleAlgorithmChange = (value: string | null) => {
    setSelectedAlgorithm(value);
    if (value !== null) {
      const selectedAlgorithmObject = algorithmsOptions.find(option => option.value === value);
      if (selectedAlgorithmObject) {
        setSelectedAlgorithmName(selectedAlgorithmObject.fullName);
        setSelectedAlgorithmDes(selectedAlgorithmObject.des);
      }
    } else {
      setSelectedAlgorithmName(null);
    }
  };

  const handleSpeedChange = (value: string | null) => {
    setSelectedSpeed(value);
  };

  const isButtonsDisabled = selectedAlgorithm === null || selectedSpeed === null;

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
        disabled={isButtonsDisabled}
      >
        RUN
      </Button>
      <Button
        variant="filled"
        color="green"
        size="md"
        radius="md"
        style={{ marginBottom: '20px' }}
        disabled={isButtonsDisabled}
      >
        RESET
      </Button>
      <Divider style={styles.divider} />

      <h3>Algorithm: {selectedAlgorithmName}</h3>
      <p>{selectedAlgorithmDes}</p>

      <Box id="analysis" flex={1} />
    </Flex>
  );
}
