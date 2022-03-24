// *****homepage charts******
// home donut chart first
function ajax_get_request(address, req_data, callback, dtype = 'json') {

    var response_data = ''
    // Using the core $.ajax() method
    $.ajax({

        // The URL for the request
        url:address,

        // The data to send (will be converted to a query string)
        data: req_data,

        // Whether this is a POST or GET request
        type: "GET",

        // The type of data we expect back
        dataType: dtype,
        success: function(data){
            // console.log(data.no_of_data_received)
            // console.log("data is that" , data)
          
        }
    })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
        .done(function (json) {
            return callback(null, json);
        })

}


function makeChart() {
    let no_of_data_received, no_of_data_not_received, no_of_system_connect_with_server, System_not_Connected_to_server
    ajax_get_request('get_graph_data', {}, function (err, result) {
        console.log(result , 'yessjhdscjadcj ');
        // let da_on = 23 
    if (!err) {
        if (result.status == 'ok') {
            no_of_data_received = result.no_of_data_received;
            no_of_data_not_received = result.no_of_data_not_received;
            no_of_system_connect_with_server = result.no_of_system_connect_with_server
            System_not_Connected_to_server = result.System_not_Connected_to_server
            console.log(no_of_data_received ,'jhABSCHJABSCHJBSCHBDJHCSD')
            
            let label1_1 = "data received"
            let label1_2 = "data not received"

            let label2_1 = "System connected"
            let label2_2 = "System not connected"
            
    var config = {
        type: "doughnut",
        data: {
            labels: [
                label1_1,
                label1_2,
                
            ],
            datasets: [
                {
                    label: 'data received vs data not received',
                    data: [no_of_data_received, no_of_data_not_received],
                    backgroundColor: ["#0C4979", "#39D5D5"],
                    borderColor: ["#0C4979", "#39D5D5"],
                    hoverBorderColor: ["#fff", "#fff"],
                    borderWidth: 2,
                },
            ],
        },
        options: {
            cutout: 40,
            responsive: true,
            legend:{
                display: false
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    bodyFont: {
                        size: 8,
                        wordBreak: 'break'
                    },
                },
            },
            layout: {
                padding: {
                    left: 0,
                    right: 50,
                    top: 0,
                    bottom: 0,
                },
            },
        },
    };

    // 2nd donut chart home
    var config1 = {
        type: "doughnut",
        data: {
            labels: [
                label2_1,
                label2_2,


            ],
            datasets: [
                {
                    label: 'System connected vs System not connected',
                    data: [no_of_system_connect_with_server, System_not_Connected_to_server],
                    backgroundColor: ["#0C4979", "#39D5D5"],
                    borderColor: ["#0C4979", "#39D5D5"],
                    hoverBorderColor: ["#fff", "#fff"],
                    borderWidth: 2,
                },
            ],
        },
        options: {
            cutout: 40,
            responsive: true,
            legend: {
                display: false
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    bodyFont: {
                        size: 8,
                        wordBreak: 'break'
                    },
                },
            },
            layout: {
                padding: {
                    left: 0,
                    right: 50,
                    top: 0,
                    bottom: 0,
                },
            },
        },
    };



//   Data Summary default 7 days
    $('#dta_rcv').html(`
    <i
        class="ri-checkbox-blank-fill me-2 fs-5"
        style="color: var(--card_bg1)"
    ></i
    >${no_of_data_received} data received`
)

$('#dta_nt_rcve').html(
    `<i
        class="ri-checkbox-blank-fill me-2 fs-5"
        style="color: var(--card_bg2)"
        ></i
    >${no_of_data_not_received} data not received`
)

// Server Summary default 7 days
$('#sys_conct').html(
    `<i
                    class="ri-checkbox-blank-fill me-2 fs-5"
                    style="color: var(--card_bg1)"
                ></i
                >${no_of_system_connect_with_server} System Connected to server`
)

$('#sys_not_conct').html(
    `<i
                    class="ri-checkbox-blank-fill me-2 fs-5"
                    style="color: var(--card_bg2)"
                ></i
                >${System_not_Connected_to_server} System not Connected to server`
)









    var ctx = document.getElementById("data_summary").getContext("2d");
    const myPie = new Chart(ctx, config);
    var ctx1 = document.getElementById("server_summary").getContext("2d");
    const myPie2 = new Chart(ctx1, config1);
    }
        }

    },dtype = 'json')
};

makeChart ()

