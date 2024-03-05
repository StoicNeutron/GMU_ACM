import { Box, Divider, Flex } from '@mantine/core';

const styles = {
  container: {
    outline: '2px solid black',
    padding: 16,
    borderRadius: 4,
  },
  divider: {
    border: '2px solid black',
  },
} as Record<string, React.CSSProperties>;

export default function Component() {
  return (
    <Flex flex={1} direction={'column'} style={styles.container}>
      {/* user input > algorithm and speed */}
      <Box id="user-input" flex={1}>
        <div className="flex gap-5">
          <button className="text-sm bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold px-10 py-1 rounded text-white ">
            Generate
          </button>
          <button className="text-sm bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold px-10 py-1 rounded text-white ">
            Run
          </button>
        </div>
        <div className="mt-3">
          <div className="flex gap-10 items-center">
            <label className="text-sm font-semibold w-[50px]">Algorithm:</label>
            <select className="origin-bottom px-3 text-sm rounded border border-gray-300 w-[250px] appearance-none text-center">
              <option>Select Algorithm</option>
              <option>Algo 1</option>
              <option>Algo 2</option>
            </select>
          </div>
          <div className="flex gap-10 items-center mt-5">
            <label className="text-sm font-semibold w-[50px]">Speed</label>
            <select className="origin-bottom px-3 text-sm rounded border border-gray-300 w-[250px] appearance-none text-center">
              <option>1x</option>
              <option>2x</option>
            </select>
          </div>
        </div>
      </Box>
      {/* divider */}
      <Divider style={styles.divider} />
      {/* analysis */}
      <Box id="analysis" flex={1} />
    </Flex>
  );
}
