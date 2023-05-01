var topNews = [
	{ 
		"link": "news4.html", 
		"image": "assets/img/top1.png", 
		"title": "Wembanyama & Embiid Bisa Main", 
		"subtext": "Jakarta bakal bergejolak dalam FIBA World Cup 2023 dengan adanya fase grup G dan H.",
	},
	{ 
		"link": "news5.html", 
		"image": "assets/img/top2.png", 
		"title": "Maraton Lintas Benua di Turki", 
		"subtext": "Ajang ini merupakan maraton lintas benua yang memungkinkan orang-orang dapat menyeberang dari Asia ke Eropa.",
	},
	{ 
		"link": "news6.html", 
		"image": "assets/img/top3.png", 
		"title": "Novak Djokovic Justru Bahas Cedera", 
		"subtext": "Petenis asal Serbia, Novak Djokovic prihatin dengan cedera yang dialami oleh Rafael Nadal (Spanyol).",
	},
];

var topNewsList = document.getElementById('top-kiri-container');
for (let i = 0; i < topNews.length; i++) {
  topNewsList.innerHTML += '<div>' + '<a href="' + topNews[i].link + '"><img src="' + topNews[i].image + '" class="top-kiri-image">' + '<div class="top-kiri-news">' +
  '<h3 class="head2">' + topNews[i].title + '</h3>' + '<p class="subket">' + topNews[i].subtext + '</p>' + '</div>' + '</a>' + '</div>';
}

var subNews = [
    {
        "link": "sub4.html", 
		"image": "assets/img/sub1.jpg", 
		"title": "Karasuno Menang Lagi", 
		"subtext": "Setelah mengalahkan Shiratorizawa, Karasuno kembali beranjak naik melewati Miya Twins Inarizaki."
    },
    { 
		"link": "sub5.html", 
		"image": "assets/img/sub2.jpg", 
		"title": "Rin Matsuoka Kembali",
		"subtext": "Lama tak diketahui kabarnya, Rin Matsuoka Sang Atlet Jenius Cilik kembali mengikuti kompetisi renang.",
	},
	{ 
		"link": "sub6.html", 
		"image": "assets/img/sub3.jpg", 
		"title": "Taiga Kagami Cedera", 
		"subtext": "Benturan keras dengan anggota tim lawan, Kagami alami cedera dislokasi pada bahu kanan.",
	},
    { 
		"link": "sub1.html", 
		"image": "assets/img/sub4.jpg", 
		"title": "Jay Jo Bawa Medali", 
		"subtext": "Belum lama naik daun, Jay Jo yang diperkenalkan Minu kembali memenangkan medali emas."
	},
	{ 
		"link": "sub2.html", 
		"image": "assets/img/sub5.jpg", 
		"title": "Yoo Hobin Rising Star", 
		"subtext": "Kalahkan juara bertahan, Yoo Hobin menorehkan rekor baru pada dunia boxing.",
	},
    { 
		"link": "sub3.html", 
		"image": "assets/img/sub6.jpg", 
		"title": "Kiyoko Shimizu Returns", 
		"subtext": "Mantan atlet trek dan lapangan SMA Karasuno kembali dengan sebuah comeback cemerlang.",
	},
    {
        "link": "sub4.html", 
		"image": "assets/img/sub7.jpg", 
		"title": "Master Luo Pensiun", 
		"subtext": "Telah mendapatkan yang selama ini ia inginkan, Master Luo dan Red Hare pamit."
    },
    { 
		"link": "sub5.html", 
		"image": "assets/img/sub8.jpg", 
		"title": "Nagi Seishiro Bertahan", 
		"subtext": "Minggu lalu diprediksikan gugur, Nagi Seishiro membangkitkan Ego-nya dan menang.",
	},
	{ 
		"link": "sub6.html", 
		"image": "assets/img/sub9.jpg", 
		"title": "Usaha Sousuke Yamazaki", 
		"subtext": "Pernah mengalami cedera sehingga harus hiatus, Sousuke Yamazaki terus berjuang.",
	},
    { 
		"link": "sub1.html", 
		"image": "assets/img/sub10.jpg", 
		"title": "Tae Lee Didiskualifikasi", 
		"subtext": "Melanggar peraturan dan bertindak butral, Tae Lee lepas kendali dan didepak keluar."
	},
];

var subNewsList = document.getElementById('sub-kanan-container');
for (let i = 0; i < subNews.length; i++) {
  subNewsList.innerHTML += '<div class="sub-dua">' + '<a href="' + subNews[i].link + '"><img src="' + subNews[i].image + '" class="sub-kanan-image">' + 
  '<div class="sub-kanan-news">' + '<h4 class="head3">' + subNews[i].title + '</h4>' + '<p class="p3">' + subNews[i].subtext + '</p>' + '</div>' + '</a>' + '</div>';
}
