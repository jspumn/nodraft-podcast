---
layout: home
title: 自己來找你喜歡的東西吧
---

<div style="text-align: center; margin-bottom: 40px;">
  <h1 style="font-size: 2.5em; margin-bottom: 10px;">🎙 NoDraft Podcast</h1>
  <p style="font-size: 1.1em; color: #666;"><i>給慢跑者、通勤族、失眠仔的Podcast ，聽眾人口散佈歐美居多。聊書、影劇、動漫之於生活的連結，偶爾沾沾哲學，但經常超譯。集集亂聊，暗藏驚喜，小心上癮！</i></p>
</div>

---

🎙 **主持人是誰**


🙋‍♂️ Jesper – An infectious disease researcher/scientist in Minnesota, trying hard to uncover (personal/subjective) insights into nearly everything.

🙋‍♀️ Vivi – A life adventurer has an insatiable curiosity for human behavior. Explore everything about people collaboration—what/how/why we think and do.

---

## 🎧 立即收聽 (Latest Episode)

## 🎧 最新集數收聽

<iframe src="https://rss.com/podcasts/2023nodraft/2481595/embed/" 
  style="width: 100%; height: 200px;" 
  frameborder="0" 
  scrolling="no" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
</iframe>

[🍎 Apple Podcasts]({{ site.podcast.apple }}) | [🟢 Spotify]({{ site.podcast.spotify }}) | [📡 RSS Feed](https://rss.com/podcasts/2023nodraft/)

---

## 📝 歷集 Show Notes

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})
*📅 發布於 {{ post.date | date: "%Y-%m-%d" }}*

{{ post.excerpt | strip_html | truncatewords: 25 }}
[...繼續閱讀]({{ post.url }})

---
{% endfor %}

