"use strict";
{
    let searchCriteria = {
        templateUrl: "searchCriteria.html",
        
        controller: function ($scope) {
                $scope.movie = [
                    {type: "Genre"},
                    {type: "Length"},
                    {type: "Rating"}
                ];
                $scope.genre = [
                    {option: "Action"},
                    {option: "Comedy"},
                    {option: "Romance"},
                    {option: "Thriller"}
                ];
        }
    }
    //   movieapi.$inject = ["$http"];
    angular
        .module("movie")
        .component("searchCriteria", searchCriteria);
}