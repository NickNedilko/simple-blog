import { setAuthHeader } from "../lib/jwt";
import { User } from "../types";
import { LoginUser, RegisterUser } from "../validation";
import { buildUrl, sendRequest } from "./instance";


export const login = async (data: LoginUser ) => {
return sendRequest<Partial<User>>(buildUrl('auth', 'login'), {
    method: 'POST',
    data, 
    headers: {
      'Content-Type': 'application/json', 
    },
  }); 
};

export const register = async (data: RegisterUser ) => {
return sendRequest<Partial<User>>(buildUrl('auth', 'register'), {
    method: 'POST',
    data, 
    headers: {
      'Content-Type': 'application/json', 
    },
  }); 
};

export const logout = async () => {
    return sendRequest(buildUrl('auth', 'logout'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
    })
}

export const getUser = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        return Promise.reject(new Error('No token found'));
    }
    setAuthHeader(token);
    return sendRequest<Partial<User>>(buildUrl('auth', 'me'),
    {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,

        },
        
    });
}
