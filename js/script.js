let carsForTable = [];
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
            
        let carsDataTable = null;
        function _createTable(carsForTable) {
            carsDataTable = $('#carsTable').DataTable({
                data: carsForTable,
                columns: [
                { title: "Id", className: 'dt-center', targets: 1 },
                { title: "Maker", className: 'dt-center', targets: 1 },
                { title: "Model", className: 'dt-center', targets: 1 },
                { title: "Year", className: 'dt-center', targets: 1 },
                { title: "Color", className: 'dt-center', targets: 1 },
                { title: "Price", className: 'dt-right', targets: 1 }
            ]
        });
        }
            
        function _loadTableData() {
            $.getJSON("http://localhost:8080/v4/car/list", function (data) {
        
            for (const car of data) {
                carsForTable.push(_convertToTableData(car));
            }
            
            if (carsDataTable === null) {
                _createTable(carsForTable);
            }
            else {
                carsDataTable.data(carsForTable);
                carsDataTable.ajax.reload();
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
                currency: document.getElementById("currencyInput").value,
                consumption: document.getElementById("consumptionInput").value,
                isManual: document.getElementById("isManualInput").value
            };
            
            $.ajax({
                url: "http://localhost:8080/v4/car/add",
                type: "POST",
                data: JSON.stringify(car),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    _loadTableData();
                    alert("Car created!");
                },
                error: function (xhr, status, error) {
                    alert(xhr.responseText);
                }
            });
            
        })