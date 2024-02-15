import {
  Button,
  Flex,
  Space,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavigationLink {
  label: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  {
    label: "HOME",
    href: "/home",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
];

export default function Nav() {
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const links = navigationLinks.map((link) => {
    if (router.pathname === link.href) return;
    return (
      <Button
        component={NextLink}
        href={link.href}
        key={link.label}
        variant="subtle"
        color="white"
      >
        {link.label}
      </Button>
    );
  });
  return (
    <Flex
      component="nav"
      direction="row"
      align="center"
      justify="flex-start"
      w={"100vw"}
      h={64}
      p={16}
      style={{
        backgroundColor:
          colorScheme === "dark"
            ? "var(--mantine-color-default-hover)"
            : "#006633",
        borderBottom: `2px solid ${
          colorScheme === "dark"
            ? "var(--mantine-color-default-border)"
            : "#003300"
        }`,
      }}
    >
      <Text
        size={isMobile ? "md" : "lg"}
        fw={"bold"}
        style={{ color: "white" }}
      >
        GMU_ACM_Algorithms_Visualizer
      </Text>
      <Space />
      <Flex align="center" justify="flex-end" ml={"auto"}>
        {links}
      </Flex>
    </Flex>
  );
}
