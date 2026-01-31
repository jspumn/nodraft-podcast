---
layout: home
title: NoDraft Podcast
---

<div style="text-align: center; margin-bottom: 40px;">
  <h1 style="font-size: 2.5em; margin-bottom: 10px;">🎙 NoDraft Podcast</h1>
  <p style="font-size: 1.1em; color: #666;"><i>給慢跑者、通勤族、失眠仔的Podcast ，聽眾人口散佈歐美居多。聊書、影劇、動漫之於生活的連結，偶爾沾沾哲學，但經常超譯。集集亂聊，暗藏驚喜，小心上癮！</i></p>
</div>

---

🎙 **NoDraft Podcast**


🙋‍♂️ Jesper – An infectious disease researcher/scientist in Minnesota, trying hard to uncover (personal/subjective) insights into nearly everything.

🙋‍♀️ Vivi – A life adventurer has an insatiable curiosity for human behavior. Explore everything about people collaboration—what/how/why we think and do.

---

## 🎧 立即收聽 (Latest Episode)

<iframe src="https://rss.com/podcasts/2023nodraft/embed/" 
  style="width: 100%;" 
  title="NoDraft Podcast" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  shell="true" 
  height="200">
</iframe>

<div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
  <a href="{{ site.podcast.apple }}" target="_blank" style="background: #A033FF; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px;">🍎 Apple Podcasts</a>
  <a href="{{ site.podcast.spotify }}" target="_blank" style="background: #1DB954; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px;">🟢 Spotify</a>
  <a href="https://rss.com/podcasts/2023nodraft/" target="_blank" style="background: #FF5722; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px;">📡 RSS Feed</a>
</div>

---

## 📝 歷集 Show Notes
（點擊標題查看詳細內容與視覺圖表）

{% for post in site.posts %}
<div style="margin-bottom: 30px; padding: 15px; border-left: 4px solid #e1e4e8;">
  <h3 style="margin-top: 0;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <small style="color: #888;">📅 發布於 {{ post.date | date: "%Y-%m-%d" }}</small>
  <p style="margin-top: 10px;">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
</div>
{% endfor %}
