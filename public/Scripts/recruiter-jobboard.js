$('.jobcard').on('click', function () {
  $('.job-detail').addClass('active');
  $('.mainContent').addClass('inactive');
});

$('.close-detail').on('click', function () {
  $('.job-detail').removeClass('active');
  $('.mainContent').removeClass('inactive');
});
