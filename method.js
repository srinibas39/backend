const express = require("express");
const cookieParser = require('cookie-parser')


const app = express();
app.listen(3000);
app.use(express.json());
app.use(cookieParser())


// Mounting
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");
const cookiesRouter = require("./Routers/cookieRouter");

app.use("/users", userRouter)
app.use("/auth", authRouter)
app.use("/cookies", cookiesRouter)





