import React from 'react';

/**
 * Response Handler for error messages caught on API
 * @param {Object} response
 */

 export const responseHandle = (response) => {
     return response.json()
        .then(json => {
            return response.ok ? json : Promise.reject(json)
        });
 }