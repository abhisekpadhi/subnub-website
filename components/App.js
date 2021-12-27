import React from 'react'
import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {NextSeo} from "next-seo";

function App() {
  return (
    <div className="App">
        <NextSeo
            title={'SubNub - Solving hard problem of Bharat using technology'}
            description="SubNub is a startup focussed on solving hard problems of Bharat using technology at nation scale"
            canonical="https://subnub.com/"
            openGraph={{
                url: 'https://subnub.com/',
                title: 'SubNub - Solving hard problem of Bharat using technology',
                description: "SubNub is a startup focussed on solving hard problems of Bharat using technology at nation scale",
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
