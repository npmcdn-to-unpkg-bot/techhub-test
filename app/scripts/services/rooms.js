'user strict';

angular.module('techhubApp').service('rooms',function(){

    this.getRooms = function(){
        var promise;
        var client = contentful.createClient({
          space: 'a87ovfhrfgt0',
          accessToken: 'ae40d50dd4ea667e6e0d185395a4f58ae6f514383513ff2e368bffba7591022b'
        });

        return client.getEntries({
          'content_type': 'meetingRoom'
      });
    }
});
