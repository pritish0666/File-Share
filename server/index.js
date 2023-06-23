import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";

const app = express();

app.use(
  cors({
    origin: ["https://file-share-five.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);

const PORT = 8000;

DBConnection();
app.listen(PORT, () => console.log(`server runnning on port ${PORT}`));
