var msPerMinute = 60 * 1000;
var msPerHour = msPerMinute * 60;
var msPerDay = msPerHour * 24;
var msPerMonth = msPerDay * 30;
var msPerYear = msPerDay * 365;

function timestamp(current, post) {
  let dateDiff = current-post;
  
  if (dateDiff < msPerMinute) {
    return 'Zojuist';   
  }
  else if (dateDiff < msPerHour) {
    let minutes = Math.round(dateDiff/msPerMinute)
    return `${minutes} ${minutes == 1 ? "minuut" : "minuten"} geleden`;   
  }
  else if (dateDiff < msPerDay ) {
    let hours = Math.round(dateDiff/msPerHour)
    return `${hours} ${hours == 1 ? "uur" : "uren"} geleden`;   
  }
  else if (dateDiff < msPerMonth) {
    let days = Math.round(dateDiff/msPerDay)
    return `${days} ${days == 1 ? "dag" : "dagen"} geleden`;   
  }
  else if (dateDiff < msPerYear) {
    let months = Math.round(dateDiff/msPerMonth)
    return `${months} ${months == 1 ? "maand" : "maanden"} geleden`;    
  }
  else {
    let years =  Math.round(dateDiff/msPerYear)
    return `${years} ${years == 1 ? "jaar" : "jaren"} geleden`;    
  }
}

function timeAgoPost(dateUser, minutesAgo) {
  let currentDate = new Date();
  let dateAdminPost = new Date(dateUser);
  dateAdminPost.setMinutes(dateUser.getMinutes()-minutesAgo); // Change timestamp relative to time user was created
  return timestamp(currentDate, dateAdminPost);
}                 

function timeAgoComment(datePost, dateUser, commentId, authorId, minutesAgo) {
  let currentDate = new Date();
  // If the comment is from an admin user
  if (commentId != authorId) {
    let dateAdminPost = new Date(dateUser);
    dateAdminPost.setMinutes(dateUser.getMinutes()-minutesAgo); // Change timestamp relative to time user was created
    return timestamp(currentDate, dateAdminPost)
  } else {
    return timestamp(currentDate, datePost)
  }
}
                  
module.exports = {
  timeAgoPost: timeAgoPost,
  timeAgoComment: timeAgoComment
}