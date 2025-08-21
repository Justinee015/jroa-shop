import userRoutes from "#routes/user-routes.js";
import express from "express";

const app = express();
const PORT = process.env.PORT ?? 9001;

app.use(express.urlencoded({ extended: true })); // for parsing requests from form submission
app.use(express.json()); // for parsing requests in json format

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`[JROA-SHOP]: Listening on port ${PORT} `);
});
