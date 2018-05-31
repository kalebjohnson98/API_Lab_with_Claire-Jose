"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();
            console.log(vm.movies);


        },
        template: `<p>Search here to filter</p>
            <input ng-model="searchText">
            <div ng-repeat="m in $ctrl.movies | filter: searchText"> 
            <h2>Title: {{m.title}}</h2>
            <p>Rating: {{m.vote_average}}</p>
            <p>Year Released: {{m.release_date}}</p>
            <a href="#!/moreInfo"><button>More Info</button></a>
            </div>      
            `
    };

    movie.$inject = ["movieService"];

    angular
        .module("movie")
        .component("movie", movie);
}