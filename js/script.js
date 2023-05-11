let carsForTable = [];

function convertToTableData(car) {
    let carForTable = [];

    carForTable.push(car.maker);
    carForTable.push(car.model);
    carForTable.push(car.year);
    carForTable.push(car.color);
    carForTable.push(car.price.price + " " + car.price.currency);

    return carForTable;
}

$(document).ready(function() {

    $.getJSON("http://localhost:8080/v3/car/list", function(data) {
    
        for(const car of data) {
            carsForTable.push(convertToTableData(car));
        }

        $('#carsTable').DataTable({
            data : carsForTable,
            columns : [
                { title: "Maker", className:'dt-center', targets: 1 },
                { title: "Model", className:'dt-center', targets: 1 },
                { title: "Year", className:'dt-center', targets: 1 },
                { title: "Color", className:'dt-center', targets: 1 },
                { title: "Price", className:'dt-right', targets: 1 }
            ]
        });
    });
});