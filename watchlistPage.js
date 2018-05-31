"use strict";
{
    let watchlist = {
        template: `<a href=#!/home><button> Home </button></a>
        <a href=#!/movie><button> Recent Search </button></a>
        <h1 ng-class="header">Watchlist</h1><div ng-repeat="n in $ctrl.list" | taskFilter track by $index>
        <h3>Title: {{n.title}}</h3><img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2{{n.image}}"><p></p>
        <p>Rating: {{n.rating}}</p><p>Release date: {{n.date}}</p>
        <button ng-click="$ctrl.delete($index)">Removie</button>
        </div>`,
        controller: function(movieService) {
            const vm=this;
            vm.list = movieService.getList();
            vm.delete = function(index){
                vm.byebye = movieService.removie(index);
            } 
        }
    }

    watchlist.$inject = ["movieService"];
    angular
        .module("movie")
        .component("watchlist", watchlist);
}