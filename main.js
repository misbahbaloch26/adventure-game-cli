import inquirer from "inquirer";
class Player {
    name;
    feul = 100;
    constructor(name) {
        this.name = name;
    }
    feulDecrese() {
        let feul = this.feul - 25;
        this.feul = feul;
    }
    feulIncrease() {
        this.feul = 100;
    }
}
class Opponent {
    name;
    feul = 100;
    constructor(name) {
        this.name = name;
    }
    feulDecrese() {
        let feul = this.feul - 25;
        this.feul = feul;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name?"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent?",
        choices: ["skeleton", "alien", "zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "skeleton") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["attack", "drink portion", "run for your life"]
            }]);
        if (ask.opt === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.feulDecrese();
                console.log(`${p1.name} feul is ${p1.feul}`);
                console.log(`${o1.name} feul is ${o1.feul}`);
                if (p1.feul <= 0) {
                    console.log(`You loss! try next time.`);
                    process.exit;
                }
            }
            if (num <= 0) {
                o1.feulDecrese();
                console.log(`${p1.name} feul is ${p1.feul}`);
                console.log(`${o1.name} feul is ${o1.feul}`);
                if (o1.feul <= 0) {
                    console.log(`you win.`);
                    process.exit;
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.feulIncrease();
            console.log(`you've drank health portion. your feul is ${p1.feul}`);
        }
        if (ask.opt == "run for your life") {
            console.log(`You loss! try next time.`);
            process.exit;
        }
    }
} while (true);
