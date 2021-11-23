import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

const videoCurrentTime = localStorage.getItem('videoplayer-current-time', JSON.stringify);

player.setCurrentTime(videoCurrentTime)
  .then(videoCurrentTime => console.log(`Ustawiłem początkowy czas filmu z localStorage, czyli ${Math.floor(videoCurrentTime)} sekund`))
  .catch(error => console.log("Ten film nie był jeszcze odtwarzany"));