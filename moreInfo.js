"use strict";
{
    let moreInfo = {
        controller: function (movieService) {
            let vm = this;
            vm.info = movieService.getDetails();
            
        },
        template: `<h1 ng-class="header">More Info</h1>
            <a href=#!/home><button> Home </button></a>
            <a href=#!/movie><button> Recent Search </button></a>
            <div>
            <h2>Title: {{$ctrl.info.title}}</h2><img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2{{$ctrl.info.image}}"><p></p>
            <p>Rating: {{$ctrl.info.rating}}</p><p>Release date: {{$ctrl.info.date}}</p><p>Summary: {{$ctrl.info.summary}}</p>
            </div>
            `
    };

    moreInfo.$inject = ["movieService"];

    angular
        .module("movie")
        .component("moreInfo", moreInfo);
}