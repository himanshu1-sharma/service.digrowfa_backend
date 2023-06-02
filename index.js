require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { DB_CONNECT } = process.env;
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")
var router = express()
const adminRouter = require("./routes/admin.routes")
const categoryRouter = require("./routes/category.routes")
const jobCategoryRouter = require("./routes/jobCategory.routes")
const categoryDetailRouter = require("./routes/categoryDetail.routes")
const questionAnswersRouter = require("./routes/questionAnswers.routes")
const userConversationRecord = require("./routes/userConversationRecord.routes")
const subscribeRouter = require("./routes/subscribe.routes")
const contactRouter = require("./routes/contact.routes")
const dgfcontactRouter = require("./routes/dgfcontact.routes")
const dgfenquiryRouter = require("./routes/dgfenquiry.routes")
const jobDetailRouter = require("./routes/jobDetail.routes")
const careerRouter = require("./routes/career.routes")
const dgfCustomPlanEnquiryRouter = require("./routes/dgfCustomPlanEnquiry.routes")
const dgfGrowthPlanEnquiryRouter = require("./routes/dgfGrowthPlanEnquiry.routes")
const dgfRevolutionClientRouter = require("./routes/DgfRevolutionClient.routes")
const dgfRevolutionClientCommentsRouter = require("./routes/DgfRevolutionClientComments.routes")
const dgfRevolutionClientEnquiryRouter = require("./routes/DgfRevolutionClientEnquiry.routes")
const dgfPaymentRouter = require("./routes/DgfPayment.routes")


app.use(express.json())
app.use(cors())



//db connect

mongoose.connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection
db.once("open", () => console.log("Connected to MongoDB"));
db.on("disconnected", () => console.log("Disonnected to MongoDB"));
db.on("reconnected", () => console.log("Reconnected to MongoDB"));
db.on("error", (err) => console.log(err));

//routes

router.use(bodyParser.json())
app.use("/api/admin", adminRouter)
app.use("/api/category", categoryRouter, categoryDetailRouter)
app.use("/api/category-detail", categoryDetailRouter)
app.use("/api/question-answers", questionAnswersRouter);
app.use("/api/conversation", userConversationRecord);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/contact", contactRouter);
app.use("/api/job", jobCategoryRouter);
app.use("/api/job-detail", jobDetailRouter);
app.use("/api/career", careerRouter);

//dgf routes
app.use("/api/dgf/contact", dgfcontactRouter);
app.use("/api/dgf/enquiry", dgfenquiryRouter);
app.use("/api/dgf/custom", dgfCustomPlanEnquiryRouter);
app.use("/api/dgf/growth", dgfGrowthPlanEnquiryRouter);
app.use("/api/dgf/revolution-client", dgfRevolutionClientRouter);
app.use("/api/dgf/revolution-client-comments", dgfRevolutionClientCommentsRouter);
app.use("/api/dgf/revolution-client-enquiry", dgfRevolutionClientEnquiryRouter);
app.use("/api/dgf/payment", dgfPaymentRouter);


app.get('/', (req, res) => {
    res.send("api is running")
})

//Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

let PORT = process.env.PORT || 6050;

app.listen(PORT, () => {
    console.log(`app in running on ${PORT} port`)
})
