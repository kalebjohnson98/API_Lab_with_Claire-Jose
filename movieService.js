"use strict";
{
    function movieService($http) {
        let data = {
            title: "Tommy Boi",
            year: "1998",
            rating: "0"
        }
        let details = {};
        let wl = [];
        let APIKey = "a53a6bc42972a9ac76757aa3b5089827";
        //Give me data
        const getData = function () {
            return data;
        };
        //Update data 
        const setData = function (newData) {
            data = newData;
        };

        const searchMovies = function (title) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${title}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
            
        };

        const searchByRating = function (rating) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&vote_average.gte=${rating}&sort_by=vote_average.asc`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
            
        };

        const searchMoviesByYear = function (year) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&release_date.lte=${year}&sort_by=release_date.desc`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
            
        };

            const getDetails = function () {
                return details;
            }

            const setDetails = function (d) {
                let details = d;
            }
            const getList = function() {
                return wl;
            }
            const addList = function(newwl){
                wl.push(newwl);
                console.log(newwl);
            }

        return {
            getData,
            setData,
            searchMovies,
            searchMoviesByYear,
            searchByRating,
            getList,
            addList
        };
    }
    angular
        .module("movie")
        .factory("movieService", movieService)
}