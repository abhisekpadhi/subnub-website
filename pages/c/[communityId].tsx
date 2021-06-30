import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    CLUBHOUSE_BG_COLOR,
    CLUBHOUSE_BTN_BG_COLOR,
    CLUBHOUSE_CARD_COLOR,
    SUBNUB_THEME_COLOR
} from '../../components/constants';
import Box from '@material-ui/core/Box';
import {
    ClubhouseCommunityExtended,
    getCommunityByHandleWithoutUser
} from '../../components/api/community-api';
import { Home as HomeIcon } from '@material-ui/icons';
import {clipText} from '../../components/utils';
import {NextSeo} from 'next-seo';


// This gets called on every request
export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await getCommunityByHandleWithoutUser(context.params.communityId as string);
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

function CHCommunity(props: {data: ClubhouseCommunityExtended}) {
    const classes = useStyles();
    const [state] = useState<{
        community: ClubhouseCommunityExtended | undefined,
    }>({
        community: props.data,
    })

    const divider = <Box style={{height: 4, width: 4, backgroundColor: 'coral', borderRadius: 100, marginRight: '10px'}} />

    return (
        <div className={classes.container}>
            <Container style={{padding: 40, display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh'}}>
                <NextSeo
                    title={`${state.community.community.name} | Community on SubNub`}
                    description={clipText(state.community.community.description, 170)}
                    canonical={`https://subnub.com/c/${state.community.community.communityId}`}
                    openGraph={{
                        url: `https://subnub.com/c/${state.community.community.communityId}`,
                        title: state.community.community.name,
                        description: clipText(state.community.community.description, 170),
                        images: [
                            {
                                url: state.community.community.logoUrlOutput,
                                width: 256,
                                height: 256,
                                alt: `${state.community.community.name} | Community on SubNub`,
                            },
                        ],
                    }}
                    twitter={{
                        handle: '@subnubapp',
                        site: '@subnubapp',
                        cardType: 'summary',
                    }}
                />
                <Card className={classes.root}>
                    <CardContent>
                        <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                            {state.community.community.logoUrlOutput.length > 0 && (
                                <img src={state.community.community.logoUrlOutput}
                                     className={classes.coHostProfilePic}
                                     alt={state.community.community.name}
                                />
                            )}
                        </Box>
                        <Typography className={classes.title} gutterBottom>
                            {state.community.community.name}
                            <HomeIcon style={{color: SUBNUB_THEME_COLOR, fontSize: 18, paddingTop: '6px'}} />
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            @{state.community.community.handle}
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            <Box display={'flex'} flexDirection={'row'} paddingY={'10px'}>
                                {state.community.verticals.map((vertical, idx) => (
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box display={'flex'} marginRight={'10px'}>
                                            {vertical.verticalName}
                                        </Box>
                                        <Box display={'flex'}>
                                            {idx !== state.community!.verticals.length -1 && divider}
                                        </Box>

                                    </Box>
                                ))}
                            </Box>

                        </Typography>
                        <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                            <Typography className={classes.description} variant="body2" component="p">
                                {state.community.community.description}
                            </Typography>
                        </Box>
                        {state.community.memberCount > 0 && (
                            <Box display={'flex'} flexDirection={'row'} paddingY={1} flexWrap={'wrap'}>
                                <Typography className={classes.memberCount} variant="body2" component="p">
                                    {state.community.memberCount} members
                                    + {state.community.followerCount} followers
                                </Typography>
                            </Box>
                        )}
                    </CardContent>
                </Card>
                <Button
                    endIcon={<ChevronRightIcon/>}
                    onClick={() => {
                        window.open('subnub://c/' + state.community.community.communityId);
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
            alignItems: 'center',
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
        },
        memberCount: {
            fontSize: 16,
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 'bold',
        }
    }),
);


export default CHCommunity;
