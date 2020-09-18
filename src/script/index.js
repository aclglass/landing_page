// Heartbeat function to test Javascript sourcing on html
// Noob stuff to help me remember my roots.

function sleep_until(seconds) {
  var max_sec = new Date().getTime();
  while (new Date() < max_sec + seconds * 1000) {}
  return true;
}

function heartbeat() {
  let i = 10;
  let j = 0;
  while (j < i) {
    j += 1;
    sleep_until(1);
    if (j % 2 == 0) {
      console.log("Lub " + j);
    } else {
      console.log("Dub " + j);
    }
  }
}

heartbeat();
