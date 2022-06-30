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
const cartRouter = require("./Routers/cartRouter");
const paymentRouter = require("./Routers/PaymentRouter");


app.use("/users", userRouter)
app.use("/auth", authRouter)
app.use("/cookies", cookiesRouter)
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter)






