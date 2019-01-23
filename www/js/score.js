function insertScore() {
    var bodyTable = $(".score").find("tbody");
    var user = "Marcos";
    var numWords = $("#count-words").text();

    var line = newLine(user, numWords);
    line.find(".button-remove").click(removeLine);

    bodyTable.prepend(line);
}

function removeLine (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function newLine(user, numWords){

    var line = $("<tr>");

    var columnUser   = $("<td>").text(user);
    var columnWords  = $("<td>").text(numWords);
    var columnRemove = $("<td>");

    var link = $("<a>").attr("href","#").addClass("button-remove");
    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icon);

    columnRemove.append(link);

    line.append(columnUser);
    line.append(columnWords);
    line.append(columnRemove);

    return line;
}
