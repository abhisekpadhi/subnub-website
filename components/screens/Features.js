import React from "react";


function Features(){
    return(
        <div className='features'>
            <div className='feature-main'>
               Our Exciting Features
            </div>
            <div className='features-components'>
                <div className='live-conversation'>
                    <div className='part-info'>
                        <div className='main-info'>
                            Live Conversations
                        </div>
                        <div className='sub-info'>
                            The vibes of Subnub's rooms are similar to those of a coffee shop or a bar
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img className='feature-image' src={'/website_assets/WebsiteFeature_1.png'} alt="website-feature_1"/>
                    </div>
                </div>
                <div className='explore-room'>
                    <div className="part-info">
                        <div className='main-info'>
                            Explore Rooms
                        </div>
                        <div className='sub-info'>
                            Be a part of different conversations based on your interest by hopping in & out of rooms
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img className='feature-image' src={'/website_assets/WebsiteFeature_2.png'} alt="website-feature_2"/>
                    </div>
                </div>
                <div className='chat'>
                    <div className='part-info'>
                        <div className='main-info'>
                            Chat
                        </div>
                        <div className='sub-info'>
                            Connect with people via private one-to-one chat and get to know them better
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img className='feature-image' src={'/website_assets/WebsiteFeature_3.png'} alt="website-feature_3"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Features