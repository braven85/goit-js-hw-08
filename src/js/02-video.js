import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

const videoCurrentTime = localStorage.getItem('videoplayer-current-time', JSON.stringify);

const promise = new Promise((resolve) => {
  resolve(player.setCurrentTime(videoCurrentTime))
});

promise.catch(error => {});