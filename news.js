$(document).ready(function(){
  
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const qInTitle = "None";
  const from = "2020-12-11";
  const apiKey = "2c9aadb862ba458a9ffc475420b4bc84";
  const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
  const request = new Request(url);

  fetch(request)
  .then(response => response.json())
  .then((news) => {
    console.log(news);
  })
  .catch(error => {
    console.log(error);
  });
  

  $.ajax({
    url:url,
    method:"GET",
    dataType:"json",

    success:function(news) {
      let output = "";
      let latestNews = news.articles;

      for (var i in latestNews){
        output +=`
        <div class="card" style="width: 18rem;">
          <img src="${latestNews[i].urlToImage}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${latestNews[i].title}</h5>
                  <p class="card-text">${latestNews[i].description}</p>
                  <a href="${latestNews[i].url}" class="btn btn-primary">Read the Story</a>
              </div>
        </div>
        `;
      }

      if(output !== ""){
        $('#news').html(output);
      }
    },

    error:function(){
  
    },

  });
});