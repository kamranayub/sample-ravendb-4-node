const express = require("express");
const { DocumentStore } = require("ravendb");

const store = new DocumentStore("http://live-test.ravendb.net", "Demo");
store.initialize();

const app = express();

app.use("/company/:id", async (req, res) => {
  const session = store.openSession();

  try {
    const company = await session.load(`companies/${req.params.id}`);

    return res
      .status(200)
      .json(company)
      .end();
  } catch (err) {
    console.error(err);

    return res
      .status(500)
      .json(err)
      .end();
  }
});

app.listen(process.env.PORT || 1337, () => {
  console.log(`Listening on port ${app.get("port")}...`);
});
