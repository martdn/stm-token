const Streamity = artifacts.require("Streamity");
const StreamityMultiSend = artifacts.require("StreamityMultiSend");

module.exports = function(deployer) {
  deployer.deploy(Streamity);
  deployer.deploy(StreamityMultiSend);
};
