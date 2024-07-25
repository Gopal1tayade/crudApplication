const mongoose = require("mongoose");

async function ConnecttoMongoAtlas(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("coneection sucessfull"))
    .catch((err) => console.log("something went wrong", err));
}

module.exports = {
    ConnecttoMongoAtlas,
};