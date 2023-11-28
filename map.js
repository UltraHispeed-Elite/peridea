var map = [
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,0,0,0,0]
 ];

function generate_map() {
    let table = document.createElement("table");
    table.id = "mapTable"; // Set an ID for the table

    for (let i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        row.classList.add("row" + i);
        row.style.width = "500px";
        row.style.height = "100px";
        row.style.display = "flex";
        row.style.justifyContent = "flex-evenly";

        for (let j = 0; j < 5; j++) {
            let column = document.createElement("td");
            column.classList.add("column" + j);
            column.style.width = "100px";
            column.style.height = "100px";
            if(map[i][j] === 0) {
                column.style.backgroundColor = "black";
            }else if(map[i][j] === 1) {
                column.style.backgroundImage = "url(90.png)";
            }

            row.appendChild(column);
        }

        table.appendChild(row);
    }

    // Append the table to the map div
    document.getElementById("map").appendChild(table);
}
