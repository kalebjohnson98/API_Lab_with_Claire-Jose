"use strict";
{
    const getData = function(){
        let url = "https://api.themoviedb.org/3/search/movie?api_key=a53a6bc42972a9ac76757aa3b5089827&query=all";
        $http.get(url).then(function(response){
            console.log(response);
        });
    }
    let i = results[];
    for(i= 0; i<10; i++){
        let div = document.getElementById('list');
        div.append(
         `<p>${i.title}"></p>
         <p>${i.popularity}</p>
         <p>${i.overview}</p>`
        );
     }
  
  angular
    .module("movie")
    .service("getData", ["$http", getData]);
}