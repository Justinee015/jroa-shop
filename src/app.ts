import handleError from "#middlewares/error.middleware.js";
import userRoutes from "#routes/user.routes.js";
import dbConnect from "#server.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 9001;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
dbConnect();

app.use(helmet()); // for security
app.use(cors()); // for authenticating request from a valid domain
app.use(express.urlencoded({ extended: true })); // for parsing requests from form submission
app.use(express.json()); // for parsing requests in json format
app.use(morgan("dev")); // for logging requests

app.use("/api/users", userRoutes);

// app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
//   console.log(err);
//   next();
// });

app.use((req, res) => {
  res
    .status(404)
    .json({ error: true, message: "Resource not found", status: 404 });
});

app.use(handleError);

app.listen(PORT, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`[JROA-SHOP]: Listening on port ${PORT} `);
});
