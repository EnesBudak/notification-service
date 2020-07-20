const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/notification", (req, res) => {
  let payload = {
    title: req.body.title,
  };

  console.log(payload);
  if (!payload.title) res.send({ success: false, msg: "basarisiz" });

  res.send({ success: true, result: "başarili" });
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(err);
  console.log("Server çalıştı %s", 3000 || process.env.PORT);
});
