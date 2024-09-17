/// <reference types="node" />
import { MockOptions } from "./types";
/**
 * @description Convert a wildcard string to a regular expression.
 * @param wildcardString - The wildcard string to convert. eg. '/api/*\/users'
 * @returns A regular expression that matches the wildcard string.
 */
export declare function wildcardToRegex(wildcardString: string): RegExp;
/**
 * @description Find a requests.
 */
export declare const findRequest: (original: [string, RequestInit?]) => (mocked: [RegExp, MockOptions?]) => boolean;
/**
 * Returns an object similar to Response class.
 * @param status - The HTTP status code of the response.
 * @param url - The URL of the request.
 * @param options - The options for the mocked request.
 * @returns An object similar to Response class.
 */
export declare const makeResponse: (status: number, url: string, options?: MockOptions) => {
    ok: boolean;
    status: number;
    statusText: number;
    url: string;
    headers: import("undici-types").HeadersInit | undefined;
    text: () => Promise<any>;
    json: () => Promise<any>;
    redirected: boolean;
    bodyUsed: boolean;
};
