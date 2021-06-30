import React from 'react';


function Cards(){
    return(
        <div className='card'>
            <div className='card-info'>
                <div className='name-desg'>
                    <div className='card-name'>
                        <strong>Elon Musk</strong>
                    </div>
                    <div className='designation'>
                        CEO @ Tesla, Boring Company, Space X
                    </div>
                </div>
                <img className="card-image" src="https://thispersondoesnotexist.com/image" alt="card_avatar"/>
            </div>
            <div className='card-content'>
                <div>
                    <img className='left-quote' src={'/website_assets/left-quotes-svgrepo-com.png'} alt="left_quote"/>
                </div>
                <div className='content'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div>
                    <img className='right-quote' src={'/website_assets/right-quotes-svgrepo-com.png'} alt="right_quote"/>
                </div>
            </div>
        </div>
    )
}

export default Cards