var mainNewsSubs = [
	{
		"link": "sub1.html", 
		"image": "assets/img/tsub1.png",
		"subtext": "World record crowd watches England complete Grand Slam against France, previous record on 42,579 set at the 2022 Rugby World Cup final."
	},
	{
		"link": "sub2.html", 
		"image": "assets/img/tsub2.png",
		"subtext": "Volleyball Federation Of India To Pay Sports Management Company Rs 4 Crore For Terminating Contract; VFI will appeal the order."
	},
	{
		"link": "sub3.html", 
		"image": "assets/img/tsub3.png",
		"subtext": "Azerbaijan GP: Charles Leclerc facing tough task to fend off Red Bulls but Sergio Perez knows anything can happen in Baku."
	},
	{
		"link": "sub4.html", 
		"image": "assets/img/tsub4.png",
		"subtext": "Marlie Packer: England want to sell out Twickenham next | 'Not time for all games to be played there yet. I believe we can do it'."
	},
]

var topNews = [
	{
		"link": "news3.html",
		"supertext": "Sport",
		"title": "Manchester United back in doldrums after City defeat", 
		"subtext": "June 2023 by Sheeren"
	},
	{
		"link": "news2.html",
		"supertext": "Sport",
		"title": "The Fastest Runner 2023", 
		"subtext": "July 2023 by Stephanie"
	},
	{
		"link": "news4.html",
		"supertext": "Sport",
		"title": "Wembanyama & Embid Bisa Main", 
		"subtext": "December 2023 by Yessa"
	},
	{
		"link": "news5.html",
		"supertext": "Sport",
		"title": " Maraton Lintas Benua di Turki", 
		"subtext": "February 2023 by Tiffany"
	},
	{
		"link": "news6.html",
		"supertext": "Sport",
		"title": "Novak Djokovic Justru Bahas Cedera", 
		"subtext": "February 2023 by Valen"
	},
]

function loadMainNewsSub() {
	var container = document.getElementById("container-main-news-sub");
	var mainTemplate = document.getElementById("template-main-news-sub");

	for (i=0; i<mainNewsSubs.length; i++) {
		var template = mainTemplate.cloneNode(true);
		template.innerHTML = template.innerHTML.replace("{link}", mainNewsSubs[i].link);
		template.innerHTML = template.innerHTML.replace("{img}", mainNewsSubs[i].image);
		template.innerHTML = template.innerHTML.replace("{subtext}", mainNewsSubs[i].subtext);

		if (i == 0) {
			container.innerHTML = template.innerHTML;
		}
		else {
			container.innerHTML += template.innerHTML
		}
	}
}

function loadTopNews() {
	var container = document.getElementById("container-top-news");
	var mainTemplate = document.getElementById("template-top-news");
	console.log(container);
	console.log(mainTemplate);

	for (i=0; i<topNews.length; i++) {
		var template = mainTemplate.cloneNode(true);
		template.innerHTML = template.innerHTML.replace("{link}", topNews[i].link);
		template.innerHTML = template.innerHTML.replace("{supertext}", topNews[i].supertext);
		template.innerHTML = template.innerHTML.replace("{title}", topNews[i].title);
		template.innerHTML = template.innerHTML.replace("{subtext}", topNews[i].subtext);

		if (i == 0) {
			container.innerHTML = template.innerHTML;
		}
		else {
			container.innerHTML += template.innerHTML
		}
	}
}

console.log("script called");

loadMainNewsSub();
loadTopNews();
