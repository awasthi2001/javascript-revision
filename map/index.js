let mapContainer = document.getElementById("mapContainer");
let search = document.getElementById("inp");
let myBetterFunction = debounce(displayMap, 1000);
search.addEventListener("keyup", () => {
  myBetterFunction();
});
function debounce(fn, delay) {
  let timerid; //if we have the timerid already
  return function () {
    clearTimeout(timerid); //then here it will clearthetimeout
    timerid = setTimeout(() => {
      fn();
    }, delay);
  };
}
let count = 0;
function displayMap(val = "mumbai") {
  count++;
  console.log(search.value, count);
  let frame = `<iframe
width="600"
height="450"
style="border:0"
loading="lazy"
allowfullscreen
referrerpolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps/embed/v1/place?key=
  &q=${search.value ? search.value : val}">
</iframe>`;
  mapContainer.innerHTML = frame;
}

displayMap();
