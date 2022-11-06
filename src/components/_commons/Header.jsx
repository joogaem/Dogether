import '../../resources/assets/sass/Header.scss';

import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// import { setUserToken } from '../../modules/user'

const Header = () => {
    const [profileOpen, setProfileOpen] = useState(false)
    // const dispatch = useDispatch();

    // const userData = JSON.parse(useSelector(state => state.user.userData));
    // const organizationData = useSelector(state => state.organization.organizationData);
    // // const uuid = useSelector(state => state.media.uuid);
    // // const fileName = useSelector(state => state.media.fileName);
    // // const sidebarState = useSelector(state => state.status.sidebarState);

    // function handleLogout() {
    //     dispatch(setUserToken(''))
    // }
    // const popover = (
    //     <Popover id="popover">
    //        <Popover.Content>
    //           {/* <div><a href='#'> 정보 </a></div>
    //           <div> 수정 </div> */}
    //           <div onClick={handleLogout}> 로그아웃 </div>
    //        </Popover.Content>
    //     </Popover>
    //  );

    return (
        <div id="header">


            {/* <Link to="/video">
                <div className='uploadBtn'>
                    <div className = "uploadBtn_icon">
                        <i className="fas fa-video"></i>
                    </div>
                    <div> 만들기 </div>
                </div>
            </Link> */}

            <div className='profile'>
                <div className ="profile_header" >
                    <div className = "profile_icon">
                        {/* 프로필 이미지 없을 때 */}
                        <i className="fa fa-solid fa-user"></i>
                        
                        {/* //로그인 후 프로필 이미지 있을 때
                        <img className="coursemosImage" src='/images/dduki_profile.png' style = {{ width: 40, marginRight: 10}} /> */}
                    </div>
                </div>
                <div className ="profile_name" onClick={() => profileOpen ? setProfileOpen(false) : setProfileOpen(true)}>
                    <div> 뚜기 </div>
                    {
                        profileOpen ?
                            <i className="fas fa-caret-up"></i> 
                        : 
                            <i className="fas fa-caret-down"></i>
                    }
                </div>
                <div className={ profileOpen ? 'dropdownProfile active' : 'dropdownProfile' }>
                    <ul>
                        <li>프로필 수정</li>
                        <li>로그아웃</li>
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Header;