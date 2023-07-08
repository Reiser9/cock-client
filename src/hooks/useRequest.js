import React from 'react';
import axios from 'axios';

const BASE_API_URL = `${process.env.REACT_APP_API}`;

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

const useRequest = () => {
    const apiRequest = axios.create({
        baseURL: BASE_API_URL
    });

    const request = async (
        url,
        method = HTTP_METHODS.GET,
        data = {},
        headers = {}
    ) => {
        let reqHeaders = {
            'Content-Type': 'application/json',
            ...headers
        }

        try{
            const response = await apiRequest.request({
                method,
                url,
                headers: reqHeaders,
                data
            });

            return response.data;
        }
        catch(err){
            console.log(err);
        }
    };

    return {request};
}

export default useRequest;