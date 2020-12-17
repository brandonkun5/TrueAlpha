$(document).ready(function(){
  
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const qInTitle = "None";
  const from = "2020-12-14";
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
        <a href="${latestNews[i].url}" class="list-group-item list-group-item-action">${latestNews[i].title}</a>
        `;
      }

      if(output !== ""){
        $("#news").after(output);
      }
    },

    error:function(){
      $("#news").append("Some error occured");
    },

  });
});