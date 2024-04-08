import React, { useState } from 'react';
import Node from './Node';

const styles = {
  container: {
    outline: "2px solid black",
    padding: 16,
    borderRadius: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
} as Record<string, React.CSSProperties>;

interface ComponentProps {
  signal: boolean; // Define the signal prop
}

const Component: React.FC<ComponentProps> = ({ signal }) => {
  return (
    <div style={styles.container}>
      <h4>Visualizer</h4>
      <Node startAnimation={signal} />
    </div>
  );
}

export default Component;