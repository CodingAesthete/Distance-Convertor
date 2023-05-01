(function () {
  "use strict";

  let convertType = 'miles';
  let heading = document.querySelector('h1');
  let intro = document.querySelector('p');
  let answerDiv = document.getElementById('answer');
  let form = document.getElementById('convert');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'm') {
      heading.innerHTML = `Miles To Kilometers Converter`;
      intro.innerHTML = `Type in a number of miles and click the button to convert the distance to kilometers.`;
      convertType = 'miles';
    } else if (e.key === 'k') {
      heading.innerHTML = `Kilometers To Miles Converter`;
      intro.innerHTML = `Type in a number of kilometers and click the button to convert the distance to miles.`;
      convertType = 'kilometers';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let distance = parseFloat(document.getElementById('distance').value);

    if (distance) {
      if (convertType === 'miles') {
        distance = (distance * 1.60934).toFixed(3);
      } else {
        distance = (distance * 0.621371).toFixed(3);
      }
    } else {
      distance = 'Error';
    }

    document.querySelector('.invisible').textContent = distance;
  });

})();