document.addEventListener("DOMContentLoaded", function () {
    var modeSwitch = document.querySelector(".mode-switch");
  
    modeSwitch.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
      modeSwitch.classList.toggle("active");
    });
  
    var listView = document.querySelector(".list-view");
    var gridView = document.querySelector(".grid-view");
    var projectsList = document.querySelector(".project-boxes");
  
    listView.addEventListener("click", function () {
      gridView.classList.remove("active");
      listView.classList.add("active");
      projectsList.classList.remove("jsGridView");
      projectsList.classList.add("jsListView");
    });
  
    gridView.addEventListener("click", function () {
      gridView.classList.add("active");
      listView.classList.remove("active");
      projectsList.classList.remove("jsListView");
      projectsList.classList.add("jsGridView");
    });
  
    document
      .querySelector(".messages-btn")
      .addEventListener("click", function () {
        document.querySelector(".messages-section").classList.add("show");
      });
  
    document
      .querySelector(".messages-close")
      .addEventListener("click", function () {
        document.querySelector(".messages-section").classList.remove("show");
      });
  });

//current date 
//document.getElementById("date").innerHTML = new Date().toString();
year = new Date().getFullYear();
day = new Date().getDate();

if (day < 10)
{
  day = '0'+ day;
}
let month;
switch (new Date().getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "Feburary";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
}

document.getElementById("date").innerHTML = month + " " + day + " , " + year;