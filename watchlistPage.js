"use strict";
{
    let watchlist = {
        template: `<h1>Watchlist</h1><div ng-repeat="n in $ctrl.list"><h3>Title: {{n.title}}</h3><img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2{{n.image}}"><p></p><p>Rating: {{n.rating}}</p><p>Release date: {{n.date}}</p></div>`,
        controller: function(movieService) {
            const vm=this;
            vm.list = movieService.getList();
            console.log(vm.list);
        }
    }

    watchlist.$inject = ["movieService"];
    angular
        .module("movie")
        .component("watchlist", watchlist);
}