import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import authRoutes from "./routes/auth.js";
import teamRoutes from "./routes/teams.js";
import driversRoutes from "./routes/drivers.js";

const app = express();
dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,  // da passare a true quando passiamo in https
      maxAge: 8*60*60*1000,
    },
    store: new MongoStore({ mongoUrl: process.env.MONGO_URL}),
  })
);

app.use("/auth", authRoutes);
app.use("/teams", teamRoutes)
app.use("/drivers", driversRoutes)


app.listen(3000, () => {
  console.log("Server started");
});
