"use strict";
{
    let watchlist = {
        template: `<h1>Watchlist</h1><div ng-repeat="n in $ctrl.list"><h3>Title: {{n.title}}</h3><p>Rating: {{n.rating}}</p><p>Release date: {{n.date}}</p></div>`,
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