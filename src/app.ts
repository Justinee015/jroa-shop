import userRoutes from "#routes/user-routes.js";
import cors from "cors";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT ?? 9001;

app.use(helmet()); // for security
app.use(cors()); // for authenticating request from a valid domain
app.use(express.urlencoded({ extended: true })); // for parsing requests from form submission
app.use(express.json()); // for parsing requests in json format
app.use(morgan("dev")); // for logging requests

app.use("/api/users", userRoutes);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  next();
});

app.use((req, res) => {
  res
    .status(404)
    .json({ error: true, message: "Resource not found", status: 404 });
});

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.log(typeof err);
//   res.status(err.status ?? 500).json({
//     error: true,
//     message: err.message ?? "Internal Server Error",
//     status: err.status ?? 500,
//   });
// });

app.listen(PORT, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`[JROA-SHOP]: Listening on port ${PORT} `);
});
