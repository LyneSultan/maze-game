const boundaries = document.querySelectorAll('.boundary');
const end = document.getElementById('end');
const start = document.getElementById('start');
let lost = false;

boundaries.forEach(boundary => {
  boundary.addEventListener('mouseenter', function () {
    alert("Try again from S and try to avoid the walls");
    boundary.style.backgroundColor = 'lightcoral';
    lost = true;
  });
});

start.addEventListener('mouseenter', function () {
  lost = false;
});

end.addEventListener('mouseenter', function () {
  if (lost == false) {
    alert("Congratulations! You won!");
  }
});

