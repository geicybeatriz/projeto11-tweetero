import chalk from "chalk";
import express, {json} from "express";
import cors from "cors";

// const userData = {
// 	username: 'bobesponja', 
// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
// };

// const tweetData = {
// 	username: "bobesponja",
// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//  tweet: "eu amo o hub",
// };

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
    const tweetRecebido = req.body;
    const user = users.find(e => e.username === tweetRecebido.username);
    tweetRecebido.avatar = user.avatar;

    tweets.unshift(tweetRecebido);

    res.send("OK");
});

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(0, 10));
})


app.listen(5000, () => {
    console.log(chalk.bold.green(`Aplicação está funcionando!`))
} );