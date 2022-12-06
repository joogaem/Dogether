import Header from '../components/_commons/Header';
import SideBar from '../components/_commons/SideBar';
import { Routes, Route } from "react-router-dom";

import '../resources/assets/sass/Main.scss';
import React from 'react';

import HomeContent from './HomeContent';
import AlbumContent from './AlbumContent';
import ArlimContent from './ArlimContent';
import NoticeContent from './NoticeContent';
import FeedContent from './FeedContent';
import MedicineContent from './MedicineContent';
import PlanContent from './PlanContent';
import ScheduleContent from './ScheduleContent';
import AttendanceContent from './AttendanceContent';

function MainFrame(props) {
    return (
        <>
            <Header />
            <div style={{ display: 'flex'}}>
                <SideBar />
                <div className="contentBox">
                    <div className='contentBoxInner'>
                        <Routes>
                            <Route path="*" element={<HomeContent />} />   
                            <Route path="/arlim/*" element={<ArlimContent />} />   
                            <Route path="/album/*" element={<AlbumContent />} />
                            <Route path="/notice/*" element={<NoticeContent />} />
                            <Route path="/feed/*" element={<FeedContent />} />
                            <Route path="/medicine/*" element={<MedicineContent />} />
                            <Route path="/plan/*" element={<PlanContent />} />
                            <Route path="/schedule/*" element={<ScheduleContent />} />
                            <Route path="/attendance/*" element={<AttendanceContent />} />
                        </Routes>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainFrame;