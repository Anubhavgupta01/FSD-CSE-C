const express = require("express");
const os = require("os");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());


// 1️⃣ OS Info
app.get("/osinfo", (req, res) => {
  res.json({
    platform: os.platform(),
    release: os.release(),
    hostname: os.hostname(),
    user: os.userInfo()
  });
});


// 2️⃣ CPU Info
app.get("/cpuinfo", (req, res) => {
  res.json({
    cpuModel: os.cpus()[0].model,
    cores: os.cpus().length,
    speed: os.cpus()[0].speed
  });
});


// 3️⃣ Memory Info
app.get("/memoryinfo", (req, res) => {
  res.json({
    totalMemoryGB: (os.totalmem() / 1e9).toFixed(2),
    freeMemoryGB: (os.freemem() / 1e9).toFixed(2),
    usedMemoryGB: ((os.totalmem() - os.freemem()) / 1e9).toFixed(2)
  });
});


// 4️⃣ Disk Info  (Works on Windows + Linux)
app.get("/diskinfo", (req, res) => {
  exec("wmic logicaldisk get size,freespace,caption", (err, stdout) => {
    if (err) return res.send("Disk info not available");
    res.send(stdout);
  });
});


app.listen(5000, () => console.log("Server running on port 5000"));
