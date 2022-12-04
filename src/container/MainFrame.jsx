import Header from '../components/_commons/Header';
import SideBar from '../components/_commons/SideBar';
import AlbumContent from './AlbumContent';
import '../resources/assets/sass/Main.scss';
import React from 'react';
import MedicineContent from './MedicineContent';
function MainFrame(props) {
    return (
        <>
            <Header />
            <div style={{ display: 'flex'}}>
                <SideBar />
                <div className="contentBox">
                    <div className='contentBoxInner'>
                        <MedicineContent />
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainFrame;