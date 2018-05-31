"use strict";
{
    let moreInfo = {
        controller: function (movieService) {
            let vm = this;
            vm.moreInfo = movieService.moreInfo();
        },
        template: `<h1>More Info</h1>
            <h2>Title: {{m.title}}</h2>
            `
    };

    moreInfo.$inject = ["movieService"];

    angular
        .module("movie")
        .component("moreInfo", moreInfo);
}