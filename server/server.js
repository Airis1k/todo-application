import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import users from "./routes/users.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);
// app.use("/", records);

// start the Express server
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
