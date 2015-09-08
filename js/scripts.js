var triangle = function(side1, side2, side3) {
  if ((side1 + side2 < side3) || (side1 + side3 < side2) || (side3 + side2 < side1)) {
    return false;
  } else if ((side1 === side2) && (side3 === side2) && (side1 === side3)) {
    return true;
  } else if ((side1 === side2) || (side3 === side2) || (side1 === side3)) {
    return true;
  }
};
