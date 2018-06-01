"use strict";
{
    let moreInfo = {
        controller: function (movieService) {
            let vm = this;
            vm.info = movieService.getDetails();
            vm.xyz = movieService.getList();
            vm.listinfo = function() {
                let x =
                {image: vm.info.image,
                title: vm.info.title,
                rating: vm.info.rating,
                date: vm.info.date}
                vm.addtowl = movieService.addList(x);
            };
            
        },
        template: `<div class="btnSetup">
            <a href=#!/home><button> Home </button></a>
            <a href=#!/movie><button> Recent Search </button></a>
            </div>
            <h1 class="header">More Info</h1>
            <div id="moreInfo">
            <div>
            <img id="image" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2{{$ctrl.info.image}}">
            </div>
            <div id="infoSetup">
            <h3>Title: {{$ctrl.info.title}}</h3>
            <p>Rating: {{$ctrl.info.rating}}</p>
            <p>Release date: {{$ctrl.info.date}}</p>
            <p>Summary: {{$ctrl.info.summary}}</p>
            <button ng-click="$ctrl.listinfo()">Add to Watchlist</button></br>
            <a href="#!/watchlist"><button>Go to Watchlist</button></a>
            </div>
            </div>
            `
    };

    moreInfo.$inject = ["movieService"];

    angular
        .module("movie")
        .component("moreInfo", moreInfo);
}