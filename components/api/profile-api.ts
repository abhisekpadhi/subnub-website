import {API_URL, POST_SVC_URL} from '../constants';

const CLUBHOUSE_API_URL = API_URL + '/api/ch';

export const getProfileScreenDataByUsername = (
    username: string,
    followerUserId: string,
) => {
    const url =
        CLUBHOUSE_API_URL +
        `/profile/screen?username=${username}&followerUserId=${followerUserId}`;
    return fetch(url, {method: 'GET'});
};
