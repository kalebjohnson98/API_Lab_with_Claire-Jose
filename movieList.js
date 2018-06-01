"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();

            //add to watchlist feature
            vm.list = movieService.getList();
            vm.listinfo = function(index) {
                let x =
                {image: vm.movies[index].poster_path,
                title: vm.movies[index].title,
                rating: vm.movies[index].vote_average,
                date: vm.movies[index].release_date}

                vm.addtowl = movieService.addList(x);
            };

            //more info feature
            vm.info = movieService.getDetails();
            vm.movieInfo = function(index) {
                let d =
                {image: vm.movies[index].poster_path,
                title: vm.movies[index].title,
                rating: vm.movies[index].vote_average,
                date: vm.movies[index].release_date,
                summary: vm.movies[index].overview}
                
                vm.infoPage = movieService.setDetails(d);
            };

        },
        template: `<div class="btnSetup">
            <a href=#!/home><button> Home </button></a>
            <a href=#!/watchlist><button> Go to Watchlist </button></a>
            </div>
            <h1 class="header">Movie List</h1>
            <div id="filter">
            <input placeholder="Search here to filter" ng-model="searchText">
            </div>
            <div id="listSetup">
            <div id="movieList" ng-repeat="m in $ctrl.movies | filter: searchText track by $index">
            <h2>Title: {{m.title}}</h2>
            <p>Rating: {{m.vote_average}}</p>
            <p>Year Released: {{m.release_date}}</p>
            <a href="#!/moreInfo"><button ng-click="$ctrl.movieInfo($index)">More Info</button></a>
            <button ng-click="$ctrl.listinfo($index)" ng-model="$index">Add to Watchlist</button>
            </div>
            </div>      
            `
    };

    movie.$inject = ["movieService"];

    angular
        .module("movie")
        .component("movie", movie);
}