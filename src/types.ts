/**
 * @description The options for a mocked request.
 * Partial implementation of RequestInit with the addition of "data" property which value will be returned from the mock.
 */
export type MockOptions = {
    /** @deprecated use response.data */
    data?: any;
    headers?: RequestInit['headers'];
    method?: RequestInit['method'];
    response?: MockResponse;
};

/**
 * @description The response for a mocked request.
 * Partial implementation of Response with the addition of "data" property which value will be returned from the mock.
 */
export interface MockResponse {
    data?: any;
    status?: number;
    headers?: RequestInit['headers'];
};