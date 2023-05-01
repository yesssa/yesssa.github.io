  const news = [
    { 
        link: "news.html",
        title: "Hasil Badminton Asia Championships 2023: Anthony Ginting ke Final", 
        date: "2022-04-01",
        image: "assets/img/badminton2.png",
        subtext: "Badminton"
    },
    { 
        link: "newsNew3.html",
        title: "Minder Lawan Thailand, Voli Putri Indonesia Belum Berani Target Emas", 
        date: "2022-04-02",
        image: "assets/img/voli.png",
        subtext: "Volly"
    },
    { 
        link: "newsNew2.html",
        title: "Dejan/Gloria Kandas di Semifinal Badminton Asia Championships 2023", 
        date: "2022-05-01",
        image: "assets/img/badminton.png",
        subtext: "Badminton"
    },
    { 
        link: "newsNew1.html",
        title: "Pemanasan FIBA World Cup, AS Uji Coba Lawan Yunani dan Jerman", 
        date: "2022-05-04",
        image: "assets/img/basket.png",
        subtext: "Basketball"
    },
    { 
        link: "news.html",
        title: "Lakers Lumat Grizzlies dengan Jarak 40 Poin dan Lolos ke Semifinal Wilayah 29 April 2023", 
        date: "2022-03-07",
        image: "assets/img/basket2.png",
        subtext: "Basketball"
    },
  ];

 news.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate the news list HTML with only the 4 newest articles
let newsList = '';
for (let r = 0; r < 3 && r < news.length; r++) {
  newsList += '<div class= "newest">' + '<a href="' + news[r].link + '" target="_blank">' + "<br>" + '<img src="' + news[r].image + '">' + "<br>" + '<h2 class="judul2">' + news[r].title + '</h2>' + "<br>" + '<p class="subtitle">' + news[r].subtext + '</p>' + "<br>" + '<p class="tgl">' + news[r].date + '</p>' + '</a>' + '</div>';
}

  // Display the news list
  document.getElementById('newestNews').innerHTML = newsList;
