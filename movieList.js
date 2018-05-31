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
            <span>Summary: {{m.overview}}</span>
            <p>Year Released: {{m.release_date}}</p>
            <p>Rating: {{m.vote_average}}</p>
            <button>More Info</button>
            </div>      
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("movie")
        .component("movie", movie);
}