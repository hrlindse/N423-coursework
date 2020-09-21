var students = {};

function addListener() {
  $("nav a ").click(function (e) {
    e.preventDefault();
    var btnID = this.id;
    getStudentData();
  });
}

function getStudentData() {
  $.getJSON("../data/data.json", function (data) {
    //students = data.students;
    parseStudents(data.students);
    // addListener();
  });
}

function parseStudents(studentsArray) {
  $.each(data.students, function (idx, value) {
    $(".content").append(`<p>${value.name} ${value.grade}</p>`);
    $.each(value.classes, function (idx2, value2) {
      $(".content").append(`<p>${value2.className}</p>`);
    });
  });
}

$(document).ready(function () {
  getStudentData();
  addListener();
});
