import 'dotenv/config';
import "./db.js";

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from "./routes/auth.routes.js";
import eventsRoutes from "./routes/events.routes.js"

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // El puerto del frontend
    credentials: true // Permite el uso de cookies
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);
app.use("/api", eventsRoutes);

const PORT= process.env.PORT || 4000
app.listen(PORT, () => console.log('server on port', PORT));