// console.log("get items", items);
const header = document.querySelector(".header");
console.log(header.textContent);
header.textContent = "joyonto kumar roy";

// textContent => only human readable text
// create a div creatElement

let container = document.createElement("div");
container.id = "items-container";
document.body.appendChild(container);
// . append() if want to add multiple element then you can use this
//  .appnedChild() only single elememnt add this is the perfect

// innerHtml =>

// document.body.innerHTML += `<div></div>`; // adding new element in body
// document.body.innerHTML = `<div></div>`; // resigning new element in body (body er morday ja cilo sob kichu resign hoya jabe)

items.forEach((item) => renderItem(item));
function renderItem(item) {
  let itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.id = `item-${item.id}`;
  itemDiv.style.border = "1px solid red";
  itemDiv.style.marginBottom = "10px";
  itemDiv.style.padding = "10px";

  //   single item content
  let amount = document.createElement("li");
  amount.className = "amount";
  amount.textContent = `Amount : ${item.amount}`;

  //   single item content
  let dateIfo = document.createElement("li");
  dateIfo.className = "date";
  dateIfo.textContent = `Date : ${item.date}`;

  //   let itemContainer = document.querySelector(container);
  itemDiv.append(amount, dateIfo);
  console.log(itemDiv);

  container.appendChild(itemDiv);
}
