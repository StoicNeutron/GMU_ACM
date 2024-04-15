import React, { useEffect, useState } from 'react';

interface ButtonStyle {
    backgroundColor: string;
    border: string;
    borderTop: string;
    borderBottom: string;
    borderRight: string;
    borderLeft: string;
    width: string;
    height: string;
}

interface NodeProps {
    startAnimation: boolean;
}

const initialNodesArray: JSX.Element[][] = Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => <button key={Math.random()}></button>));

const Node: React.FC<NodeProps> = ({ startAnimation }) => {
    const [nodesArray, setNodesArray] = useState(initialNodesArray);
    const [visitedCells, setVisitedCells] = useState<{ row: number; col: number }[]>([]);

    // Function to implement Depth-First Search (DFS) to carve paths in the maze
    async function DFS(row: number, col: number, visited: boolean[][]) {
        // Mark the current cell as visited
        visited[row][col] = true;
        setVisitedCells([...visitedCells, { row, col }]);

        // Define the possible directions to move (up, down, left, right)
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        // Shuffle the directions randomly
        directions.sort(() => Math.random() - 0.5);

        // Iterate through the shuffled directions with a delay
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            // Check if the neighboring cell is within bounds and not visited
            if (newRow >= 0 && newRow < nodesArray.length && newCol >= 0 && newCol < nodesArray[0].length && !visited[newRow][newCol]) {
                // Delay to show animation
                await new Promise(resolve => setTimeout(resolve, 10)); // Adjust the delay as needed

                // Recursively call DFS for the neighboring cell
                await DFS(newRow, newCol, visited);
            }
        }
    }

    // useEffect hook to perform DFS when component mounts or when startAnimation changes
    useEffect(() => {
        if (startAnimation) {
            // Initialize visited array to keep track of visited cells
            const visited: boolean[][] = Array.from({ length: nodesArray.length }, () => Array.from({ length: nodesArray[0].length }, () => false));

            // Call DFS with initial coordinates to start carving paths
            DFS(0, 0, visited);

            // set signal back to false
            startAnimation = false;
        }
    }, [startAnimation]);

    // Render the generated maze
    return (
        <div>
            {nodesArray.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, colIndex) => {
                        const isVisited = visitedCells.some(cell => cell.row === rowIndex && cell.col === colIndex);
                        const cellStyle: ButtonStyle = {
                            backgroundColor: isVisited ? 'green' : 'white',
                            border: '1px solid black',
                            borderTop: '',
                            borderBottom: '',
                            borderRight: '',
                            borderLeft: '',
                            width: '40px',
                            height: '40px'
                        };
    
                        // Check if the cell above is visited, if yes remove top border
                        if (rowIndex > 0 && visitedCells.length > 0 && visitedCells[visitedCells.length - 1].row === rowIndex - 1 && visitedCells[visitedCells.length - 1].col === colIndex) {
                            cellStyle.borderTop = 'none';
                        }
                        // Check if the cell below is visited, if yes remove bottom border
                        else if (rowIndex < nodesArray.length - 1 && visitedCells.length > 0 && visitedCells[visitedCells.length - 1].row === rowIndex + 1 && visitedCells[visitedCells.length - 1].col === colIndex) {
                            cellStyle.borderBottom = 'none';
                        }
                        // Check if the cell to the left is visited, if yes remove left border
                        else if (colIndex > 0 && visitedCells.length > 0 && visitedCells[visitedCells.length - 1].row === rowIndex && visitedCells[visitedCells.length - 1].col === colIndex - 1) {
                            cellStyle.borderLeft = 'none';
                        }
                        // Check if the cell to the right is visited, if yes remove right border
                        else if (colIndex < nodesArray[rowIndex].length - 1 && visitedCells.length > 0 && visitedCells[visitedCells.length - 1].row === rowIndex && visitedCells[visitedCells.length - 1].col === colIndex + 1) {
                            cellStyle.borderRight = 'none';
                        }
    
                        return <React.Fragment key={colIndex}><button style={cellStyle}></button></React.Fragment>;
                    })}
                </div>
            ))}
        </div>
    );
}

export default Node;