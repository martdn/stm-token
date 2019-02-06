const StreamityMultiSend = artifacts.require("StreamityMultiSend");

contract("StreamityMultiSend test multisend", async accounts => {
    const account_one = accounts[1];
    const account_two = accounts[2];
    it("should put 100 tokens in the two test accounts", async () => {
        let instance = await StreamityMultiSend.deployed();
        await instance.multiSend([account_one, account_two], [100, 100]);
        let balance_one = await instance.balanceOf.call(account_one);
        let balance_two = await instance.balanceOf.call(account_one);
        assert.equal(balance_one.valueOf(), 100);
        assert.equal(balance_two.valueOf(), 100);
    });
    it("should be paused", async () => {
        let instance = await StreamityMultiSend.deployed();
        await instance.pause();
        let isPaused = await instance.paused.call();
        assert.equal(isPaused, true);
    });
    it("should be unPaused", async () => {
        let instance = await StreamityMultiSend.deployed();
        await instance.unpause();
        let isPaused = await instance.paused.call();
        assert.equal(isPaused, false);
    });
});