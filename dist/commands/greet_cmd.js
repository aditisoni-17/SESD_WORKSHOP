"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greet_cmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("greet <name>")
            .description("say hello to someone")
            .action((name) => this.greet_name(name));
    }
    greet_name(name) {
        console.log(`hello ${name}`);
    }
}
exports.default = Greet_cmd;
