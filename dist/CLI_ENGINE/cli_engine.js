"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
    }
    registerCommands(commands) {
        // each command class should expect the program instance in its constructor
        commands.forEach((CommandClass) => {
            const commandInstance = new CommandClass(this.program);
            // call named method to register with the underlying commander program
            if (typeof commandInstance.register === "function") {
                commandInstance.register();
            }
        });
    }
    run() {
        this.program.parse();
    }
}
exports.default = CLI_Engine;
