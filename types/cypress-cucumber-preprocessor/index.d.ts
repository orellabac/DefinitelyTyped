// Type definitions for cypress-cucumber-preprocessor 3.0
// Project: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
// Definitions by: Alec Brunelle <https://github.com/aleccool213>
//                 Falcon Taylor-Carter <https://github.com/falconertc>
//                 Jens Peters <https://github.com/jp7677>
//                 Aaron Aichlmayr <https://github.com/waterfoul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export default function preprocessor(options?: any): (file: any) => Promise<string>;

/**
 * @returns NodeJS.ReadableStream
 */
export function transform(file: any): any;
