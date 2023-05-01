
var news = [
  {
    "link": "sub1.html",
    "image": "assets/img/subNew1.jpeg",
    "subtext": "Fernandes' first-half strike earned a hard-fought"
  },
  {
    "link": "sub2.html",
    "image": "assets/img/subNew2.jpeg",
    "subtext": "Speaking after the win at Old Trafford"
  },
  {
    "link": "sub3.html",
    "image": "assets/img/subNew3.jpeg",
    "subtext": "He is so tough. A couple of weeks ago there were questions"
  },
  {
    "link": "sub4.html",
    "image": "assets/img/subNew4.jpeg",
    "subtext": "He leads by example, gives so much energy to the team "
  },
]

var newsList = document.getElementById ('news-new');
for (let i = 0; i < news.length; i++) {
  newsList.innerHTML += '<div class="sub-news-kotak">' + '<a href="' + news[i].link + '"><img src="' + news[i].image + '" class="container-new-sub-img">' 
  + '<div class="container-new-sub-subtext"' + '<p>' + news[i].subtext + '</p>' + '</div>' + '</div>' + '</a>';
}