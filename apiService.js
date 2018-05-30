"use strict";
{
  function movieapi($http) {
    let finalData = {};
    const setMovie = () => {
      return $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?api_key=a53a6bc42972a9ac76757aa3b5089827&query=' + genre
      }).then((response) => {
        finalData = response
        return response;
      }, (error) => {
        console.log(error);
      });
    };
    
    const getMovie = () => { return finalData; };
    
    return {
      returnResults,
      searchMovies
    };
    
  }
  movieapi.$inject = ["$http"];
  
  angular
    .module("movie")
    .factory("movieapi", ["$http", movieapi]);
}