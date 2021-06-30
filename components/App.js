import React from 'react'
import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {NextSeo} from "next-seo";

function App() {
  return (
    <div className="App">
        <NextSeo
            title={'SubNub: Drop-in audio chat social network'}
            description="SubNub is a brand new social network that enables creators and audience to connect intimately and casually through audio-only chatroom conversations."
            canonical="https://subnub.com/"
            openGraph={{
                url: 'https://subnub.com/',
                title: 'SubNub: Drop-in audio chat social network',
                description: "SubNub is a brand new social network that enables creators and audience to connect intimately and casually through audio-only chatroom conversations.",
                images: [
                    {
                        url: '/static/img/app_screnshot.png',
                        width: 800,
                        height: 600,
                        alt: 'subnub',
                    },
                ],
            }}
            twitter={{
                handle: '@subnubapp',
                site: '@subnubapp',
                cardType: 'summary',
            }}
        />
        <div>
            <Main />
        </div>
    </div>
  );
}

export default App;
