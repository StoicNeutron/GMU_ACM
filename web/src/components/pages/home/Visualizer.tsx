import { Flex, Title } from "@mantine/core";

const styles = {
  container: {
    outline: "4px solid black",
    padding: 16,
    borderRadius: 2,
  },
} as Record<string, React.CSSProperties>;

export default function Component() {
  return (
    <Flex flex={1} style={styles.container}>
      <Title order={2}>Visualizer</Title>
    </Flex>
  );
}
