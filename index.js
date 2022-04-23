import chalk from "chalk";
import express, {json} from "express";
import cors from "cors";

const users = [];
const tweets = [];

const app = express();
app.use(cors());
app.use(json());

app.post("/sign-up", (req, res) => {
    const userData = req.body;
    users.unshift(userData);

    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const tweetReceived = req.body;
    const user = users.find(e => e.username === tweetReceived.username);
    tweetReceived.avatar = user.avatar;

    tweets.unshift(tweetReceived);

    res.send("OK");
});

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(0, 10));
})


app.listen(5000, () => {
    console.log(chalk.bold.green(`Server is running at port 5000!`))
} );