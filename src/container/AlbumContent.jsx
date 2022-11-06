import React from 'react';
import AlbumCard from '../components/home/AlbumCard';

function AlbumContent(props) {
    return (
        <div className='arlimContainer'>
            <div className='arlimHomeTitle'>
                <div className='menuTitle'>앨범</div>
                <div className="plusBtn">
                    <i className="fas fa-plus"></i>
                </div>
            </div>
            <AlbumCard />
        </div>
    );
}

export default AlbumContent;