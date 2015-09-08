var triangle = function(side1, side2, side3) {
  if ((side1 + side2 < side3) || (side1 + side3 < side2) || (side3 + side2 < side1)) {
    return false;
  } else if ((side1 === side2) && (side3 === side2) && (side1 === side3)) {
    return "equilateral";
  } else if ((side1 === side2) || (side3 === side2) || (side1 === side3)) {
    return "isosceles";
  } else if ((side1 !== side2) && (side3 !== side2) && (side1 !== side3)) {
    return "scalene";
  }
};

$(document).ready(function(){
  $("form#triangle").submit(function(event){
    $(".not").hide();
    $(".triangle").hide();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle(side1, side2, side3);

    if (!result) {
      $(".not").text("not")
      $(".not").show();
    } else {
      $(".triangle").text(result)
      $(".triangle").show();
    }

    $("#result").show();
    event.preventDefault();

  })
})
