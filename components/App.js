import React from 'react'
import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { NextSeo } from "next-seo";
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

function App() {
    const zut = () => {
        return (
            <div>
                zut
            </div>
        )
    };
    const audio = () => {
        return (
            <div>
                <NavBar />
                <Main />
                <Footer />
            </div>
        )
    };
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
        <Box flexDirection={'column'} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'} paddingX={4} textAlign={'center'}>
            <NavBar />

            <p style={{fontSize: '1.4rem', padding: 20, textAlign: 'center'}}>
                We are building a product for small & medium businesses to generate organic sales at 0 upfront cost.
            </p>

            <p style={{fontSize: '1rem', padding: 20}}>
                Get in touch 👇
            </p>
            <p style={{padding: 20}}>
                ☎️ +919439831236 <br /> 📬 abhisek@subnub.com
            </p>

            <p style={{fontSize: '1rem', padding: 20}}>
                &copy; SUBNUB TECHNOLOGIES PVT. LTD.
            </p>

        </Box>
        {/*{audio()}*/}

    </div>
  );
}

export default App;
