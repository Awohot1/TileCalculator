"use strict";

const menuBtn = document.getElementById("menu-btn");
const date = document.getElementById("date");
const menuItems = document.getElementById("menu-items");
const menuLinks = document.querySelectorAll(".menu-links");
const single = document.querySelector(".single");
const multi = document.querySelector(".multiple");
const singleBox = document.querySelector("#single-measurement");
const multiBox = document.querySelector("#multiple-measurement");
const hr = document.querySelector("hr");
// Date Setup
date.innerHTML = new Date().getFullYear();
// Nav Setup
menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("show-nav");
  menuItems.classList.toggle("hidden");
});
// Menu Items
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  });
});

//Single/Multiple Section Transition
single.addEventListener("click", () => {
  singleBox.classList.toggle("-translate-x-full");
  multiBox.classList.toggle("-translate-x-full");
  hr.classList.replace("hr-multi", "hr-single");
});
multi.addEventListener("click", () => {
  singleBox.classList.toggle("-translate-x-full");
  multiBox.classList.toggle("-translate-x-full");
  hr.classList.replace("hr-single", "hr-multi");
});

var swiper = new Swiper(".fleets", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  loop: true,
  looFillGroupWithBlank: true,
  coverflowEffect: {
    rotate: 50,
    strectch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

// Tile Calculator

const calc = document.querySelector(".calc");

//Warning
const unitWarning = document.querySelector("#unit-warning");

function product(x, y) {
  return x * y;
}

calc.addEventListener("click", (e) => {
  e.preventDefault();
  const unit = document.getElementById("unit");
   const apartment = document.getElementById("apartment").value;
  let length = Number(document.getElementById("length").value);
   let breadth = Number(document.getElementById("breadth").value);
   let tileDiml = Number(document.getElementById("tile-dim1").value);
   let tileDimb = Number(document.getElementById("tile-dim2").value);
   //equate unit value to selected index
   let unitValue = Number(unit.value);
   unit.addEventListener("change", () => (unitValue = unit.selectedIndex));
   let tileDim1, tileDim2;

  switch (unitValue) {
     case 0:
      unitWarning.classList.remove("hidden");
      console.log("Please select a unit");
      break;
     case 1:
      length = length;
      breadth = breadth;
      tileDim1 = tileDiml;
      tileDim2 = tileDimb;
      break;
   case 2:
       length = length * 100;
     breadth = breadth * 100;
      tileDim1 = tileDiml * 100;
      tileDim2 = tileDimb * 100;
      break;
    case 3:
      length = length * 30.48;
      breadth = breadth * 30.48;
   tileDim1 = tileDiml * 30.48;
      tileDim2 = tileDimb * 30.48;
      break;
     case 4:
      length = length * 2.54;
     breadth = breadth * 2.54;
      tileDim1 = tileDiml * 2.54;
     tileDim2 = tileDimb * 2.54;
      break;
   default:
   }

  let result = product(length, breadth);
  let tileDim = product(tileDim1, tileDim2);
  let numberOfTiles = Math.trunc(result / tileDim) + 3;
  //Single Result
  const singleResult = document.querySelector("#single-result");
  singleResult.innerHTML = ` <p class="text-2xl">You will need <span class="font-serif">${numberOfTiles}</span> pieces of <span class="font-serif"> ${tileDiml} by
  ${tileDimb} tiles</span> for your
${apartment}
</p>`;
});

/*Multiple Section*/
const addMore = document.querySelector("#add-more");
const myTable = document.querySelector(".my-table");
const resultTable = document.querySelector(".result-table");
const calcMulti = document.querySelector("#calc-multi");
//Add more content
function addElement() {
  const newRow = document.createElement("tr");
  newRow.classList.add("multiple-table", "align-middle");
  newRow.innerHTML = `<td class=""><input type="text" id="apartment" placeholder="Apartment" class="w-[70px] md:w-8/12 md:p-2" required>
  </td>
<td class=""><input type="number" id="length" placeholder="Length" class="w-[70px] md:w-8/12 md:p-2" required>
</td>
<td class=""><input type="number" id="breadth" placeholder="Breadth" class="w-[90px] md:w-8/12 md:p-2" required>
</td>
<td class="w-[70px]"><input type="number" id="tile-dim1" class="w-6 md:w-1/3 md:p-2""> by <input type="number" id="tile-dim2"
class="w-6 md:w-1/3 md:p-2"" required>
</td>`;
  myTable.appendChild(newRow);
}
//Add more EventListener
addMore.addEventListener("click", addElement);

calcMulti.addEventListener("click", (e) => {
  e.preventDefault();
  let unitValue = Number(unit.value);
  unit.addEventListener("change", () => (unitValue = unit.selectedIndex));
  let tableRows = myTable.rows;
  let numberOfTilesArray = [0];
  //table calc
  for (var i = 1; i < tableRows.length; i++) {
    let apartmentCell = tableRows[i].cells[0].querySelector("input").value;
    let lengthCell = Number(tableRows[i].cells[1].querySelector("input").value);
    let breadthCell = Number(
      tableRows[i].cells[2].querySelector("input").value
    );
    let tileDimLCell = Number(
      tableRows[i].cells[3].querySelector("#tile-dim1").value
    );
    let tileDimBCell = Number(
      tableRows[i].cells[3].querySelector("#tile-dim2").value
    );
    let unitValue = Number(unit.value);
    unit.addEventListener("change", () => (unitValue = unit.selectedIndex));
    var tileDim1, tileDim2, length, breadth;

    switch (unitValue) {
      case 0:
        unitWarning.classList.remove("hidden");

        break;
      case 1:
        length = lengthCell;
        breadth = breadthCell;
        tileDim1 = tileDimLCell;
        tileDim2 = tileDimBCell;
        break;
      case 2:
        length = lengthCell * 100;
        breadth = breadthCell * 100;
        tileDim1 = tileDimLCell * 100;
        tileDim2 = tileDimBCell * 100;
        break;
      case 3:
        length = lengthCell * 30.48;
        breadth = breadthCell * 30.48;
        tileDim1 = tileDimLCell * 30.48;
        tileDim2 = tileDimBCell * 30.48;
        break;
      case 4:
        length = lengthCell * 2.54;
        breadth = breadthCell * 2.54;
        tileDim1 = tileDimLCell * 2.54;
        tileDim2 = tileDimBCell * 2.54;
        break;
      default:
        console.log("Error");
    }
    var result = product(length, breadth);
    let tileDim = product(tileDim1, tileDim2);
    var div = Math.trunc(result / tileDim) + 3;
    numberOfTilesArray.push(div);

    resultTable.innerHTML = `<tr>
  <th class="bg-gradient-to-r from-clr-tertiary to-clr-heading">Apartment</th>
  <th class="bg-gradient-to-r from-clr-tertiary to-clr-heading">Tile Dimension</th>
  <th class="bg-gradient-to-r from-clr-tertiary to-clr-heading">No. of Tiles</th>
</tr>`;
    //Result Table
    for (var j = 1; j < tableRows.length; j++) {
      let apartmentCellR = tableRows[j].cells[0].querySelector("input").value;
      let tileDimLCellR = Number(
        tableRows[j].cells[3].querySelector("#tile-dim1").value
      );
      let tileDimBCellR = Number(
        tableRows[j].cells[3].querySelector("#tile-dim2").value
      );

      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${apartmentCellR}</td>
<td>${tileDimLCellR} by ${tileDimBCellR}</td>
<td>${numberOfTilesArray[j]} pieces</td>`;
      resultTable.appendChild(newRow);
    }

    // //Multi function
    // function calcu(unitValue) {
    //   if ((unitValue = 0)) {
    //     unitWarning.classList.remove("hidden");
    //     console.log("Please select a unit");
    //   } else if ((unitValue = 1)) {
    //     length = lengthCell;
    //     breadth = breadthCell;
    //     tileDim1 = tileDimLCell;
    //     tileDim2 = tileDimBCell;
    //   } else if ((unitValue = 2)) {
    //     length = lengthCell * 100;
    //     breadth = breadthCell * 100;
    //     tileDim1 = tileDimLCell * 100;
    //     tileDim2 = tileDimBCell * 100;
    //   } else if ((unitValue = 3)) {
    //     length = lengthCell * 30.48;
    //     breadth = breadthCell * 30.48;
    //     tileDim1 = tileDimLCell * 30.48;
    //     tileDim2 = tileDimBCell * 30.48;
    //   } else if ((unitValue = 4)) {
    //     length = lengthCell * 2.54;
    //     breadth = breadthCell * 2.54;
    //     tileDim1 = tileDimLCell * 2.54;
    //     tileDim2 = tileDimBCell * 2.54;
    //   } else {
    //     console.log("Error");
    //   }

    //   return tileDim1, tileDim2, length, breadth;
    // }
  }
});
