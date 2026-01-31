---
layout: home
title: NoDraft Podcast
---

🎙 **NoDraft Podcast**

給慢跑者、通勤族、失眠仔的Podcast ，聽眾人口散佈歐美居多。聊書、影劇、動漫之於生活的連結，偶爾沾沾哲學，但經常超譯。集集亂聊，暗藏驚喜，小心上癮！

🙋‍♂️ Jesper – An infectious disease researcher/scientist in Minnesota, trying hard to uncover (personal/subjective) insights into nearly everything.

🙋‍♀️ Vivi – A life adventurer has an insatiable curiosity for human behavior. Explore everything about people collaboration—what/how/why we think and do.

---

## 📝 最新集數
（由最新到最舊，可直接播放）

{% for post in site.posts %}
### {{ post.title }}

👉 [閱讀本集 Show Notes]({{ post.url }})

<!-- Spotify Podcast Player -->
<iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/show/0nrSpTsuxRS8TzVsluynVy"
  width="100%"
  height="152"
  frameborder="0"
  allowfullscreen
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>

- 🍎 [Apple Podcasts]({{ site.podcast.apple }})

---
{% endfor %}
