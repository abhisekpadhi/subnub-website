import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CircularProgress, Container} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';
import {CLUBHOUSE_BG_COLOR, CLUBHOUSE_BTN_BG_COLOR, CLUBHOUSE_CARD_COLOR} from '../../components/constants';
import {getProfileScreenDataByUsername} from '../../components/profile-api';
import Head from 'next/head';
import {NextSeo} from 'next-seo';
import {clipText} from '../../components/utils';

function CHProfile(props: any) {
    const classes = useStyles();
    const [state] = useState<{
        initialFetching: boolean,
        profile: any | undefined,
    }>({
        initialFetching: true,
        profile: props.data,
    });
    // console.log(`received server side props = ${JSON.stringify(props)}`);
    return (
        <Container className={classes.container}>
            {state.profile === undefined ? (
                <CircularProgress size={'2rem'} />
            ) : (
                <>
                    <NextSeo
                        title={state.profile.fullName}
                        description={clipText(state.profile.bio, 170)}
                        canonical={`https://subnub.com/u/${state.profile.username}`}
                        openGraph={{
                            url: `https://subnub.com/u/${state.profile.username}`,
                            title: state.profile.fullName,
                            description: clipText(state.profile.bio, 170),
                            images: [
                                {
                                    url: state.profile.profilePicUrl,
                                    width: 256,
                                    height: 256,
                                    alt: `${state.profile.fullName} on SubNub`,
                                },
                            ],
                        }}
                        twitter={{
                            handle: '@subnubapp',
                            site: '@subnubapp',
                            cardType: 'summary',
                        }}
                    />
                    <h1 style={{display: 'none'}}>{state.profile.fullName} | SubNub</h1>
                    <Card className={classes.root}>
                        <CardContent>
                            <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                                <img src={state.profile.profilePicUrl} className={classes.coHostProfilePic} alt={state.profile.fullName} />
                            </Box>
                            <Typography className={classes.title} gutterBottom>
                                {state.profile.fullName}
                            </Typography>
                            <Typography className={classes.description} gutterBottom>
                                @{state.profile.username}
                            </Typography>
                            <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                                <Typography className={classes.description} variant="body2" component="p">
                                    {state.profile.bio}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Button
                        endIcon={<ChevronRightIcon />}
                        onClick={() => {
                            window.open('subnub://u/' + state.profile.username);
                        }}
                        className={classes.openInAppBtn}
                    >
                        Open in app
                    </Button>
                </>
            )}
        </Container>
    )
}

// This gets called on every request
export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await getProfileScreenDataByUsername(context.params.username as string, "0");
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
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
        root: {
            maxWidth: '80%',
            borderRadius: 10,
            backgroundColor: CLUBHOUSE_CARD_COLOR,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        datetime: {
            fontSize: 16,
            fontFamily: 'Nunito, sans-serif',
        },
        title: {
            fontSize: 22,
            fontFamily: 'Lexend Deca, sans-serif',
        },
        description: {
            fontFamily: 'Nunito, sans-serif',
            fontSize: 18,
            whiteSpace: 'pre-line',
        },
        pos: {
            marginBottom: 12,
        },
        cardActionsContainer: {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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
        coHostProfilePic: {
            width: 128,
            height: 128,
            borderRadius: 52,
        }
    }),
);

export default CHProfile;
