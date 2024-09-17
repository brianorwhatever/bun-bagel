/// <reference types="node" />
import { MockOptions } from "./types";
/**
 * @description Mock the fetch method.
 */
export declare const mock: (request: Request | RegExp | string, options?: MockOptions) => true | undefined;
/**
 * @description Clear the fetch mock.
 */
export declare const clearMocks: () => void;
