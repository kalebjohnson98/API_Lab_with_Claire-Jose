"use strict";
{
    function movieService($http) {
        let data = {
            title: "Tommy Boi",
            year: "1998",
            rating: "0"
        }
        let details = {};

        let APIKey = "a53a6bc42972a9ac76757aa3b5089827";
        //Give me data
        const getData = function () {
            return data;
        };
        //Update data 
        const setData = function (newData) {
            data = newData;
        };
        //Search Movies By Title
        const searchMovies = function (title) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${title}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                setData(response.data.results);
            });
            
        };
        //Search Movies By Rating
        const searchByRating = function (rating) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&vote_average.gte=${rating}&sort_by=vote_average.asc`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                setData(response.data.results);
            });
            
        };
        //Search Movies By Year
        const searchMoviesByYear = function (year) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&release_date.lte=${year}&sort_by=release_date.desc`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                setData(response.data.results);
            });
            
        };
        //Grab Individual API Data
        const moreInfo = function () {
            let 
            setData(response.data.results);
        };

            const getDetails = function () {
                return details;
            }

            const setDetails = function (d) {
                let details = d;
            }

        return {
            getData,
            setData,
            searchMovies,
            searchMoviesByYear,
            searchByRating,
            moreInfo
        };
    }
    angular
        .module("movie")
        .factory("movieService", movieService)
}