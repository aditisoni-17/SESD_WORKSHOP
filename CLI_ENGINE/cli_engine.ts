import { Command } from "commander";

export default class CLI_Engine {
    program: Command;
    constructor() {
        this.program = new Command();
    }
    
    registerCommands(commands: Array<any>) {
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
