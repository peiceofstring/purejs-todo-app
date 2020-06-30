// Add Button
function addButton() {
  var testInput = document.getElementById("textInput").value;
  if (testInput == "") {
    var noTextAlert = document.getElementById("noText");
    noTextAlert.style.display = "block";
    noTextAlert.classList.toggle("bounceAnimate");
  } else {
    var removeNoTextAlert = document.getElementById("noText");
    removeNoTextAlert.style.display = "none";

    // List Item Container (li)
    var listItem = document.createElement("li");
    listItem.classList.add("fadeAnimate", "listStyle", "visable");

    // List Item Text Container
    var listItemTextContainer = document.createElement("span");
    listItemTextContainer.classList.add("listTextStyle");
    listItem.appendChild(listItemTextContainer);

    // List Item Text
    var inputText = document.getElementById("textInput").value;
    var listItemText = document.createTextNode(inputText);
    listItemTextContainer.appendChild(listItemText);

    //CheckBox
    var checkBox = document.createElement("i");
    checkBox.classList.add(
      "fa",
      "fa-square-o",
      "fa-size",
      "checkBoxPosition",
      "hvr-grow"
    );
    listItem.addEventListener("click", checkmark);
    listItemTextContainer.before(checkBox);

    // Remove Button (Close X)
    var closex = document.createElement("i");
    closex.classList.add(
      "fa",
      "fa-times-rectangle",
      "fa-size",
      "xBtnPosition",
      "hoverEffect"
    );
    listItemTextContainer.after(closex);
    closex.addEventListener("click", remove);

    // Add New List Item
    var listContainer = document.getElementById("listContainer");
    listContainer.appendChild(listItem);

    // Clear user input
    var removeValue = document.getElementById("textInput");
    removeValue.value = "";

    //remove no list items
    var removeNoList = document.getElementById("noList");
    removeNoList.style.display = "none";
  }
}
// Check Mark Toggle
function checkmark(ev) {
  var childs = this.childNodes;
  childs[0].classList.toggle("fa-check-square-o");
  childs[0].classList.toggle("fa-square-o");
  childs[1].classList.toggle("strikeThrough");

  setTimeout(checkSelected(), 500);
}

// Remove Function (Closex)
function remove(ev1) {
  var parent2 = ev1.target.parentElement;
  parent2.remove();
  returnState();
}

// Return to No List View
function returnState() {
  var containerL = document.getElementById("listContainer");

  var listItemCheck = document.getElementsByTagName("LI");

  if (listItemCheck.length == 0) {
    var returnState = document.getElementById("noList");
    returnState.style.display = "block";

    addNoListAni();
  }
}

// Enter Key Action
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addButtonPulse();
    addButton();
  }
});
// Add Button | Animation
function addButtonPulse() {
  addPulse();
  setTimeout(removePulse, 1000);
}

function addPulse() {
  var addButtonPulse = document.getElementById("addButton");
  addButtonPulse.classList.add("pulseSubmit");
}
function removePulse() {
  var addButtonPulse = document.getElementById("addButton");
  addButtonPulse.classList.remove("pulseSubmit");
}
// Closex | Remove Selected Element

function checkSelected() {
  var check4Select = document.getElementsByClassName("fa-check-square-o");
  var clearBtn = document.getElementById("clearButton");
  var headerGet = document.getElementById("header");
  if (check4Select.length > 0) {
    clearBtn.style.display = "block";
    header.style.paddingBottom = "9px";
    addClearPulse();
  } else {
    clearBtn.style.display = "none";
    header.style.paddingBottom = "50px";
  }
}

// Clearx | Remove Selected  Items| Function
function clearAll() {
  var toClear = document.getElementsByClassName("fa-check-square-o");
  var itemsToRemove = [];
  for (var i = 0; i < toClear.length; i++) {
    itemsToRemove.push(toClear[i]);
  }
  for (var b = 0; b < itemsToRemove.length; b++) {
    itemsToRemove[b].parentElement.remove();
  }
  clearButtonPulse();

  setTimeout(removeClearBtn, 200);
}
// Remove  Clearx Element
function removeClearBtn() {
  var clearBtn1 = document.getElementById("clearButton");
  clearBtn1.style.display = "none";
  header.style.paddingBottom = "50px";
}
// Clearx | Animation
function clearButtonPulse() {
  addClearPulse();
  setTimeout(removeClearPulse, 1000);
  returnState();
}

function addClearPulse() {
  var addClearedPulse = document.getElementById("clearButton");
  addClearedPulse.classList.add("pulseSubmit1");
}

function removeClearPulse() {
  var addClearedPulse = document.getElementById("clearButton");
  addClearedPulse.classList.remove("pulseSubmit1");
}

// No List | Animation
function noListAnimation() {
  addNoListAni();
  setTimeout(removeNoListAni, 1000);
}

function addNoListAni() {
  var noListEl = document.getElementById("noList");
  noListEl.classList.add("fadeInAni");
}
function removeNoListAni() {
  var noListEl = document.getElementById("noList");
  noListEl.classList.remove("fadeInAni");
}
