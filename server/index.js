const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const port = process.env.PORT || 5000;

////////cors()

app.use(cors());

////////port open
app.listen(port, () => {
  console.log(`Server Works !!! At port ${port}`);
});

/////get request handel here get url for one video

app.get("/download", async(req, res) => {
  try {
    var URL = req.query.URL;

    const info = await ytdl.getInfo(URL);

    const format = ytdl.filterFormats(info.formats, "audioonly");

    res.json(format[1].url);
 
  } catch (err) {
    console.error(err);
    res.json({"error":err})
  }
});
