import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useRequest, { HTTP_METHODS } from './useRequest';

import { initUser } from '../redux/slices/user';

const useMetamask = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const {request} = useRequest();
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const connect = async (callback = () => {}) => {
        if(window.ethereum){
            setIsLoading(true);

            const data = await window.ethereum.request({method:'eth_requestAccounts'});

            setIsLoading(false);

            const response = await request("/auth", HTTP_METHODS.POST, {
                metamask: data[0]
            });

            if(!response){
                return;
            }

            localStorage.setItem("metamask", data[0]);
            dispatch(initUser(response.user));
    
            if(response.user.isSubTelegram){
                return callback(4);
            }

            callback(2);
        }
        else{
            alert("Install metamask extension!");
        }
    }

    const setSocial = async (twitterNick, telegramNick, successCallback = () => {}, rejectCallback = () => {}) => {
        if(!twitterNick || !telegramNick){
            return alert("Please fill in all fields");
        }

        if(!user?.id){
            return;
        }

        const response = await request("/set-social", HTTP_METHODS.POST, {
            userId: user?.id,
            telegram: telegramNick,
            twitter: twitterNick
        });

        if(!response || response.error){
            return alert(response.message);
        }

        const sub = await request("/check-telegram-sub", HTTP_METHODS.POST, {
            telegramUsername: telegramNick
        });

        if(!sub?.isSub){
            return rejectCallback();
        }

        dispatch(initUser(response.user));
        successCallback();
    }

    const checkComplete = async (callback = () => {}) => {
        const metamask = localStorage.getItem("metamask");

        if(!metamask){
            return;
        }

        const response = await request("/auth", HTTP_METHODS.POST, {
            metamask
        });

        if(!response){
            return;
        }

        dispatch(initUser(response.user));

        if(response.user.isSubTelegram){
            return callback(4);
        }

        callback(2);
    }

    return {
        isLoading,
        connect,
        setSocial,
        checkComplete
    }
}

export default useMetamask;