/*
tile key:
0: 
1: 
*/

var map = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0]
 ];

 var tile_size = 48;

function generate_map() {
    let table = document.createElement("table");
    table.id = "mapTable"; // Set an ID for the table

    for (let i = 0; i < map.length; i++) {
        let row = document.createElement("tr");
        row.classList.add("row" + i);
        row.
        style.width = (tile_size*map[i].length)+"px";
        row.style.height = tile_size+"px";
        row.style.display = "flex";
        row.style.justifyContent = "flex-evenly";

        for (let j = 0; j < map[i].length; j++) {
            let column = document.createElement("td");
            column.classList.add("column" + j);
            column.style.width = tile_size+"px";
            column.style.height = tile_size+"px";
            column.style.backgroundImage = "url("+map[i][j]+".png)";

            row.appendChild(column);
        }

        table.appendChild(row);
    }

    // Append the table to the map div
    document.getElementById("map").appendChild(table);
}
