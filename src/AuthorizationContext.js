import React, {useState, createContext } from 'react';

export const AuthorizationContext = createContext();

export const AuthorizationProvider = (props) => {
    const [store, setStore] = useState({
        jwt: '',
        role: '',
        username: '',
        isLoggedIn: false
    })

    React.useEffect(() => {
        
    })
}