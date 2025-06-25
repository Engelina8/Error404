---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <h1 class="glitch">SecureCast</h1>
        <p>Cybersecurity insights for the digital age</p>
        <div class="hero-buttons">
            <a href="#latest" class="btn btn-primary">Listen Now</a>
            <a href="/about/" class="btn btn-secondary">About Us</a>
        </div>
    </div>
</section>

<!-- Latest Episode -->
<section id="latest" class="latest-episode">
    <div class="container">
        <h2>Latest Episode</h2>
        {% assign latest_post = site.posts.first %}
        {% if latest_post %}
        <div class="episode-card featured">
            <div class="episode-content">
                <h3><a href="{{ latest_post.url }}">{{ latest_post.title }}</a></h3>
                <div class="episode-meta">
                    <span class="episode-number">Episode {{ latest_post.episode_number }}</span>
                    <span class="episode-date">{{ latest_post.date | date: "%B %d, %Y" }}</span>
                    <span class="episode-duration">{{ latest_post.duration }}</span>
                </div>
                <p class="episode-description">{{ latest_post.description }}</p>
                
                {% if latest_post.audio_file %}
                <div class="episode-player">
                    <audio controls class="audio-player">
                        <source src="{{ latest_post.audio_file }}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                {% endif %}
                
                <div class="episode-actions">
                    <a href="{{ latest_post.url }}" class="btn btn-primary">Full Episode</a>
                </div>
            </div>
        </div>
        {% endif %}
    </div>
</section>

<!-- All Episodes -->
<section class="episodes-list">
    <div class="container">
        <h2>All Episodes</h2>
        <div class="episodes-grid">
            {% for post in site.posts limit: 6 %}
            <div class="episode-card">
                <div class="episode-content">
                    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <div class="episode-meta">
                        <span class="episode-number">Episode {{ post.episode_number }}</span>
                        <span class="episode-date">{{ post.date | date: "%b %d" }}</span>
                        <span class="episode-duration">{{ post.duration }}</span>
                    </div>
                    <p class="episode-description">{{ post.description | truncate: 100 }}</p>
                    <div class="episode-actions">
                        <a href="{{ post.url }}" class="btn btn-primary btn-sm">Listen</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        
        {% if site.posts.size > 6 %}
        <div class="text-center">
            <a href="/episodes/" class="btn btn-secondary">View All Episodes</a>
        </div>
        {% endif %}
    </div>
</section>
