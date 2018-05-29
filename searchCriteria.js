"use strict";
{
    let searchCriteria = {
        templateUrl: "searchCriteria.html",
        
        controller: function ($scope) {
                $scope.movie = [
                    {type: "Genre", options: ["Action", "Comedy", "Romance", "Thriller"]},
                    {type: "Length", options: ["1-1:30 Hours", "1:30-2 Hours"]},
                    {type: "Rating"}
                ];
        }
    }
    //   movieapi.$inject = ["$http"];
    angular
        .module("movie")
        .component("searchCriteria", searchCriteria);
}