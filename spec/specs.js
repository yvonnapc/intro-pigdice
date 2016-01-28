describe("Player", function(){
  it("defines a new user based on name input", function(){
  var testObject = new Player ("Summer",0,0);
  expect(testObject.name).to.equal("Summer");
});

it ("It will determine the existing current total", function(){
    var testObject = new Player ("Summer",0,0);
    testObject.currentscore = 0;
    expect(testObject.currentscore).to.equal(0);
});
it ("It will verify that currentotal is cumulative", function(){
    var testObject = new Player ("Summer",0,0);
    testObject.currenttotal = 0;
    expect(testObject.currenttotal).to.equal(0);
});
});
