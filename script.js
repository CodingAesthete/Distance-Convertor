(function () {
  "use strict";

  document.getElementById('convert').addEventListener('submit', (e) => {
    e.preventDefault();

    let distance = parseFloat(document.getElementById('distance').value);

    if (distance) {
      distance = (distance * 1.60934).toFixed(3);
    } else {
      distance = 'Error';
    }

    document.querySelector('.invisible').textContent = distance;
  });

})();