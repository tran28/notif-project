import axios from "axios";

/**
 * A reusable function to call AWS Lambda functions via API Gateway.
 * @param {Object} options - The options for the API call.
 * @param {string} options.method - The HTTP method ('GET', 'POST', 'DELETE', etc.).
 * @param {string} options.url - The URL to call.
 * @param {Object} [options.body] - The body of the request, for methods that send data.
 * @param {Object} [options.headers] - Optional headers for the request.
 * @param {Object} [options.params] - Optional query parameters to include in the request, particularly useful for GET requests.
 * @returns {Promise<Object>} The response data from the API call.
 */

async function callLambda({ method, url, body, headers = {}, params = {} }) {
    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
            ...headers // Merge additional headers passed to the function
        },
        params,
    };

    // Only add the body for methods that typically send data
    if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        config.data = body;
    }

    try {
        const response = await axios(config);
        return response; // Return the response data
    } catch (error) {
        throw error; // Rethrow the error to be handled by the caller
    }
}

export default callLambda;
