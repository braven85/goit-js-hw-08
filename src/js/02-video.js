import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

try {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  console.log("no");
}
