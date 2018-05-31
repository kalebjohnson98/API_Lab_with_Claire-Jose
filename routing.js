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
          .when("/moreInfo", {
            template: "<more-info></more-info>"
          })
          .otherwise({ redirectTo: "/home" });
      });
  }