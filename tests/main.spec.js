const expect = require("chai").expect;

describe("Main", function () {
  let arr;

  // Roda todas as vezes, antes de CADA bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', function(){
    // Analisando um tipo
    expect(arr).to.be.a('array');
  });

  it("should have a size of 4 when push another value to the array", function () {
    arr.push(4);
    // Analisando um tamanho
    expect(arr).to.have.lengthOf(4);
  });

  it("should remove the value 3 when use pop in the array", function () {
    arr.pop();
    // Verificando se contém ou não o valor
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function(){
    expect(arr.pop() === 3).to.be.true;
  });

  it("should have a size of 2 when a value from the array", function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
