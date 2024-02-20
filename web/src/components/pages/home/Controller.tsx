import { Box, Divider, Flex, Title } from "@mantine/core";

const styles = {
  container: {
    outline: "4px solid black",
    padding: 16,
    borderRadius: 2,
  },
  divider: {
    border: "2px solid black",
  },
} as Record<string, React.CSSProperties>;

export default function Component() {
  return (
    <Flex flex={1} direction={"column"} style={styles.container}>
      {/* user input */}
      <Box id="user-input" flex={1} />
      {/* divider */}
      <Divider style={styles.divider} />
      {/* analysis */}
      <Box id="analysis" flex={1} />
    </Flex>
  );
}
