let carsTable=null;
let cars=[];


$(document).ready(function() {

    $.getJSON('http://localhost:8080/v1/car/list',function(data){
        cars=data;
        carsTable=new DataTable('#carsTable');
    });

    $('#carsTable').DataTable({
        ajax: 'http://localhost:8080/v1/car/list'
    })

    
});