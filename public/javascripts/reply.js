$(document).ready(function () {
  let pageNr = Number(document.getElementById("getPageNr").innerHTML); // <--- Kon even geen andere manier bedenken om de pageNr mee te nemen

  $('.reply').click(function (e) {
    e.preventDefault();
    var parentId = $(this).data('id');
    var replyForm = document.getElementById(`replyForm-${parentId}`);

    if (replyForm.classList.contains('show')) {
      replyForm.classList.remove('show');
    } else {
      replyForm.classList.add('show');
    }
  });

  $('.replyForm').submit(function (e) {
    e.preventDefault();
    var postId = $(this).data('id').split(',')[0];
    var parentId = $(this).data('id').split(',')[1];
    const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

    // Do not submit reply if it has no text
    if ($(`#text-${parentId}`).val().trim() != "") {
      let data = {
        text: $(`#text-${parentId}`).val(),
        pageNr: pageNr,
      };

      $.ajax({
        url: `${postId}/comments/${parentId}/replies`,
        type: 'POST',
        headers: {'CSRF-Token': csrfToken},
        data: data,
        success: function () {
          location.reload();
        },
      });
    }
  });

  $('.commentForm').submit(function (e) {
    e.preventDefault();
    var postId = $(this).data('id');
    const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

    // Do not submit comment if it has no text
    if ($('#commentFormText').val().trim() != "") {
      let data = {
        text: $('#commentFormText').val(),
        pageNr: pageNr,
      };

      $.ajax({
        url: `${postId}/comments`,
        type: 'POST',
        headers: {'CSRF-Token': csrfToken},
        data: data,
        success: function () {
          console.log('We posted a comment');
          location.reload();
        },
      });
    }
  });
});
