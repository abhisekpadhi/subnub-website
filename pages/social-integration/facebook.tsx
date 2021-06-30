import React, {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {CLUBHOUSE_BG_COLOR, CLUBHOUSE_BTN_BG_COLOR, CLUBHOUSE_CARD_COLOR} from '../../components/constants';
import Box from '@material-ui/core/Box';
import {useRouter} from 'next/router';

interface Props {}

function Facebook() {
    const router = useRouter();

    // when user authorised
    const oauthToken = router.query.oauth_token;
    const oauthVerifier = router.query.oauth_verifier;

    useEffect(() => {
        if (!(oauthVerifier && oauthToken)) {
            return
        } else {
            if (oauthToken.length > 0 && oauthVerifier.length > 0) {
                const url = `https://api.twitter.com/oauth/access_token?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`
                console.log(`access token url = ${url}`);

            }
        }
    }, [oauthToken, oauthVerifier]);

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container style={{padding: 40, display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh'}}>
                <Box display={'flex'} flexDirection={'column'}>
                    Facebook integration in progress...
                </Box>
            </Container>
        </div>

    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: CLUBHOUSE_BG_COLOR,
        },
    }),
);

export default Facebook;
