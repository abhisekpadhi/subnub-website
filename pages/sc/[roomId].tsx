import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getScheduledRoom, ScheduledRoom} from '../../components/api/clubhouse';
import {Container} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {CLUBHOUSE_BG_COLOR, CLUBHOUSE_BTN_BG_COLOR, CLUBHOUSE_CARD_COLOR} from '../../components/constants';
import Box from '@material-ui/core/Box';
import dayjs from 'dayjs';
import {clipText} from '../../components/utils';
import {NextSeo} from 'next-seo';

// This gets called on every request
export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await getScheduledRoom(context.params.roomId as string);
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}


function CHScheduledRoom(props: {data: { room: ScheduledRoom, communityId: string, communityName: string, communityLogoUrl: string }}) {
    const classes = useStyles();
    const [state] = useState<{
        room: ScheduledRoom | undefined,
    }>({
        room: props.data.room,
    });
    return (
        <div className={classes.container}>
            <Container style={{padding: 40, display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh'}}>
                <NextSeo
                    title={`SubNub room on ${state.room.title} scheduled for ${dayjs(state.room.scheduledAt).format('ddd, D MMM, hh:mm A IST')}`}
                    description={clipText(state.room.description, 170)}
                    canonical={`https://subnub.com/sc/${state.room.roomId}`}
                    openGraph={{
                        url: `https://subnub.com/sc/${state.room.roomId}`,
                        title: state.room.title,
                        description: clipText(state.room.description, 170),
                        images: [
                            {
                                url: '/logo512.png',
                                width: 256,
                                height: 256,
                                alt: `Live conversation room on ${state.room.title} | SubNub`,
                            },
                        ],
                    }}
                    twitter={{
                        handle: '@subnubapp',
                        site: '@subnubapp',
                        cardType: 'summary',
                    }}
                />
                <h1 style={{display: 'none'}}>{state.room.title} | SubNub</h1>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.datetime} gutterBottom>
                            {dayjs(state.room.scheduledAt).format('ddd, D MMM, hh:mm A IST')}
                        </Typography>
                        <Typography className={classes.title} gutterBottom>
                            {state.room.title}
                        </Typography>
                        {(state.room.coHosts.length > 0) && (
                            <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                                {state.room.coHosts.map(item => (
                                        <img src={item.profilePicOutputUrl} className={classes.coHostProfilePic}
                                             alt={item.fullName}/>
                                    )
                                )}
                            </Box>)}
                        <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}
                             fontFamily={'Nunito, sans-serif'} fontStyle={'italic'}>
                            w/{state.room.coHosts.map(item => (
                            item.fullName
                        )).join(',')}
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                            <Typography className={classes.description} variant="body2" component="p">
                                {state.room.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Button
                    endIcon={<ChevronRightIcon/>}
                    onClick={() => {
                        window.open('subnub://sc/' + state.room.roomId);
                    }}
                    className={classes.openInAppBtn}
                >
                    Open in app
                </Button>
            </Container>
        </div>

    );
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
            width: 42,
            height: 42,
            marginRight: 10,
            borderRadius: 18,
        }
    }),
);


export default CHScheduledRoom;
