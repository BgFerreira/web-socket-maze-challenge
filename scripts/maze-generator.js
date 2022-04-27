// Programming with classes
// How store possible types of tiles

export class MazeGenerator
{
    #numberOfRows;
    #numberOfColumns;
    #matrix;

    constructor(_numberOfRows, _numberOfColumns)
    {
        this.#numberOfRows = _numberOfRows;
        this.#numberOfColumns = _numberOfColumns;
    }

    generateMaze()
    {
        this.#generateMatrix();
    }

    #generateMatrix()
    {
        let matrix = [];
        let matrixLine = [];

        for (let x = 0; x < this.#numberOfColumns; x++)
        {
            let rowId = `maze-row-${x}`;

            document.querySelector(`#maze`).appendChild(document.createElement("div")).id = rowId;
            document.querySelector(`#${rowId}`).className = "maze-row";

            for (let y = 0; y < this.#numberOfRows; y++)
            {
                let tileId = `tile-${x}-${y}`;
                let tileText = `(${x}, ${y})`;

                matrixLine.push(tileText);
                
                document.querySelector(`#${rowId}`).appendChild(document.createElement("div")).id = tileId;
                document.querySelector(`#${tileId}`).className = "maze-tile";
            }

            matrix.push(matrixLine);
            matrixLine = [];
        }

        console.log(matrix);
        this.#matrix = matrix;
    }
}