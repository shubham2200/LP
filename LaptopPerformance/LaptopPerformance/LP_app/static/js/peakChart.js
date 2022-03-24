// ********line chart Peak Detection********
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

var data1 = [trace1, trace2, trace3];

var layout1 = {
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

Plotly.newPlot("peak_detection_chart", data1, layout1);
