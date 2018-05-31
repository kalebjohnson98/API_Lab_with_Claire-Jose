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
                {image: vm.movies[index].poster_path,
                title: vm.movies[index].title,
                rating: vm.movies[index].vote_average,
                date: vm.movies[index].release_date}
                
                vm.addtowl = movieService.addList(x);
            }

        },
        template: `<p>Search here to filter</p>
            <input ng-model="searchText">
            <div ng-repeat="m in $ctrl.movies | filter: searchText track by $index">
            <h2>Title: {{m.title}}</h2>
            <p>Rating: {{m.vote_average}}</p>
            <p>Year Released: {{m.release_date}}</p>
            <a href="#!/moreInfo"><button>More Info</button></a>
            <button ng-click="$ctrl.listinfo($index)" ng-model="$index">Add to Watchlist</button>

            </div>      
            `
    };

    movie.$inject = ["movieService"];

    angular
        .module("movie")
        .component("movie", movie);
}