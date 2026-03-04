import { execSync } from "node:child_process";

export default class Init_ts{
    program: any;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
            .command("init-ts <foldername>")
            .description("initialize a new TypeScript project")
            .action((foldername: string) => {this.InitializeTs(foldername)});
    }
    InitializeTs(foldername: string){
        this.run(`mkdir ${foldername}`);
        this.run(`cd ${foldername} && npm init -y`);
        this.run(`cd ${foldername} && npm install -D typescript ts-node nodemon @types/node`);
        this.run(`cd ${foldername} && npx tsc --init`);
        this.run(`cd ${foldername} && touch index.ts`);
    }
    run(command: string){
        execSync(command,{stdio:"inherit"});
    }
}
