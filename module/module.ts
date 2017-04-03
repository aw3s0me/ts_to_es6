/**
 * Created by korovin on 4/3/2017.
 */
export namespace Module {
    export function example(msg) {
        let a = 1;
        console.log(msg);
        return {
            lalala: 123
        }
    }
    
    export class MyClass {
        aa: number;
        constructor() {
            this.aa = 1;
        }
    }
}