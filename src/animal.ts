export abstract class Animal {
    private name: string;

    walk() {
        return this.name + ' is Walking!';
    }

    sleep() {
        return this.name + ' is Sleeping';
    }

    setName(name:string): void {
        this.name = name;
    }

    getName():string {
        return this.name;
    }
}