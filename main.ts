import inquirer from "inquirer"


             //class for player
class Player{
    name: string;
    feul:number = 100;
    constructor(name:string){
        this.name = name
    }
    feulDecrese(){
       let feul = this.feul - 25
       this.feul = feul
    }
    feulIncrease(){
        this.feul = 100
    }
}


            //class for opponent
class Opponent{
    name: string;
    feul:number = 100;
    constructor(name:string){
        this.name = name
    }
    feulDecrese(){
        let feul = this.feul - 25
        this.feul = feul
     }
}


//          
//  first prompt asking player's name
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name?"
    }
])


   ///second prompt for opponent name
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent?",
        choices: ["skeleton" , "alien" , "zombie"]
    }
])

//storing the data given by user in  varibles
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)


//creating loop
do{
    //skeleton
    //giving user 3 choises
    if(opponent.select === "skeleton" ){
        let ask = await inquirer.prompt([{
                 name: "opt",
                 type: "list",
                 message: "what would you like to do?",
                 choices: ["attack" , "drink portion" , "run for your life"]
    }])
              

    //if user select attack
    if(ask.opt === "attack"){
           let num = Math.floor( Math.random() * 2 );
           if(num > 0){
            p1.feulDecrese()
            console.log(`${p1.name} feul is ${p1.feul}`)
            console.log(`${o1.name} feul is ${o1.feul}`)

            if(p1.feul <= 0){
                console.log(`You loss! try next time.`)
                process.exit
            }
           }

          
           if(num <= 0){
            o1.feulDecrese()  
            console.log(`${p1.name} feul is ${p1.feul}`)
            console.log(`${o1.name} feul is ${o1.feul}`)
            if(o1.feul <= 0){
                console.log(`you win.`)
                process.exit
            }
           }
    }


    //drink portion
    if(ask.opt == "drink portion"){
              p1.feulIncrease()
              console.log(`you've drank health portion. your feul is ${p1.feul}`)
    }


    //run for life
    if(ask.opt == "run for your life"){
                console.log(`You loss! try next time.`)
                process.exit
    }

    }

 //alien
    if(opponent.select === "alien" ){
        let ask = await inquirer.prompt([{
                 name: "opt",
                 type: "list",
                 message: "what would you like to do?",
                 choices: ["attack" , "drink portion" , "run for your life"]
    }])
              
    if(ask.opt === "attack"){
           let num = Math.floor( Math.random() * 2 );
           if(num > 0){
            p1.feulDecrese()
            console.log(`${p1.name} feul is ${p1.feul}`)
            console.log(`${o1.name} feul is ${o1.feul}`)

            if(p1.feul <= 0){
                console.log(`You loss! try next time.`)
                process.exit
            }
           }

           if(num <= 0){
            o1.feulDecrese()
            console.log(`${p1.name} feul is ${p1.feul}`)
            console.log(`${o1.name} feul is ${o1.feul}`)
            if(o1.feul <= 0){
                console.log(`you win.`)
                process.exit
            }
           }
    }

    if(ask.opt == "drink portion"){
              p1.feulIncrease()
              console.log(`you've drank health portion. your feul is ${p1.feul}`)
    }

    if(ask.opt == "run for your life"){
                console.log(`You loss! try next time.`)
                process.exit
    }

    }

//zombie
    if(opponent.select === "zombie" ){
        let ask = await inquirer.prompt([{
                 name: "opt",
                 type: "list",
                 message: "what would you like to do?",
                 choices: ["attack" , "drink portion" , "run for your life"]
    }])
              
    if(ask.opt === "attack"){
           let num = Math.floor( Math.random() * 2 );
           if(num > 0){
            p1.feulDecrese()
            console.log(`${p1.name} feul is ${p1.feul}`)
            console.log(`${o1.name} feul is ${o1.feul}`)

            if(p1.feul <= 0){
                console.log(`You loss! try next time.`)
                process.exit
            }
           }

           if(num <= 0){
            o1.feulDecrese()
            console.log(`${p1.name} feul is ${p1.feul}`)
            console.log(`${o1.name} feul is ${o1.feul}`)
            if(o1.feul <= 0){
                console.log(`you win.`)
                process.exit
            }
           }
    }

    if(ask.opt == "drink portion"){
              p1.feulIncrease()
              console.log(`you've drank health portion. your feul is ${p1.feul}`)
    }

    if(ask.opt == "run for your life"){
                console.log(`You loss! try next time.`)
                process.exit
    }

    }
}
while(true);