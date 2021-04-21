export const SUBNUB_ENV = process.env['REACT_APP_SUBNUB_ENV'] || 'local';

interface isvc {
    [k: string]: {[k: string]: string}
}
const svc = {
    prod: {
        POST_SVC_URL: 'https://post-svc.subnub.com',
        USER_SVC_URL: 'https://user-svc.subnub.com'
    },
    local: {
        POST_SVC_URL: 'http://localhost:8010',
        USER_SVC_URL: 'http://localhost:9090'
    },
}
const getApiBaseUrl = (key: string) => {
    return (svc as isvc)[SUBNUB_ENV][key];
}

export const POST_SVC_URL = getApiBaseUrl('POST_SVC_URL');
export const USER_SVC_URL = getApiBaseUrl('USER_SVC_URL');

export const STRIPE_API_KEY = process.env['REACT_APP_SUBNUB_STRIPE_PK'] || 'pk_test_51IAYe6GJiO065mvueZbOL8UF48HkPkbkAK6Row2L62ej9e28oZLJRypNNMiWJNK4gGJ27vc7Gze9vknfn8nKU9wx00Z5GUQrfN';

export const DISCORD_WEBHOOK_1ON1_REQUEST_CHANNEL = 'https://discord.com/api/webhooks/801537695209095198/AqpJYah3jRTo7DGfdGNmiJMmeaNuJoWHqmAhfNGlnlzKSANY141puJ2GJ5_e11orsibH'
export const DISCORD_WEBHOOK_COURSE_INTENT_CHANNEL = 'https://discord.com/api/webhooks/809083432050098176/2b1Cb2TfIvR2fSkoOOQnvPZkTEr0T6kOz8A7V5gFyLV6qhJgJS2mH92vxVo38LsP37wB'
export const DISCORD_WEBHOOK_TEACH_WITH_US = 'https://discord.com/api/webhooks/805090776564498452/sSnC6Ju__jbJyizOeWAwqwPhWIr01DjC4pRpUnshinoUYqQkElQK2-nqmD4WOErKM8NM';


export const getCookieOpts = () => {
    if(SUBNUB_ENV === 'prod') {
        return {path: '/', maxAge:  7776000, domain: '.subnub.com'}
    } else {
        return {path: '/', maxAge:  7776000}
    }
};

export const authCookieOpts = getCookieOpts();

export const SUBNUB_THEME_COLOR = '#2F68FF';
export const CLUBHOUSE_BG_COLOR = '#f1edcf';
export const CLUBHOUSE_BTN_BG_COLOR = 'rgb(0 0 0 / 6%)';
export const CLUBHOUSE_CARD_COLOR = '#fafaee';
export const CLUBHOUSE_GREEN = '#2fb32f';
export const CLUBHOUSE_ROOM_CONTROL_ICON_BG = '#f3f3f3';
export const CLUBHOUSE_ROOM_CONTROL_ICON_COLOR = '#777777';

export const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
