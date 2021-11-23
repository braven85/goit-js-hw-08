import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

const videoCurrentTime = localStorage.getItem('videoplayer-current-time', JSON.stringify);

const timeInSeconds = Math.floor(videoCurrentTime);
const minutes = Math.floor(timeInSeconds / 60);
const seconds = timeInSeconds - (minutes * 60);

player.setCurrentTime(videoCurrentTime)
  .then(videoCurrentTime => console.log(`Ustawiłem początkowy czas filmu z localStorage, czyli ${minutes} min ${seconds} sec`))
  .catch(error => console.error("Ten film nie był jeszcze odtwarzany"));