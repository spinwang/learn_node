angular.module('TSApp',[])
    .service('TSService',['$http',function($http){
        console.log('ng loading..');

        this.driver = {};
        this.getDriver = function(){
            console.log('here');
        }
    }])
    .controller('TSController',['$http','TSService',function($http,TSService){
        var self = this;

        $http.get('http://localhost:3000/drivers/MassBalancer').then(function(response){
            console.log('data is',response);
            console.log('driver id is', response.data.driverId);
            console.log(JSON.stringify(response.data.ui[0]));
            self.driver = JSON.stringify(response.data.ui[0]).type;
            //angular.copy(data,self.driver);
        });

        $http.get('http://localhost:3000/drivers/MassBalancer').success(function(data){
            data = JSON.stringify(data);
            console.log('data is',data);
        });


        TSService.driver = self.driver;
    }]);