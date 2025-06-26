document.addEventListener('DOMContentLoaded', function() {
    // ====================================
    // AUDIO PLAYER FUNCTIONALITY
    // ====================================
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
    if (episodeItems.length > 0) {
        episodeItems.forEach(item => {
            item.addEventListener('click', function() {
                const src = this.getAttribute('data-src');
                const title = this.getAttribute('data-title');
                const episode = this.getAttribute('data-episode');

                if (audioPlayer) {
                    audioPlayer.src = src;
                    audioPlayer.load(); // Load the new audio source
                    audioPlayer.play(); // Start playing the new audio
                }
                
                if (episodeTitle) episodeTitle.textContent = title;
                if (episodeNumber) episodeNumber.textContent = `Episode #${episode}`;
                if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            });
        });
    }

    // Play/Pause toggle
    if (playPauseBtn && audioPlayer) {
        playPauseBtn.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audioPlayer.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }

    // Update progress bar and time display
    if (audioPlayer) {
        audioPlayer.addEventListener('timeupdate', function() {
            const currentTime = audioPlayer.currentTime;
            const duration = audioPlayer.duration;
            const progress = (currentTime / duration) * 100;

            if (progressBar) progressBar.style.width = `${progress}%`;
            if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(currentTime);
            if (durationDisplay) durationDisplay.textContent = formatTime(duration);
        });

        // Update duration display when metadata is loaded
        audioPlayer.addEventListener('loadedmetadata', function() {
            if (durationDisplay) durationDisplay.textContent = formatTime(audioPlayer.duration);
        });

        // Reset player display when audio ends
        audioPlayer.addEventListener('ended', function() {
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            if (progressBar) progressBar.style.width = '0%';
            if (currentTimeDisplay) currentTimeDisplay.textContent = '0:00';
        });
    }

    // ====================================
    // TRANSCRIPT LANGUAGE FUNCTIONALITY
    // ====================================
    const languageSelector = document.getElementById('transcript-language');
    
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLang = this.value;
            const transcriptContents = document.querySelectorAll('.transcript-content');
            
            // Hide all transcripts with fade effect
            transcriptContents.forEach(content => {
                content.style.opacity = '0';
                content.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            });
            
            // Show selected transcript with fade effect
            setTimeout(() => {
                const selectedTranscript = document.getElementById('transcript-' + selectedLang);
                if (selectedTranscript) {
                    selectedTranscript.style.display = 'block';
                    setTimeout(() => {
                        selectedTranscript.style.opacity = '1';
                    }, 50);
                }
            }, 350);
        });
    }
    
    

    // ====================================
    // ADDITIONAL UTILITY FUNCTIONS
    // ====================================
    
    // Mobile menu toggle (if you have mobile navigation)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states to external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-external-link-alt"></i> Opening...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.opacity = '1';
            }, 2000);
        });
    });

    // ====================================
    // ENHANCED FEATURES
    // ====================================
    
    // Add click effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Console log for debugging
    console.log('🎵 SecureCast JavaScript loaded successfully!');
    console.log('📻 Audio player:', audioPlayer ? 'Found' : 'Not found');
    console.log('🌐 Language selector:', languageSelector ? 'Found' : 'Not found');
    console.log('🎯 SoundCloud buttons:', loadPlayerButtons.length + ' found');
});
