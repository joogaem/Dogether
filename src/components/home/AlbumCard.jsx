import React from 'react';

function AlbumCard(props) {
    return (
        <div className='albumCards'>
            <div className='albumCard'>
                <div className='albumImg'> 
                    <img src="/images/dduki_profile.png"></img>
                </div>
                <div className='albumCardContent'>
                    <div className='albumDate'>
                        <div>2022/02/10</div>   
                    </div>
                    <div className='albumTitle'>뚜기의 할로윈</div>
                </div>
            </div>
            <div className='albumCard'>
                <div className='albumImg'> 
                    <img src="/images/dduki_profile.png"></img>
                </div>
                <div className='albumCardContent'>
                    <div className='albumDate'>
                        <div>2022/02/10</div>   
                    </div>
                    <div className='albumTitle'>뚜기와 모카의 일상</div>
                </div>
            </div>
            <div className='albumCard'>
                <div className='albumImg'> 
                    <img src="/images/dduki_profile.png"></img>
                </div>
                <div className='albumCardContent'>
                    <div className='albumDate'>
                        <div>2022/02/10</div>   
                    </div>
                    <div className='albumTitle'>가을을 맞이한 뚜기</div>
                </div>
            </div>
            <div className='albumCard'>
                <div className='albumImg'> 
                    <img src="/images/dduki_profile.png"></img>
                </div>
                <div className='albumCardContent'>
                    <div className='albumDate'>
                        <div>2022/02/10</div>   
                    </div>
                    <div className='albumTitle'>벚꽃 구경가는 뚜기와모카</div>
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;