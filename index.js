import chalk from "chalk";
import express, {json} from "express";

const app = express();
app.use(cors());
app.use(json());




app.listen(5000, () => {
    console.log(chalk.bold.green(`Aplicação está funcionando!`))
} );