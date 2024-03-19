import Node from './Node'

const styles = {
  container: {
    outline: "2px solid black",
    padding: 16,
    borderRadius: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
} as Record<string, React.CSSProperties>;

export default function Component() {
  return (
    <div style={styles.container}>
      <h4>Visualizer</h4>
      <Node />
    </div>
  );
}
