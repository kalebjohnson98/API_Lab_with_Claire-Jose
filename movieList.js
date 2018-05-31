"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();
            console.log(vm.movies);
            vm.list = movieService.getList();
            vm.listinfo = function(index) {

                let x =
                {title: vm.movies[index].title,
                rating: vm.movies[index].vote_average,
                date: vm.movies[index].release_date}
                vm.addtowl = movieService.addList(x);
            }

        },
        template: `<p>Search here to filter</p>
            <input ng-model="searchText">
            <div ng-repeat="m in $ctrl.movies | filter: searchText track by $index">
            <h2>Title: {{m.title}}</h2>
            <span>Summary: {{m.overview}}</span>
            <p>Year Released: {{m.release_date}}</p>
            <p>Rating: {{m.vote_average}}</p>
            <button>More Info</button>
            <button ng-click="$ctrl.listinfo($index)" ng-model="$index">Add to Watchlist</button>
            <button ng-click="$ctrl.print($index)">test</button>
            </div>      
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("movie")
        .component("movie", movie);
}