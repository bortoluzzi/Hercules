angular.module('hercules').config(function ($routeProvider, $locationProvider) {

    $routeProvider

        //Register
        .when('/register', {
            templateUrl: 'public/components/registration/registration.view.html',
            controller: 'RegistrationController'
        })

        //Login
        .when('/login', {
            templateUrl: 'public/components/login/login.view.html',
            controller: 'LoginController'
        })

        //Profile
        .when('/admin/profile/me', {
            templateUrl: 'public/components/user/profile.me.view.html',
            controller: 'ProfileMeController'
        })

        //Dashboard
        .when('/admin/dashboard', {
            templateUrl: 'public/components/dashboard/dashboard.view.html'
        })

        //Disciplines
        .when('/admin/disciplines', {
            templateUrl: 'public/components/discipline/discipline.index.view.html',
            controller: 'DisciplineIndexController',
            resolve: {
                entities: function (DisciplineAPIService) {
                    return DisciplineAPIService.getAll();
                }
            }
        })
        .when('/admin/disciplines/new', {
            templateUrl: 'public/components/discipline/discipline.new.view.html',
            controller: 'DisciplineNewController'
        })
        .when('/admin/disciplines/:id/edit', {
            templateUrl: 'public/components/discipline/discipline.edit.view.html',
            controller: 'DisciplineEditController',
            resolve: {
                entity: function (DisciplineAPIService, $route) {
                    return DisciplineAPIService.getById($route.current.params.id);
                }
            }
        })
        .when('/admin/disciplines/:id', {
            templateUrl: 'public/components/discipline/discipline.detail.view.html',
            controller: 'DisciplineDetailController',
            resolve: {
                entity: function (DisciplineAPIService, $route) {
                    return DisciplineAPIService.getById($route.current.params.id);
                }
            }
        })

        //Themes
        .when('/admin/themes', {
            templateUrl: 'public/components/theme/theme.index.view.html',
            controller: 'ThemeIndexController',
            resolve: {
                entities: function (ThemeAPIService) {
                    return ThemeAPIService.getAll();
                }
            }
        })
        .when('/admin/themes/new', {
            templateUrl: 'public/components/theme/theme.new.view.html',
            controller: 'ThemeNewController'
        })
        .when('/admin/themes/:id/edit', {
            templateUrl: 'public/components/theme/theme.edit.view.html',
            controller: 'ThemeEditController',
            resolve: {
                entity: function (ThemeAPIService, $route) {
                    return ThemeAPIService.getById($route.current.params.id);
                }
            }
        })

        //Questions
        .when('/admin/questions', {
            templateUrl: 'public/components/question/question.index.view.html',
            controller: 'QuestionIndexController',
            resolve: {
                entities: function (QuestionAPIService) {
                    return QuestionAPIService.getAll();
                }
            }
        })
        .when('/admin/questions/new', {
            templateUrl: 'public/components/question/question.new.view.html',
            controller: 'QuestionNewController',
            resolve: {
                themes: function (ThemeAPIService) {
                    return ThemeAPIService.getAll();
                }
            }
        })
        .when('/admin/questions/:id/edit', {
            templateUrl: 'public/components/question/question.edit.view.html',
            controller: 'QuestionEditController',
            resolve: {
                entity: function (QuestionAPIService, $route) {
                    return QuestionAPIService.getById($route.current.params.id);
                },
                themes: function (ThemeAPIService) {
                    return ThemeAPIService.getAll();
                }
            }
        })
        .when('/admin/questions/:id', {
            templateUrl: 'public/components/question/question.detail.view.html',
            controller: 'QuestionDetailController',
            resolve: {
                entity: function (QuestionAPIService, $route) {
                    return QuestionAPIService.getById($route.current.params.id);
                }
            }
        })

        //Whatever
        .otherwise({ redirectTo: "/admin/dashboard" });

    $locationProvider.html5Mode(true);

});
