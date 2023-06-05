import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeEL = document.querySelector('iframe');
    const player = new Player(iframeEL);
const STORAGE_KEY = "videoplayer-current-time";

player.on("timeupdate", throttle(timeSavehandler, 1000));

if (localStorage.getItem(STORAGE_KEY)) {
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)))
}


function timeSavehandler(data) {
    
    const timeData = JSON.stringify(Math.round(data.seconds))
    localStorage.setItem(STORAGE_KEY, timeData);
    
}

