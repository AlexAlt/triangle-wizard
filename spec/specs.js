describe('triangle', function() {
  it("returns false if it is not a triangle", function() {
    expect(triangle(2, 2, 5)).to.equal(false);
  });

  it("returns equilateral if it is an equilateral triangle", function() {
    expect(triangle(2, 2, 2)).to.equal("equilateral");
  });

  it("returns isosceles if it is an isosceles triangle", function() {
    expect(triangle(2, 2, 1)).to.equal("isosceles");
  });

  it("returns scalene if it is a scalene", function() {
    expect(triangle(3, 4, 5)).to.equal("scalene");
  });

});
