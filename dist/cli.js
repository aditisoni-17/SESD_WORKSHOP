#!/usr/bin/env node
"use strict";
// const {Command} = require ("commander");
// const program = new Command()
// const axios = require("axios")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const cli_engine_1 = __importDefault(require("./CLI_ENGINE/cli_engine"));
const greet_cmd_1 = __importDefault(require("./commands/greet_cmd"));
const engine = new cli_engine_1.default();
engine.registerCommands([greet_cmd_1.default]);
engine.run();
exports.default = cli_engine_1.default;
