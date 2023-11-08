import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const VCT_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(VCT_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VCT_KEY)) || 0);


