import React, {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {CLUBHOUSE_BG_COLOR, CLUBHOUSE_BTN_BG_COLOR, CLUBHOUSE_CARD_COLOR} from '../../components/constants';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {AccessTokenUpdateRequest, getOAuthUrl, persistTwitterAccessTokens} from '../../components/api/social-twitter';
import TwitterIcon from '@material-ui/icons/Twitter';
import {useRouter} from 'next/router';
import {parseURISearchParams} from '../../components/utils';

interface Props {}

interface State {
    oauthUrl: string;
    twitterScreenName: string;
}

const initialState = {
    oauthUrl: '',
    twitterScreenName: '',
} as State;

function Facebook(props: Props) {
    const classes = useStyles();
    const router = useRouter();

    // when user authorised
    const oauthToken = router.query.oauth_token;
    const oauthVerifier = router.query.oauth_verifier;

    // when user cancelled
    const denied = router.query.denied;


    useEffect(() => {
        if (!(oauthVerifier && oauthToken)) {
            return
        } else {
            if (oauthToken.length > 0 && oauthVerifier.length > 0) {
                const url = `https://api.twitter.com/oauth/access_token?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`
                console.log(`access token url = ${url}`);
                // fetch(url, {
                //     method: 'POST',
                //     mode: 'no-cors',
                //     headers: {
                //         'Access-Control-Allow-Origin': '*',
                //         'Access-Control-Allow-Methods': 'POST',
                //         'Access-Control-Allow-Headers': 'Origin, Methods, Content-Type',
                //     }
                // })
                //     .then(r => r.text())
                //     .then(data => {
                //         const twitterData: any = parseURISearchParams(data)
                //         console.log(`twitter access token response = ${JSON.stringify(twitterData)}`);
                //         /*{"oauth_token":"1250375007449972736-kJGQNff0x8oC1gn9SUFPnDcjZZDlW9","oauth_token_secret":"CBrsSilLgOBNipb7nlXwn5wxd0jwHHecBtQ20MGLCRg75","user_id":1250375007449972700,"screen_name":"subnubapp"}*/
                //         const req = {
                //             userId: '123',
                //             twitterUserId: twitterData.user_id,
                //             twitterScreenName: twitterData.screen_name,
                //             token: twitterData.oauth_token,
                //             tokenSecret: twitterData.oauth_token_secret
                //         } as AccessTokenUpdateRequest;
                //         console.log(`acess token persist req = ${JSON.stringify(req)}`);
                //         persistTwitterAccessTokens(req)
                //             .then(r => {
                //                 if (r.status === 200) {
                //                     setState(prevState => ({
                //                         ...prevState,
                //                         twitterScreenName: req.twitterScreenName
                //                     }));
                //                 } else {
                //                     alert('Failed to authorize with twitter. Please retry later.');
                //                 }
                //             });
                //     })
            }
        }
    }, [oauthToken, oauthVerifier]);

    const [state, setState] = useState<State>(initialState);
    // @ts-ignore
    // Twitter.getInitialProps = async () => {
    //     return {};
    // }
    const handleConnectTwitter = async () => {
        await getOAuthUrl({callbackUrl: window.location.href})
            .then(r => r.text())
            .then(url => {
                console.log(`oauthUrl = ${url}`);
                setState(state => ({
                    ...state,
                    oauthUrl: url
                }));
                // Navigate to twitter oauth sign-in
                window.location.assign(url);
            });
    }
    return (
        <Container className={classes.container}>
            <Box display={'flex'} flexDirection={'column'}>
                {/*<Button*/}
                {/*    startIcon={<TwitterIcon />}*/}
                {/*    variant="contained"*/}
                {/*    color="primary"*/}
                {/*    onClick={handleConnectTwitter}*/}
                {/*    disabled={state.twitterScreenName.length > 0}*/}
                {/*>*/}
                {/*    Connect facebook*/}
                {/*</Button>*/}
                {/*<Box marginTop={'20px'}>*/}
                {/*    Connected facebook account: @{state.twitterScreenName}*/}

                {/*</Box>*/}
            </Box>
        </Container>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            // height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: CLUBHOUSE_BG_COLOR,
            marginTop: 60,
        },
    }),
);

export default Facebook;
