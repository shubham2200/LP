// tooltips js
$(function () {
    $("[data-bs-tooltip='tooltip']").tooltip({ trigger: "hover" });
});
// ********notification js*********

$(document).on("focus", ".popover", function () {
    $(this).popover("hide");
});
$(function () {
    $('[data-bs-toggle="noti"]').popover({
        title: '<div class="d-flex align-items-center justify-content-start"><h6 class="custom-title m-0">Notifications</h6></div> ',
        content:
            '<div class="alert_list"><p class="date_message m-0 mb-1">Today</p><ul class="unstyled p-0"><li data-alert_id="1"class="alert_li border-top"><a href="#" class="d-flex"><img width="40" height="40" src="/static/images/user.png" alt="user" class="user_img_nav me-2"><div class="message_text"><h6 class="message_head">Lorem Dolor</h6><p class="m-0 message_dec mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ea amet.</p><p class="recived_time m-0">2 min ago</p></div></a></li></ul></div>',
        html: true,
    });
});
// $('#eyes').on('click', function(){
//     $('[data-bs-toggle="info"]').popover({
//         title: '<div class="d-flex align-items-center justify-content-start"><h6 class="custom-title m-0">Amit</h6></div> ',
//         content:
//             '<div class="alert_list px-2">some inforrmation in this paragraph related to user.</div>',
//         html: true,
//         trigger: "hover",
//     });
//     // });

// })
var name_data =[]
for (let i = 0; i < 100; i++) {
    $(`#eyes${i}`).on('mouseover', function(){
        console.log('dvsdvsd')
        name_data = $(`#eyes${i}`).attr('n_id')
        console.log(name_data);
        // console.log(newdata)
    })
    // var newdata =$('[data-bs-toggle="info"]').popover({
    //     title: `<div class="d-flex align-items-center justify-content-start"><h6 class="custom-title m-0"> ${name_data}</h6></div> `,
    //     content:
    //         '<div class="alert_list px-2">some inforrmation in this paragraph related to user.</div>',
    //     html: true,
    //     trigger: "hover",
    // });
    
    
}
$(function() {
    $('[data-bs-toggle="info"]').popover({
        title: `<div class="d-flex align-items-center justify-content-start"><h6 class="custom-title m-0"> ${name_data}</h6></div> `,
        content:
            '<div class="alert_list px-2">some inforrmation in this paragraph related to user.</div>',
        html: true,
        trigger: "hover",
    });
})


//
$(function () {
    $(".dataTables_wrapper .dataTables_filter label input").attr("placeholder", "Search");
});

// // html to pdf converter

function getPDF() {
    $("#nav_tab_btns").hide();
    kendo.drawing
        .drawDOM("#Template", {
            forcePageBreak: ".page-break",
            paperSize: "A4",
            margin: { top: "1cm", bottom: "1cm" },
            scale: 0.5,
            height: 600,
            width: 1200,
            template: $("#page-template").html(),
            keepTogether: ".prevent-split",
        })
        .then(function (group) {
            kendo.drawing.pdf.saveAs(group, "report.pdf");
        });
    $("#nav_tab_btns").show();
}

// window.onload = function () {
//     document.getElementById("loading").style.display = "none";
// };
