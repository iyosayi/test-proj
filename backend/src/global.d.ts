// declare global {
//     namespace NodeJS {
//         interface Global {
//             signin(): Promise<any>
//             testAuth: any
//         }
//     }
// }

// export default global

// declare namespace NodeJS {
//     export interface Global {
//         testAuth: any
//     }
// }

// declare var testAuth: any

declare global {
    function someFunction(): string;
    var someVariable: string;
    var testAuth: any
}

export {}

// declare global {
//     var Config: {
//         Foo: string;
//     };
//     var Foo: string;
// }
// export { };