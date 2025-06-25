document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const episodeTitle = document.getElementById('episode-title');
    const episodeNumber = document.getElementById('episode-number');
    const episodeItems = document.querySelectorAll('.episode-item');

    // Function to format time (seconds to MM:SS)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Set up event listeners for episode items
    episodeItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            const title = this.getAttribute('data-title');
            const episode = this.getAttribute('data-episode');

            audioPlayer.src = src;
            episodeTitle.textContent = title;
            episodeNumber.textContent = `Episode #${episode}`;
            audioPlayer.load(); // Load the new audio source
            audioPlayer.play(); // Start playing the new audio
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Update button to pause
        });
    });

    // Play/Pause toggle
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            this.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            this.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Update progress bar and time display
    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const progress = (currentTime / duration) * 100;

        progressBar.style.width = `${progress}%`;
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    });

    // Update duration display when metadata is loaded
    audioPlayer.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });

    // Reset player display when audio ends
    audioPlayer.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
    });
});
