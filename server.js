const express = require("express");
const connectDb = require("./config/db");

const app = express();
app.get("/", (req, res) => res.send("Hello wrold"));
connectDb();
app.use(express.json({ extended: false }));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server runnign on ${PORT}`));
