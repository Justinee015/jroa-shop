import express from "express";

const app = express();
const PORT = process.env.PORT ?? 9001;

app.listen(PORT, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`[JROA-SHOP]: Listening on port ${PORT} `);
});
