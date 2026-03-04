#!/usr/bin/env node


// const {Command} = require ("commander");
// const program = new Command()
// const axios = require("axios")

// program
// .command("greet <name>")
// .action((name)=>{console.log(`hello ${name}`)})

// program
// .command("add <n1> <n2>")
// .action((n1,n2)=>{console.log(parseInt(n1)+parseInt(n2))})

// program
// .command("sub <n1> <n2>")
// .action((n1,n2)=>{console.log(parseInt(n1)-parseInt(n2))})

// program
// .command("mult <n1> <n2>")
// .action((n1,n2)=>{console.log(parseInt(n1)*parseInt(n2))})

// program
// .command("divide <n1> <n2>")
// .action((n1,n2)=>{console.log(parseInt(n1)%parseInt(n2))})

// program
// .command("quote")
// .action(async()=>{
//     try{
//         const res = await axios.get(`https://zenquotes.io/api/random`)
//         console.log(res);

//     }catch{
//         console.log("err")
//     }
// })

// program
// .command("joke")
// .action(async()=>{
//     try{
//         const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
//         console.log(res);

//     }catch{
//         console.log("err")
//     }
// })


// program.parse()


import CLI_Engine from "./CLI_ENGINE/cli_engine";
import GreetCommand from './commands/greet_cmd';

const engine = new CLI_Engine();
engine.registerCommands([GreetCommand]);
engine.run();

export default CLI_Engine;