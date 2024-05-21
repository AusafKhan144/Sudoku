// script.js
document.addEventListener("DOMContentLoaded", function() {
    const board = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    const boardElement = document.getElementById("sudoku-board").getElementsByTagName("tbody")[0];

    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("maxlength", "1");

            if (board[i][j] !== 0) {
                input.value = board[i][j];
                input.setAttribute("disabled", "disabled");
            }

            cell.appendChild(input);

            if (j % 3 === 2 && j !== 8) {
                cell.classList.add("box");
            }

            if (i % 3 === 2 && i !== 8) {
                row.classList.add("box");
            }

            row.appendChild(cell);
        }
        boardElement.appendChild(row);
    }
});
