
let table = document.createElement("table");

for (let i = 0; i < 3; i ++) {
 let row = document.createElement("row");
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("tr")
      cell.setAttribute("id", `square:${i * 3 + j + 1}`)
      row.append(cell);
    }
    table.append(row);
}

document.body.append(table);

