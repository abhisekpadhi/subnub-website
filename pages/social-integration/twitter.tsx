import React, {useEffect, useState} from 'react';
import {CircularProgress, Container} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {
    CLUBHOUSE_BG_COLOR, CLUBHOUSE_BTN_BG_COLOR,
    SUBNUB_THEME_COLOR
} from '../../components/constants';
import {useRouter} from 'next/router';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';

interface Props {}

interface State {
    oauthUrl: string;
    twitterScreenName: string;
    done: boolean;
}

const initialState = {
    oauthUrl: '',
    twitterScreenName: '',
    done: false,
} as State;

function Twitter(props: Props) {
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
                setState(prevState => ({...prevState, done: true}));
                window.location.href = `subnub://social-integration?platform=twitter&oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`;
            }
        }
    }, [oauthToken, oauthVerifier]);

    const [state, setState] = useState<State>(initialState);

    return (
        <Container className={classes.container}>
            {state.done ? (
                <>
                    <CheckCircleIcon fontSize={'large'} style={{color: SUBNUB_THEME_COLOR}}/>
                    <Button
                        endIcon={<ChevronRightIcon/>}
                        onClick={() => {
                            location.href = `subnub://social-integration?platform=twitter&oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`;
                        }}
                        className={classes.openInAppBtn}>
                        Return to app
                    </Button>
                </>
                ) : (
                    <CircularProgress color="primary"/>
                    )}
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
        openInAppBtn: {
            padding: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 100,
            marginTop: 20,
            backgroundColor: CLUBHOUSE_BTN_BG_COLOR,
            color: '#414141'
        },
    }),
);

export default Twitter;
