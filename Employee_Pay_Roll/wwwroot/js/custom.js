$(document).ready(function () {
    ShowEmployees();
});


function ShowEmployees() {
    debugger
    $.ajax({
        url: '/Ajax/GetAllEmployees',
        type: 'Get',
        dataType: 'Json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.employeeId + '</td>'
                object += '<td>' + item.employeeName + '</td>'
                object += '<td>' + item.employeeAge + '</td>'
                object += '<td>' + item.address + '</td>'
                object += '<td>' + item.city + '</td>'
                object += '<td>' + item.phoneNumber + '</td>'
                object += '<td>' + item.designation + '</td>'
                object += '<td>' + item.salary + '</td>'
                object += '<td><a href="#" class="btn btn-primary">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete(' + item.employeeId +')">Delete </a> </td>'
                object += '</tr>';
            });
            $('#table_data').html(object);
        },
        error: function () {
            alert("data can't get");
        }

    });
};


$('#btnAddEmployee').click(function () {
    $('#EmployeeModal').modal('show');
})


function AddEmployee() {
    debugger
    var objData = {
        employeeName:$('#EmployeeName').val(),
        employeeAge:$('#EmployeeAge').val(),
        address:$('#Address').val(),
        city:$('#City').val(),
        phoneNumber:$('#PhoneNumber').val(),
        designation:$('#Designation').val(),
        salary:$('#Salary').val()
    }
     $.ajax({
         url: '/Ajax/AddEmployee/',
        type: 'Post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        success: function () {
            alert('Data Saved');
            ShowEmployees();
            HideModalPopUp();
            ClearTextBox();
        },
        error: function () {
            alert('Data has not been saved');
        }
     });

    function HideModalPopUp() {
        $('#EmployeeModal').modal('hide');
    }

    function ClearTextBox() {
           $('#EmployeeName').val(''),
           $('#EmployeeAge').val(''),
           $('#Address').val(''),
           $('#City').val(''),
           $('#PhoneNumber').val(''),
           $('#Designation').val(''),
           $('#Salary').val('')
    }
}



function Delete(employeeId) {
    debugger
    if (confirm('Are you sure, you want to delte this record')) {
        $.ajax({
            url: '/Ajax/Delete?employeeId=' + employeeId,
            success: function () {
                alert('Record deleted');
                ShowEmployees();
            },
            error: function () {
                alert('Record cannot be deleted');
            }
        })
    }
}