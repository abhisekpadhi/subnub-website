import React from "react";
import {Container} from "@material-ui/core";
import dayjs from "dayjs";
import Box from "@material-ui/core/Box";


function Intro(){
    return(
        <div>
            <Container>
                <div
                    className="intro"
                    style={{
                        boxShadow: '1px 1px 39px 20px rgba(0,0,0,0.15)',
                        paddingTop: '4rem', marginTop: '4rem', borderRadius: 20}}>
                    <div className='main-text'>
                        <div className='heroPara'>
                            <img
                                style={{
                                    width: 180,
                                    height: 180,
                                    borderRadius: 20,
                                }}
                                src={'/logo.png'}
                                alt="download on app store"/>
                            <div >
                                SubNub
                            </div>

                        </div>
                        <div className='secondPara'>
                            <div>
                                We are solving hard problems of Bharat 🇮🇳 using technology for the next billion consumers.
                            </div>
                        </div>
                        <div className='secondPara'>
                            <div>
                                Our products:
                            </div>
                        </div>

                        <a
                            target={'_blank'}
                            href={'https://licily.com'}
                            style={{fontSize: '2rem',   color: '#E63030'}}
                        >
                            Licily.com - Reliable & quick essentials delivery at nation scale
                        </a>
                        <div style={{marginBottom: '4rem'}} />
                        <Box>
                            &copy; {dayjs().year()} SubNub Technologies Pvt. Ltd.
                        </Box>
                        <div style={{marginBottom: '4rem'}} />
                    </div>


                </div>
            </Container>
        </div>
    )
}


export default Intro
