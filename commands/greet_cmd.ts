export default class Greet_cmd{
    program: any;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
            .command("greet <name>")
            .description("say hello to someone")
            .action((name)=> this.greet_name(name));
    }
    greet_name(name){
        console.log(`hello ${name}`);
    }
}