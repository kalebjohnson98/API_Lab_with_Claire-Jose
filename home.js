"use strict";
{
    let home = {
        template: `<h1> Welcome to my Movie Page </h1>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/> 
        <button ng-click="$ctrl.getMovie()"> Search by Title </button>
        <br>
        <input ng-model="$ctrl.year" placeholder="Movie Year"/>
        <button ng-click="$ctrl.getMovieByYear()"> Search by Year </button>
        <br>
        <input ng-model="$ctrl.rating" placeholder="Movie Rating"/>
        <button ng-click="$ctrl.getMovieByRating()"> Search by Rating </button>
        `,
        controller: function (movieService, $location) {
            let vm = this;
            vm.title = "";
            vm.year = "";
            vm.rating = "";
            vm.getMovie = function () {
                vm.movie = movieService.searchMovies(vm.title)
                    .then(function () {
                        $location.path("/movie");
                    });
            };
            vm.getMovieByYear = function () {
                vm.movie = movieService.searchMoviesByYear(vm.year)
                    .then(function () {
                        $location.path("/movie");
                    });
            };
            vm.getMovieByRating = function () {
                vm.movie = movieService.searchByRating(vm.rating)
                    .then(function () {
                        $location.path("/movie");
                    });
            };
        }
    };
    home.$inject = ["movieService", "$location"];
    angular
        .module("movie")
        .component("home", home);
}