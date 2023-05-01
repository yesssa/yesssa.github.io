
var headlineNews = [
	{
		"link": "news2.html",  
		"image": "assets/img/top_1.png", 
		"title": "The Fastest Runner 2023", 
		"subtext": "Canadian Running Magazine for running news, nutrition & training tips, gear and race reviews for the Canadian running community.",
	},
	{
		"link": "news.html",  
		"image": "assets/img/top_2.png", 
		"title": "Russia Stripped Of Hosting 2022 Volleyball World Championships", 
		"subtext": "Russia has been stripped of hosting the men's Volleyball World Championships in August and September due to its invasion of Ukraine.",
	}
];

var subNews = [
	{ 
		"link": "sub1.html", 
		"image": "assets/img/sub_1.png", 
		"title": "CBA NBA Baru Sudah Disetujui, Cermati Poin Pentingnya!", 
		"subtext": "Ever wondered why you can meet your fitness goals? Behavioural scientist Emily Balcetis turned to elite runners to find the answer. She proposes a strategy that consists of changing your visual focus."
	},
	{ 
		"link": "sub2.html", 
		"image": "assets/img/sub_2.png", 
		"title": "Lakers Lumat Grizzlies dengan Jarak 40 Poin dan Lolos ke Semifinal Wilayah",
		"subtext": "Her win over Brazil's Haddad Maia came 24 hours after she beat 2021 US Open finalist Leylah Fernandez in round one."
	},
	{ 
		"link": "sub3.html", 
		"image": "assets/img/sub_3.png", 
		"title": "Serangan Brutal Draymond Green Jadi Bahan Obrolan, Tapi Ada Juga yang Membelanya", 
		"subtext": "What are the true facts and figures in keeping fit and healthy? We talk to scientists and health professionals from around the world.."
	},
]

var newNews = [
	{
		"link": "newsNew1.html", 
		"image": "assets/img/newsNew1_1.png", 
		"title": "Pemanasan FIFA World Cup, AS Uji Coba Lawan Yunani dan Jerman",
		"subtext": "October 2023 by Author"
	},
	{
		"link": "newsNew2.html",  
		"title": "Dejan/Gloria Kandas di Semifinal 2023",
		"subtext": "October 2023 by Author"
	},
	{
		"link": "newsNew3.html", 
		"title": "Minder Lawan Thailand",
		"subtext": "October 2023 by Author"
	},
	{
		"link": "newsNew1.html", 
		"title": "The searchlight has changed",
		"subtext": "October 2023 by Author"
	},
	{
		"link": "newsNew2.html", 
		"title": "A hymn to the working class",
		"subtext": "October 2023 by Author"
	},
]


function loadHeadline() {
	var container = document.getElementById("headline-container");
	var mainTemplate = document.getElementById("template-headline-news");

	for (i=0; i<headlineNews.length; i++) {
		var template = mainTemplate.cloneNode(true);
		template.innerHTML = template.innerHTML.replace("{link}", headlineNews[i].link);
		template.innerHTML = template.innerHTML.replace("{img}", headlineNews[i].image);
		template.innerHTML = template.innerHTML.replace("{title}", headlineNews[i].title);
		template.innerHTML = template.innerHTML.replace("{subtext}", headlineNews[i].subtext);

		if (i == 0) {
			container.innerHTML = template.innerHTML;
		}
		else {
			container.innerHTML += template.innerHTML
		}
	}
}

function loadSub() {
	var container = document.getElementById("sub-news-container");
	var mainTemplate = document.getElementById("template-sub-news");

	for (i=0; i<subNews.length; i++) {
		var template = mainTemplate.cloneNode(true);
		template.innerHTML = template.innerHTML.replace("{link}", subNews[i].link);
		template.innerHTML = template.innerHTML.replace("{img}", subNews[i].image);
		template.innerHTML = template.innerHTML.replace("{title}", subNews[i].title);
		template.innerHTML = template.innerHTML.replace("{subtext}", subNews[i].subtext);

		if (i == 0) {
			container.innerHTML = template.innerHTML;
		}
		else {
			container.innerHTML += template.innerHTML
		}
	}
}

function loadNew() {
	var container = document.getElementById("new-news-container");
	var mainNewTemplate = document.getElementById("template-new-news-headline");
	var mainTemplate = document.getElementById("template-new-news");

	for (i=0; i<newNews.length; i++) {
		
		if (i == 0) {
			var template = mainNewTemplate.cloneNode(true);
			template.innerHTML = template.innerHTML.replace("{number}", i+1);
			template.innerHTML = template.innerHTML.replace("{link}", newNews[i].link);
			template.innerHTML = template.innerHTML.replace("{img}", newNews[i].image);
			template.innerHTML = template.innerHTML.replace("{title}", newNews[i].title);
			template.innerHTML = template.innerHTML.replace("{subtext}", newNews[i].subtext);

			container.innerHTML = template.innerHTML;
		}
		else {
			var template = mainTemplate.cloneNode(true);
			template.innerHTML = template.innerHTML.replace("{number}", i+1);
			template.innerHTML = template.innerHTML.replace("{link}", newNews[i].link);
			template.innerHTML = template.innerHTML.replace("{title}", newNews[i].title);
			template.innerHTML = template.innerHTML.replace("{subtext}", newNews[i].subtext);

			container.innerHTML += template.innerHTML
		}
	}
}

console.log("script called");

loadHeadline();
loadSub();
loadNew();
