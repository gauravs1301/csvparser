const searchItem = document.getElementById("searchItem");
const table = document.querySelector(".display");
const rows = table.querySelectorAll("tr");

searchItem.addEventListener("keyup", function () {
  const searchText = searchItem.value.toLowerCase();
  for (let i = 1; i < rows.length; i++) {
    let found = false;
    const cells = rows[i].querySelectorAll("td");
    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].textContent.toLowerCase();
      if (cellText.includes(searchText)) {
        found = true;
        break;
      }
    }
    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
