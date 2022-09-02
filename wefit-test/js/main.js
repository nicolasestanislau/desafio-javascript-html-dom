var cardList = [];
var bodyFilter = document.getElementsByClassName("card");
for (i = 0; i < bodyFilter.length; i++) {
  cardList.push(bodyFilter[i]);
}
cardList.map((element, index) => {
  if (index == 1) {
    let button = jQuery(element).find(".btn");
    jQuery(button).attr("class", "btn btn-success");
  }
});

let menu = document.getElementsByClassName("btn-group-vertical");
jQuery(menu).attr("class", "btn-group-horizontal");

let header = document.getElementsByClassName("jumbotron");
jQuery(header).css({
  "background-color": "#6c757d",
  "display": "flex",
  "flex-direction": "column",
  "align-items": "end",
});
jQuery(header).find("h1").css("color", "#fff");
jQuery(header).find(".my-4").css("width", "100%");
jQuery(header).find("p").css("color", "#fff");
jQuery(header).find("a").addClass("btn-success");

let list =  document.getElementsByClassName("list-group");
jQuery(list[0].children[0]).removeClass("active")

jQuery(list).append('<li class="list-group-item active">Quarto item</li>')
jQuery(list).append('<li class="list-group-item">Quinto item</li>')
