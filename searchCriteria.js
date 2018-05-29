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
        }
    }
    angular
        .module("movie")
        .component("searchCriteria", searchCriteria);
}