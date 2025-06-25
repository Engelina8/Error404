---
layout: default
title: CyberSec Pulse - The Podcast
logo: CyberSec Pulse_
---

<section class="hero">
    <div class="container">
        <h1 data-text="DECODING THE DIGITAL FRONTIER">DECODING THE DIGITAL FRONTIER</h1>
        <p>A weekly podcast breaking down the latest threats, trends, and technologies in cybersecurity. Made by students, for everyone.</p>
        <a href="#player-section" class="cta-button">Listen to Latest Episode</a>
    </div>
</section>

<section id="player-section" class="player-container">
    <div class="container">
        <h2>Now Playing</h2>
        <div class="audio-player">
            <audio id="audio-player" src="placeholder.mp3"></audio>
            <div class="player-info">
                <h3 id="episode-title">Select an episode to begin</h3>
                <p id="episode-number">Episode #00</p>
            </div>
            <div class="player-controls">
                <button id="play-pause-btn" class="control-btn"><i class="fas fa-play"></i></button>
                <div class="progress-bar-container">
                    <div id="progress-bar" class="progress-bar"></div>
                </div>
                <div class="time-display">
                    <span id="current-time">0:00</span> / <span id="duration">0:00</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="episodes" class="episodes-list">
    <div class="container">
        <h2>All Episodes</h2>
        <ul>
            {% for episode in site.data.episodes %}
            <li class="episode-item" data-src="{{ episode.src }}" data-title="{{ episode.title }}" data-episode="{{ episode.episode }}">
                <span class="ep-number">Ep. {{ episode.episode }}</span>
                <span class="ep-title">{{ episode.title }}</span>
                <button class="play-episode-btn"><i class="fas fa-play"></i> Play</button>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>

<section id="about" class="about-section">
    <div class="container">
        <h2>About The Project</h2>
        <p>CyberSec Pulse is a final project for our Introduction to Information Security course. We aim to make complex cybersecurity topics accessible and engaging for everyone, from tech enthusiasts to everyday internet users. Join us as we explore the ever-evolving world of digital defense.</p>
    </div>
</section>
