function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let d = Math.floor(Math.random() * 4);
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}

function randomMissText() {
  let missText = ['Упс:(', 'Мимо!'];
  random = Math.floor(Math.random() * missText.length);
  console.log(missText[random]);
  return missText[random];
}