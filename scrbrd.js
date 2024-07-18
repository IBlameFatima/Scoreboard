let displayOne = document.getElementById("homedis");
let displayTwo = document.getElementById("guestdis");
let initial = 0;
let inittwo = 0;
function plusone() {
  initial += 1;
  displayOne.textContent = initial;
}
function plustwo() {
  initial += 2;
  displayOne.textContent = initial;
}
function plusthree() {
  initial += 3;
  displayOne.textContent = initial;
}
function plusonee() {
  inittwo += 1;
  displayTwo.textContent = inittwo;
}
function plustwoo() {
  inittwo += 2;
  displayTwo.textContent = inittwo;
}
function plusthreee() {
  inittwo += 3;
  displayTwo.textContent = inittwo;
}
function reset() {
  inittwo = 0;
  initial = 0;
  displayOne.textContent = initial;
  displayTwo.textContent = inittwo;
}
