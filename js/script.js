let carsTable = null;
let cars = [];

$(document).ready(function(){
    $.getJSON('http://localhost/v1/car/list', function(data) {
        cars = data;
        carsTable = new DataTable('#carsTable');
        carsTable.data()
    })
});

