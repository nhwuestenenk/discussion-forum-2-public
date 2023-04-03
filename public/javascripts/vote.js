$(document).ready(function () {
  let pageNr = Number(document.getElementById("getPageNr").innerHTML); // <--- Kon even geen andere manier bedenken om de pageNr mee te nemen
  $('.vote-up-post').submit(function (e) {
    e.preventDefault();
    const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

    var postId = $(this).data('id');
    $.ajax({
      type: 'PUT',
      url: '/posts/' + postId + '/vote-up-post',
      headers: {'CSRF-Token': csrfToken},
      data: {pageNr: pageNr},
      success: function () {
        location.reload();
      },
    });
  });

  $('.vote-down-post').submit(function (e) {
    e.preventDefault();
    const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

    var postId = $(this).data('id');
    $.ajax({
      type: 'PUT',
      url: '/posts/' + postId + '/vote-down-post',
      headers: {'CSRF-Token': csrfToken},
      data: {pageNr: pageNr},
      success: function () {
        location.reload();
      },
    });
  });

  $('.vote-up-comment').submit(function (e) {
    e.preventDefault();
    var commentId = $(this).data('id');
    const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

    $.ajax({
      type: 'PUT',
      url: '/posts/' + commentId + '/vote-up-comment',
      headers: {'CSRF-Token': csrfToken},
      data: {pageNr: pageNr},
      success: function () {
        location.reload();
      },
    });
  });

  $('.vote-down-comment').submit(function (e) {
    e.preventDefault();
    var commentId = $(this).data('id');
    const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

    $.ajax({
      type: 'PUT',
      url: '/posts/' + commentId + '/vote-down-comment',
      headers: {'CSRF-Token': csrfToken},
      data: {pageNr: pageNr},
      success: function () {
        location.reload();
      },
    });
  });
});
