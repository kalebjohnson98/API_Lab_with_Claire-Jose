"use strict";
{
    angular
      .module("movie")
      .config(($routeProvider) => {
        $routeProvider
          .when("/home", {
            template: "<home></home>"
          })
          .when("/movie", {
            template: "<movie></movie>"
          })
          .when("/watchlist", {
            template: "<watchlist></watchlist>"
          })
          .otherwise({ redirectTo: "/home" });
      });
  }