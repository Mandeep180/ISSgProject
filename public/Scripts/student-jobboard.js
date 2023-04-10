$('.jobcard').on('click', function () {
  $('.job-detail').addClass('active');
  $('.mainContent').addClass('inactive');
});

$('.close-detail').on('click', function () {
  $('.job-detail').removeClass('active');
  $('.mainContent').removeClass('inactive');
});

var elements = document.getElementsByClassName('jobcard');

for (var i = 0; i < elements.length; i++) {
  (function () {
    var id = elements[i].getAttribute('id');
    elements[i].addEventListener('click', function () {
      location.search = `?id=${id}`;
      //location.reload(true);
    });
  })();
}
