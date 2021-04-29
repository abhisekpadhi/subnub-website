import {USER_SVC_URL} from '../constants';

const API_BASE = USER_SVC_URL + '/social-integration/v1';

/*
data class AccessTokenUpdateRequest(
    val userId: String = "",
    val twitterUserId: String = "",
    val twitterScreenName: String = "",
    val token: String = "",
    val tokenSecret: String = ""
)
*/

export interface AccessTokenUpdateRequest {
    userId: string;
    twitterUserId: string;
    twitterScreenName: string;
    token: string;
    tokenSecret: string;
}

export const getOAuthUrl = (request: object) => {
    const url = API_BASE + '/twitter/oauth-url'
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'}
    });
}

export const persistTwitterAccessTokens = (request: Object) => {
    const url = API_BASE + '/twitter/access-token';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'}
    });
}

