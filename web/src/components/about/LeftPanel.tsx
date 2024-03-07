import { Box, Divider, Flex, Title } from "@mantine/core";

const styles = {
  container: {
    padding: 20,
    //outline: '1px solid black',
  },
  h3: {
    fontWeight: 'bold', // Make <h3> tag bold
    marginBottom: 20, // Add a bottom gap of 20px
  },
  p: {
    marginBottom: 60,
  }
} as Record<string, React.CSSProperties>;

export default function Component() {
  return (
    <Flex flex={3} direction={"column"} style={styles.container}>
      <h3 style={styles.h3}>ABOUT GMU ACM CLUB</h3>
      <p style={styles.p}>ACM Club at George Mason University. GMU ACM serves as a hub for students passionate about algorithms, offering a supportive environment where members can deepen their understanding of algorithmic principles, problem-solving techniques, and computational thinking. Through a variety of engaging activities such as leetcodes, and projects. GMU ACM fosters a collaborative and intellectually stimulating atmosphere where members can enhance their skills and explore the intricacies of algorithms together.</p>
      <h3 style={styles.h3}>ABOUT THIS PROJECT</h3>
      <p>The Algorithm Visualizer project aims to provide a dynamic and interactive platform for exploring and understanding various algorithms through visualization. Algorithms are fundamental to computer science and play a crucial role in solving complex problems efficiently. However, comprehending the inner workings of algorithms can often be challenging, especially for beginners. This project seeks to bridge that gap by offering an intuitive and visually appealing tool that allows users to observe algorithms in action.</p>
    </Flex>
  );
}