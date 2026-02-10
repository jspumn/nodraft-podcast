---
layout: home
title: 草稿之外 NoDraft Podcast
---

<div style="text-align: center; padding: 40px 10px; background: linear-gradient(180deg, #fdfdfd 0%, #ffffff 100%);">
  <h1 style="font-size: 2.8em; letter-spacing: -1px; margin-bottom: 0;">🎙 NoDraft</h1>
  <p style="font-size: 1.2em; color: #e67e22; font-weight: bold; margin-top: 5px; letter-spacing: 2px;">草稿之外</p>
  
  <div style="max-width: 600px; margin: 25px auto; line-height: 1.8; color: #444; font-style: italic;">
    給慢跑者、通勤族、失眠仔。聊書、影劇、動漫之於生活的連結，偶爾沾沾哲學，但經常超譯。集集亂聊，暗藏驚喜，小心上癮！
  </div>

  <div style="margin-top: 20px;">
    <span style="display: inline-block; background: #f0f0f0; padding: 5px 15px; border-radius: 20px; font-size: 0.85em; margin: 5px;">🙋‍♂️ <b>Jesper</b> · Scientist</span>
    <span style="display: inline-block; background: #f0f0f0; padding: 5px 15px; border-radius: 20px; font-size: 0.85em; margin: 5px;">🙋‍♀️ <b>Vivi</b> · Adventurer</span>
  </div>
</div>

---

## 🎧 正在播放 Latest Episode

{% assign latest_post = site.posts.first %}
<div style="background: #1a1a1a; padding: 20px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-bottom: 20px;">
  {% if latest_post.rss_id %}
    <iframe src="https://rss.com/podcasts/2023nodraft/{{ latest_post.rss_id }}/embed/" 
      style="width: 100%; height: 180px; filter: invert(0.9) hue-rotate(150deg);" frameborder="0" scrolling="no"></iframe>
    <p style="color: #eee; margin-top: 15px; font-size: 0.9em;">🔥 <b>最新：</b>{{ latest_post.title }}</p>
  {% else %}
    <iframe src="https://rss.com/podcasts/2023nodraft/embed/" 
      style="width: 100%; height: 180px; filter: invert(0.9) hue-rotate(150deg);" frameborder="0" scrolling="no"></iframe>
  {% endif %}
  
  <div style="margin-top: 15px; font-size: 0.85em;">
    <a href="{{ site.podcast.apple }}" style="color: #ffb366; text-decoration: none; margin-right: 15px;">🍎 Apple Podcasts</a>
    <a href="{{ site.podcast.spotify }}" style="color: #ffb366; text-decoration: none; margin-right: 15px;">🟢 Spotify</a>
    <a href="https://rss.com/podcasts/2023nodraft/" style="color: #ffb366; text-decoration: none;">📡 RSS Feed</a>
  </div>
</div>

---

## 📝 歷集回顧 Show Notes

<div style="display: grid; gap: 20px;">
{% for post in site.posts %}
  <div style="padding: 20px; border-left: 3px solid #eee; transition: 0.3s;">
    <span style="color: #888; font-size: 0.8em; text-transform: uppercase;">{{ post.date | date: "%B %d, %Y" }}</span>
    <h3 style="margin: 5px 0;"><a href="{{ post.url }}" style="color: #222; text-decoration: none;">{{ post.title }}</a></h3>
    <p style="font-size: 0.9em; color: #666; line-height: 1.6;">
      {{ post.excerpt | strip_html | truncate: 120 }}
    </p>
    <a href="{{ post.url }}" style="color: #e67e22; font-size: 0.9em; font-weight: bold; text-decoration: none;">閱讀全文 →</a>
  </div>
{% endfor %}
</div>
