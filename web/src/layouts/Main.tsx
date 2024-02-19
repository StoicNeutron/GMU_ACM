import Nav from "@/components/Nav";
import { Box } from "@mantine/core";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box h={"100vh"}>
      <Nav />
      {children}
    </Box>
  );
}
