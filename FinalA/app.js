const submitButton = document.getElementById('submit');
const vidInput = document.getElementById('vid');

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

submitButton.onclick = function () {
    const vid = vidInput.value.split("=")[1];
    for (let i = 0; i < 4; i++) {
        let div = document.createElement('div');
        div.classList.add("video");
        document.getElementById('videos').appendChild(div);
        const player = new YT.Player(div, {
            videoId: vid,
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady() {
            player.playVideo();

        }
    }

}