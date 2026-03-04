"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = require("node:child_process");
class Init_ts {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init-ts <foldername>")
            .description("initialize a new TypeScript project")
            .action((foldername) => { this.InitializeTs(foldername); });
    }
    InitializeTs(foldername) {
        this.run(`mkdir ${foldername}`);
        this.run(`cd ${foldername} && npm init -y`);
        this.run(`cd ${foldername} && npm install -D typescript ts-node nodemon @types/node`);
        this.run(`cd ${foldername} && npx tsc --init`);
        this.run(`cd ${foldername} && touch index.ts`);
    }
    run(command) {
        (0, node_child_process_1.execSync)(command, { stdio: "inherit" });
    }
}
exports.default = Init_ts;
