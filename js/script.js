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

    $.getJSON("http://localhost:8080/v1/car/list", function(data) {
    
        for(const car of data) {
            carsForTable.push(convertToTableData(car));
        }

        $('#carsTable').DataTable({
            data : carsForTable,
            colReorder: true,
            columns : [
                { title: "Maker" },
                { title: "Model" },
                { title: "Year" },
                { title: "Color" },
                { title: "Price" }
            ],
            columnDefs: [
                { target: [0,1,2,3],
                    className: "dt-center"
                },
                { target: 4,
                    className: "dt-right"
                }
        ]
        });
    });
});