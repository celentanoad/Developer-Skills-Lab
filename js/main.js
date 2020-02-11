$("#add").on("click", function() {
    let $newSkill = $("#input").val();
    let entry = `
        <tr>
            <td><button id="remove">X</button>  ${$newSkill}</td>
        <tr>
    `
    $("tbody").append(entry);
});

$("table tbody").on("click", "button", function() {
        $(this).closest("td").fadeOut(250, function() {
            $(this).remove();
        });
});