const suggestions = document.getElementById("suggestions");
const roomcode = document.getElementById("code");

// https://stackoverflow.com/a/1349426
function makecode(len) { // dynamic length may come in useful later
  const characters = 'ABEFGHIJKLMNQRSTUWXYZ234679';
  const charamount = characters.length;
  let result = '';
  let counter = 0;

  while (counter < len) {
    if (counter != 0 && counter % 3 == 0) result = result.concat('','-');
    result = result.concat('',characters.charAt(Math.floor(Math.random() * charamount)));
    counter += 1;
  }

  return result;
}

roomcode.innerHTML = makecode(8);

// Simulate suggestions that will come over WebSocket
setInterval(() => {
  const message = "Medication for depression";
  suggestions.innerHTML =
    `<li>${message}</li>` +
    suggestions.innerHTML;
}, 5000);
