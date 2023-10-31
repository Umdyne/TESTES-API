var url = 'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=b991ab4e7d1c4a1a87468a17fcc49f82';
var req = new Request(url);

fetch(req)
    .then(function(response) {
            return response.json();
    })
    .then(function(data) {
        var noticias = document.getElementById('noticias');
        
        data.articles.forEach(function(article) {
            var listItem = document.createElement('li');
            listItem.textContent = article.title;
            noticias.appendChild(listItem);
        });
    });