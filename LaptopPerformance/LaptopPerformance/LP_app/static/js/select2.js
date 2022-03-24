$(document).ready(function () {
  $("#summary_date").select2({
    placeholder: {
      id: "", // the value of the option
      text: "Filter by",
    },
    minimumResultsForSearch: -1,
  });
});

$("#data_recived").DataTable({
  // "searching": false,
  scrollY: "230px",
  scrollCollapse: true,
  bFilter: false,
  bInfo: false,
  ordering: false,
  pageLength: 10,
  paging: false,
  columns: [{ width: "25%" }, { width: "50%" }, { width: "25%" }],
});
$("#data_not_recived").DataTable({
  // "searching": false,
  scrollY: "230px",
  scrollCollapse: true,
  bFilter: false,
  bInfo: false,
  ordering: false,
  paging: false,
  pageLength: 10,
  columns: [
    { width: "20%" },
    { width: "45%" },
    { width: "20%" },
    { width: "15%" },
  ],
});

// system page
$(document).ready(function () {
  $("#system_filter").select2({
    placeholder: {
      id: "",
      text: "",
    },
    minimumResultsForSearch: -1,
  });
});
$("#system_table").DataTable({
  // "searching": false,
  // "bFilter": false,
  bInfo: false,
  ordering: false,
  // "paging": false,
  pageLength: 10,
  columns: [
    { width: "10%" },
    { width: "25%" },
    { width: "15%" },
    { width: "15%" },
    { width: "25%" },
    { width: "10%" },
  ],
});

// generate report

$(document).ready(function () {
  $("#genrate_date").select2({
    placeholder: {
      id: "",
      text: "Filter by Days",
    },
    minimumResultsForSearch: -1,
  });
});

// p2p comparision

$(document).ready(function () {
  $("#system_selector1").select2({
    placeholder: {
      id: "",
      text: "SYSTEM 1",
    },
    minimumResultsForSearch: -1,
  });
});
$(document).ready(function () {
  $("#system_selector2").select2({
    placeholder: {
      id: "",
      text: "SYSTEM 2",
    },
    minimumResultsForSearch: -1,
  });
});

// peak detection
$(document).ready(function () {
  $("#system_peak_selector").select2({
    placeholder: {
      id: "",
      text: "SYSTEM",
    },
    minimumResultsForSearch: -1,
  });
});

$('#loading').remove()

$('#Template').hide()

$("#genrate").on("click", function (e) {

       let load_div = ` 
       <div id="loading">
       <img src='/static/images/loader.gif' id='load_loder'>
      </div>
   `
   $('#loader').append(load_div)
    // $('#loading').show()
    
    $.ajax({
        method: 'GET',
        url: '/generate_loader/',
        beforeSend: function() {
            // setting a timeout
            $('#loading').show(0);

  
         
        },
        success:function (data) {
          console.log(data.status,'respones on the data ');
          if (data.status == 0){
            $('#loading').remove();
            $('#Template').show(); 

          }
          else{
            $('#loading').remove();

            console.log('no data response on backend')
          }

        }

    })
    
    // $('body').html(`
    // <div  class="main_outer_container d-flex justify-content-start w-100 robo" id="loader">
    // <div id="loading">
    // <img src="images/loader.gif" alt="" />
    // </div>
    // </div>
    // `);
    // $('#Template').show();
});
