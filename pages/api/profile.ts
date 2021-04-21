import {POST_SVC_URL} from '../../components/constants';

const CLUBHOUSE_API_URL = POST_SVC_URL + '/clubhouse/v1';

export const getProfileScreenDataByUsername = (
    username: string,
    followerUserId: string,
) => {
    const url =
        CLUBHOUSE_API_URL +
        `/profile/screen?username=${username}&followerUserId=${followerUserId}`;
    return fetch(url, {method: 'GET'});
};
