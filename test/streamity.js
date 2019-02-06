const Streamity = artifacts.require("Streamity");

contract("Streamity test", async () => {
  it("should put 23250000 tokens in the team account", async () => {
    let instance = await Streamity.deployed();
    let balance = await instance.balanceOf.call('0xd69824B62D26E7f2316812b8c59F36328196Ca13');
    assert.equal(balance.valueOf(), 23250000000000000000000000);
  });
    
  it("should put 18600000 tokens in the fund account", async () => {
    let instance = await Streamity.deployed();
    let balance = await instance.balanceOf('0x84726199Ac1579684d58F4A47C4c85f2C45B5a11');
    assert.equal(balance.valueOf(), 18600000000000000000000000);
  });
    
  it("should put 3720000 tokens in the Advisers & Partners accounts", async () => {
    let instance = await Streamity.deployed();
    let balance = await instance.balanceOf('0xa2C2f149e4b3EC671a61EAc9F12eAF2489e0Fb10');
    assert.equal(balance.valueOf(), 3720000000000000000000000);
  });
  it("should put 4650000 tokens in the team account, second part", async () => {
    let instance = await Streamity.deployed();
    let balance = await instance.balanceOf('0xbBB9E0605f0BC7Af1B7238bAC2807a3A8DCb54b5');
    assert.equal(balance.valueOf(), 4650000000000000000000000);
  });
  it("should put 129780000 rest part of tokens", async () => {
    let instance = await Streamity.deployed();
    let balance = await instance.balanceOf('0x464398aC8B96DdAd7e22AC37147822E1c69293Cb');
    assert.equal(balance.valueOf(), 129780000000000000000000000);
  });    
});