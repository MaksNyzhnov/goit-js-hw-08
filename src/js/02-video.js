import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeEL = document.querySelector('iframe');
    const player = new Player(iframeEL);


player.on("timeupdate", throttle(timeSavehandler, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))

function timeSavehandler(data) {
    
    const timeData = JSON.stringify(Math.round(data.seconds))
    localStorage.setItem("videoplayer-current-time", timeData);
    
}
