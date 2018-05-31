"use strict";
{
    let home = {
        template: `<h1> Welcome to my Movie Page </h1>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>
        <input ng-model="$ctrl.id" placeholder="Movie ID"/> 
        <button ng-click="$ctrl.getMovie()"> Grab a movie! </button>
        <button ng-click="$ctrl.getMovieByID()"> Look up movie by ID </button>
        `,
        controller: function (movieService, $location) {
            let vm = this;
            vm.title = "";
            vm.getMovie = function () {
                vm.movie = movieService.searchMovies(vm.title)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
            vm.getMovieByID = function () {
                vm.movie = movieService.searchMovies(vm.movieId)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
        }
    };
    home.$inject = ["movieService", "$location"];
    angular
        .module("movie")
        .component("home", home);
}