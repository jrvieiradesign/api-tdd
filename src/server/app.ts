import express from "express"
import router from "../routes/companyRoutes";

const app = express()

app.use(express.json())

app.use("/company", router)

export default app;