import React from 'react';

import ArlimHomeCard from '../components/home/ArlimHomeCard';

function MainContent(props) {
    return (
        <div className='arlimContainer'>
            <div className='arlimHomeTitle'>
                <div className='menuTitle'>알림장</div>
                <div className="plusBtn">
                    <i className="fas fa-plus"></i>
                </div>
            </div>
            <ArlimHomeCard />
        </div>
    );
}

export default MainContent;