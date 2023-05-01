var category = [
    {
        "link": "category2.html",
        "title": "Sport",
    },
    {
        "link": "category2.html",
        "title": "Fashion",
    },
    {
        "link": "category2.html",
        "title": "Entertainment",
    },
]

var categoryList = document.getElementById('category-container')
for (let i=0; i < category.length; i++) {
    categoryList.innerHTML += '<div class="container-cat">' + '<a href="' + category[i].link + '"><h1 class="main-category-title">' + category[i].title + '</h1>' + '</div>' + '</a>';
}