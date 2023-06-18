import Queue from "./basic.mjs";

function CreateGraph(nodes) {
    let adjList = [];
    for (let i = 0; i < nodes + 1; i++) {
        adjList.push([]);
    }

    // node 1 connected with 2 & 3
    adjList[1].push(2)
    adjList[1].push(3)

    // node 2 connected with 1 & 4
    adjList[2].push(1);
    adjList[2].push(4);

    // node 3 connected with 1 & 4
    adjList[3].push(1);
    adjList[3].push(4);

    // node 4 connected with 2 & 3
    adjList[4].push(2);
    adjList[4].push(3);

    return adjList;
}

let nodes = 4;
let adjList = CreateGraph(nodes);
// console.log(adjList);


// Breath First Search
function BFS(adjList, nodes) { 
    // 1. adjList
    // 2. Queue
    // 3. Visited Array
    let queue = new Queue();
    let visitedArray = new Array(nodes + 1);

    for (let idx = 1; idx < nodes + 1; idx++) { 
        if (visitedArray[idx] !== 1) { 
            BFSFn(adjList, visitedArray, queue, nodes,idx);
        }

    }   
}

function BFSFn(adjList, visitedArray, queue, nodes, node) { 
    // mark as visited
    visitedArray[node] = 1;
    queue.push(node);


    while (!queue.isEmpty()) { 
        let currNode = queue.pop();
        console.log(currNode);

        for (let el of adjList[currNode]) {
            if (visitedArray[el] !== 1) { 
                // if not visited , so push into queue & mark as visited.
                queue.push(el);
                visitedArray[el] = 1
            }
        }
    }
}

// BFS(adjList, 4);



// Number of islands

let grid = [
    ["0","0","1","0","0"],
    ["1","1","0","0","0"],
    ["1","0","0","0","0"],
    ["0","0","0","0","0"]
]
  
function NumberOfIslands(grid) { 

    let numRows = grid.length;
    let numCols = grid[0].length;
    let NumIslands = 0;
    // create visited matrix
    let visited_matrix = [];
    for (let i = 0; i < numRows; i++) { 
        visited_matrix.push([]);
        for (let j = 0; j < numCols; j++) { 
            visited_matrix[i].push(0);
        }
    }

    for (let row = 0; row < numRows; row++) { 
        for (let col = 0; col < numCols; col++) { 
            if (visited_matrix[row][col] !== 1 && grid[row][col] === "1") { 
                NumIslands++;
                Funct(row,col,visited_matrix,grid);
            }
        }
    }

    console.log(NumIslands);
}


function Funct(row, col, visited_matrix, grid) { 
    let queue = new Queue();
    queue.push([row, col]);
    visited_matrix[row][col] = 1;

    let n = visited_matrix.length;
    let m = visited_matrix[0].length;

    while (!queue.isEmpty()) { 
        let [r, c] = queue.pop();

        // check for neighbors
        for (let deltaRow = -1; deltaRow <= 1; deltaRow++) { 
            for (let deltaCol = -1; deltaCol <= 1; deltaCol++) { 
                let nrow = r + deltaRow;
                let ncol = c + deltaCol;
                // it shold be neighbors & should not visted & should be land only
                if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && visited_matrix[nrow][ncol] !== 1 && grid[row][col] === "1") {
                    queue.push([nrow, ncol]);
                    visited_matrix[nrow][ncol] = 1;
                }
            }
        }
    }
} 



NumberOfIslands(grid);




