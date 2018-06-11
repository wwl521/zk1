$(function() {
    $.ajax({
        url: '/api/data',
        success: function(data) {
            show(JSON.parse(data));
        },
        error: function(error) {
            console.warn(error);
        }
    });

    function show(data) {
        var str = '';
        data.forEach(function(file) {
            console.log(file.con)
            str += `<div class="box1">${file.con}</div>`;
        });
        var con = document.getElementsByClassName('con')[0];
        con.innerHTML = str;
    }
})