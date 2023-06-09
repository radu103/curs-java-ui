let carsForTable = [];
let carsDataTable = null;

function _convertToTableData(car) {
    let carForTable = [];

    carForTable.push(car.id);
    carForTable.push(car.maker);
    carForTable.push(car.model);
    carForTable.push(car.year);
    carForTable.push(car.color);
    carForTable.push(car.price + " " + car.currency);

    return carForTable;
}

function _createTable(carsForTable) {
    carsDataTable = $('#carsTable').DataTable({
        data: carsForTable,
        columns: [
            { title: "ID", className: 'dt-center', targets: 1 },
            { title: "Maker", className: 'dt-center', targets: 1 },
            { title: "Model", className: 'dt-center', targets: 1 },
            { title: "Year", className: 'dt-center', targets: 1 },
            { title: "Color", className: 'dt-center', targets: 1 },
            { title: "Price", className: 'dt-right', targets: 1 }
        ]
    });
}

function _loadTableData() {
    $.getJSON("http://localhost:8080/v2/car/list", function (data) {

        carsForTable = [];
        for (const car of data) {
            carsForTable.push(_convertToTableData(car));
        }

        if (carsDataTable === null) {
            _createTable(carsForTable);
        }
        else {
            carsDataTable.destroy();
            _createTable(carsForTable);
        }
    });
}

$(document).ready(function () {
    _loadTableData();
});

$('#createCarBtn').click(function () {
    let car = {
        maker: document.getElementById("makerInput").value,
        model: document.getElementById("modelInput").value,
        year: document.getElementById("yearInput").value,
        color: document.getElementById("colorInput").value,
        price: document.getElementById("priceInput").value,
        currency: document.getElementById("currencyInput").value
    };

    $.ajax({
        url: "http://localhost:8080/v2/car/add",
        type: "POST",
        data: JSON.stringify(car),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            alert("Car created!");
            _loadTableData();
        },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
        }
    });

});

$('#updateCarBtn').click(function () {
    let car = {
        id: document.getElementById("idInput1").value,
        maker: document.getElementById("makerInput1").value,
        model: document.getElementById("modelInput1").value,
        year: document.getElementById("yearInput1").value,
        color: document.getElementById("colorInput1").value,
        price : {
            price : document.getElementById("priceInput1").value,
            currency: document.getElementById("currencyInput1").value
        }
    };

    $.ajax({
        url: "http://localhost:8080/v2/car/update/" + car.id,
        type: "POST",
        data: JSON.stringify(car),
        contentType: "application/json",
        success: function (data) {
            alert("Car updated!");
            _loadTableData();
        },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
        }
    });
});

function validateCurrency() {
    if(this.value.length !== 3){
        this.style.borderColor = "red";
    }
    else{
        this.style.borderColor = "green";
    }
}

$("#currencyInput").on("change", validateCurrency);
$("#currencyInput1").on("change", validateCurrency);