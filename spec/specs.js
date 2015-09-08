describe('triangle', function() {
  it("returns false if it is not a triangle", function() {
    expect(triangle(2, 2, 5)).to.equal(false);
  });

  it("returns true if it is an equilateral triangle", function() {
    expect(triangle(2, 2, 2)).to.equal(true);
  });

  it("returns true if it is an isosceles triangle", function() {
    expect(triangle(2, 2, 1)).to.equal(true);
  });

  it("returns true if it is a scalene", function() {
    expect(triangle(3, 4, 5)).to.equal(true);
  });

});
