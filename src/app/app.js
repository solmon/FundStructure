angular.module( 'FundStructure', [
  'templates-app',
  'templates-common',
  'FundStructure.home',
  'FundStructure.about',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | FundStructure' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

