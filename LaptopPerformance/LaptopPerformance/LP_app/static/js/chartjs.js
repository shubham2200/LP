// *********line chart datewise consumption*******

var trace1 = {
    type: "scatter",
    x: [
        "2021-02-02",
        "2021-02-03",
        "2021-02-04",
        "2021-02-05",
        "2021-02-06",
        "2021-02-07",
        "2021-02-08",
    ],
    y: [0, 59, 75, 20, 20, 55, 40, 15, 60, 60, 65],
    line: {
        color: "#FF5959",
        width: 2,
    },
    name: "Average CPU",
};

var trace2 = {
    type: "scatter",
    x: [
        "2021-02-02",
        "2021-02-03",
        "2021-02-04",
        "2021-02-05",
        "2021-02-06",
        "2021-02-07",
        "2021-02-08",
    ],
    y: [20, 15, 60, 60, 65, 30, 70, 15, 60, 60, 65],
    line: {
        color: "#2e55e1",
        width: 2,
    },
    name: "Average Memory",
};

var trace3 = {
    type: "scatter",
    x: [
        "2021-02-02",
        "2021-02-03",
        "2021-02-04",
        "2021-02-05",
        "2021-02-06",
        "2021-02-07",
        "2021-02-08",
    ],
    y: [
        240, 50, 400, 400, 305, 200, 100, 15, 60, 60, 65, 30, 70, 15, 60, 60, 65, 30, 70, 15, 60,
        60, 65, 30, 70,
    ],

    type: "scatter",
    line: {
        color: "#febe00",
        width: 2,
    },
    name: "Average Disk",
};

var data = [trace1, trace2, trace3];

var layout = {
    // title: "Custom Range",
    xaxis: {
        range: ["2021/02/02", "2021/02/07"],
        type: "date",
        title: "Date",
        side: "bottom",
    },
    yaxis: {
        title: "Memory Size (in MB)",
        side: "left",
    },
    margin: {
        l: 50,
        r: 40,
        t: 25,
        b: 35,
    },
};

Plotly.newPlot("datewise_chart", data, layout);

let options = {
    startAngle: -1.55,
    size: 100,
    value: 0.6,
    fill: { gradient: ["#0C4979"] },
};
$(".circle .bar")
    .circleProgress(options)
    .on("circle-animation-progress", function (event, progress, stepValue) {
        if (stepValue == 1.0) {
            textValue = 100;
        } else {
            textValue = String(stepValue.toFixed(2).substr(2));
        }

        $(this)
            .parent()
            .find("span")
            .text(textValue + "%");
    });
$(".Arg-M .bar").circleProgress({
    value: 1.0,
});
$(".Arg-D .bar").circleProgress({
    value: 0.54,
});

console.log('ahsbcjadc')
let input = $("#hhd").val;
if (input == ''){
    console.log(input);
    input.remove()

}

// $('#genrate').on('click', function(){
//     console.log('asscscsdc')
//     let add_load=`<div  class="main_outer_container d-flex justify-content-start w-100 robo" id="loader">
//     <div id="loading">
//         <img src={% static 'images/loader.gif' %}>
//     </div>
//     <!-- sideBar left -->
  
//     <!-- right Main Conatiner -->
//     <div class="right_outer_box">
       
//         <div class="px-3 py-1">
          
//         </div>
//     </div>
// </div>`
  
// })