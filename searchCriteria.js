"use strict";
{
    let searchCriteria = {
        templateUrl: "searchCriteria.html",
        
        controller: function ($scope, movieapi) {
                const vm = this;
                $scope.movie = [
                    {type: "Genre", options: ["Action", "Comedy", "Romance", "Thriller"]},
                    {type: "Length", options: ["1-1:30 Hours", "1:30-2 Hours"]},
                    {type: "Rating"}
                ];
                vm.results = function (){
                    vm.result = movieapi.returnResults();
                    console.log(result);
                }
                
        }
    }
        searchCriteria.$inject = ["movieapi"];
    angular
        .module("movie")
        .component("searchCriteria", searchCriteria);
}