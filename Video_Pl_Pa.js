        
        const video = document.getElementById('videoPlayer');
        const playButton = document.getElementById('playButton');

        let isPlaying = false;
        let hideControlsTimeout;

        function hideControls() {
            clearTimeout(hideControlsTimeout);
            hideControlsTimeout = setTimeout(() => {
                if (!video.paused) {
                    playButton.style.opacity = 0;
                }
            }, 2000);
        }

        function showControls() {
            clearTimeout(hideControlsTimeout);
            playButton.style.opacity = 1;
            hideControls();
        }

        playButton.addEventListener('click', () => {
            if (isPlaying) {
                video.pause();
                playButton.src = '../Lamborghini/Images/play.png';
            } else {
                video.play();
                playButton.src = '../Lamborghini/Images/pause.png';
            }

            isPlaying = !isPlaying;
            hideControls();
        });

        video.addEventListener('mouseenter', () => {
            showControls();
        });

        video.addEventListener('mouseleave', () => {
            hideControls();
        });