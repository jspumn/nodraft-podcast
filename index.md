---
layout: home
title: 草稿之外 NoDraft Podcast
---

# 🎙 NoDraft | 草稿之外

> **給慢跑者、通勤族、失眠仔。**
> 聊書、影劇、動漫之於生活的連結，偶爾沾沾哲學，但經常超譯。集集亂聊，暗藏驚喜，小心上癮！

### 🎙 主持人
* 🙋‍♂️ **Jesper** · Epidemiology Scientist
* 🙋‍♀️ **Vivi** · Life Adventurer

---

## 🎧 最新集數收聽

{% if site.posts.size > 0 %}
  {% assign latest_post = site.posts.first %}
  <iframe src="https://rss.com/podcasts/2023nodraft/{{ latest_post.rss_id }}/embed/" style="width: 100%; height: 200px;" frameborder="0" scrolling="no"></iframe>
{% else %}
  <iframe src="https://rss.com/podcasts/2023nodraft/embed/" style="width: 100%; height: 200px;" frameborder="0" scrolling="no"></iframe>
{% endif %}

[🍎 Apple Podcasts]({{ site.podcast.apple }}) | [🟢 Spotify]({{ site.podcast.spotify }})

---

## 📝 歷集 Show Notes

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
  * [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
  {% endfor %}
{% else %}
  *內容正在準備中，敬請期待。*
{% endif %}
