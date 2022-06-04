import { RequestParams, RequestNamepsace } from "../types/request";
/**
 * Executes an HTTP request
 * @param {string} url The url
 * @returns {Promise<any>} The response
 */
export declare const request: (url: string, { method, headers, data, params }?: RequestParams) => Promise<any>;
/**
 * Executes an HTTP request
 * @param {string | URL} url The url
 * @param {string} dest The file destination
 * @returns {Promise<any>} The response
 */
export declare const download: (url: string | URL, dest: string, { headers, data, params }?: RequestParams) => Promise<any>;
/**
 * Makes a namespace
 * @param {string} url The namespace url
 * @param {{ query?: string }} [params] Options ig
 * @returns {(params: string, { query: string }) => Promise<any>} The function that does the reqs
 */
export declare const namespace: (url: string, { query }?: {
    query?: {
        [key: string]: string;
    };
    headers?: Record<string, string>;
}) => RequestNamepsace;
