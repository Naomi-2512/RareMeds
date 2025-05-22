import Express, { json, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = Express();

app.use(json());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(cookieParser(process.env.SECRET_COOKIE as string));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});