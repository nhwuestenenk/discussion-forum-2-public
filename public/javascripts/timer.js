$(document).ready(function() {
    var start = new Date();

    let prevClick = false;
    let nextClick = false;

    let pageNr = Number(document.getElementById("getPageNr").innerHTML); // <--- Kon even geen andere manier bedenken om de pageNr mee te nemen

    $("#prevNav").click(function(e) {       
        e.preventDefault();
        const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

        prevClick = true;
        var end = new Date()
        let diff = Number(end - start)

        let previousPage = $(this).attr("data-id");

        $.ajax({
            type: "POST",
            async: true,
            url: "/posts/time",
            headers: {'CSRF-Token': csrfToken},
            data: {pageNr: pageNr,
                   diff: diff},
            success: function () {
                document.location.href = `/posts/${previousPage}`
            },
            error: function () {
                alert("Neem ten minste 30 seconden de tijd om elke discussie te lezen.");
                location.reload();
            }
        }); 
    });
    
    $("#nextNav").click(function(e) {   
        e.preventDefault();
        const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');

        nextClick = true;
        var end = new Date()
        let diff = Number(end - start)

        let nextPage = $(this).attr("data-id");
        let qualtricsId = $(this).attr("data-qualtrics-id");
        console.log(qualtricsId);
    
        $.ajax({
            type: "POST",
            async: true,
            url: "/posts/time",
            headers: {'CSRF-Token': csrfToken},
            data: {pageNr: pageNr,
                   diff: diff},
            success: function () {
                if (pageNr != 1) {
                    document.location.href = `/posts/${nextPage}`
                } else {
                    document.location.href = `/posts/instruction-end`
                }
            },
            error: function () {
                alert("Neem ten minste 30 seconden de tijd om elke discussie te lezen.");
                location.reload();
            }
        });
    });

    $(window).on("beforeunload", function() {
        const csrfToken = document.querySelector('meta[name="csrfToken"]').getAttribute('content');
        if (prevClick == false && nextClick == false) {

            var end = new Date();
            let diff = Number(end - start);

            $.ajax({
                type: "POST",
                async: true,
                url: "/posts/time",
                headers: {'CSRF-Token': csrfToken},
                data: {diff: diff,
                       pageNr: pageNr}
            })
        }
    })
});
