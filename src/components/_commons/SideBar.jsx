import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../resources/assets/sass/SideBar.scss';

function SideBar(props) {
    const [selectedTab, setSelectedTab] = useState(0);
    const { pathname, state } = useLocation(0);

    useEffect(() => {
        if (pathname.indexOf('video') > 0) {
            setSelectedTab(1)
        }  
        else if (pathname.indexOf('subtitle') > 0) {
            setSelectedTab(2)
        }
        else if (pathname.indexOf('chapter') > 0) {
            setSelectedTab(3)
        }

    },[])

    return (
      <>
        <div className='sidebarContainer'>
          <div className="profileArea">
            <img className="sidebarProfileImage" src='/images/dduki_profile.png'/>
            <div className="profileContent">
                <div>오뚜기</div>
                <div>댕댕유치원</div>
                <div style={{ color: "#9AC1B8" }}>댕댕반</div>
            </div>
          </div>
          
          <div className='ticketArea'>
            <div>이용권</div>
            <div className='ticketCount'>
              <div>21회 / </div>
              <div style={{ color: "#888" }}> 30회</div>
            </div>
          </div>

          <div className='navbar'>
            <div className='MenuTitle' style={{ fontWeight: 'bold' }}>Menu</div>
            <nav>   
                <div>
                <Link to={'/'}>
                    <div className = {`${selectedTab === 0 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-home"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          홈
                      </div>
                    </div>
                  </Link>
                  <Link to={'/'}>
                    <div className = {`${selectedTab === 1 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-stopwatch"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          알림장
                      </div>
                    </div>
                  </Link>

                  <Link to={"/video"}>
                    <div className = {`${selectedTab === 2 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="far fa-images"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          앨범
                      </div>
                    </div>
                  </Link>

                  <Link to="/subtitle">
                    <div className = {`${selectedTab === 3 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-bullhorn"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          공지사항
                      </div>
                    </div>
                  </Link>

                  <Link to="/chapter">
                    <div className = {`${selectedTab === 4 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-bone"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          급여사료
                      </div>
                    </div>
                  </Link>

                  <Link to="/chapter">
                    <div className = {`${selectedTab === 5 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-pills"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          투약의뢰서
                      </div>
                    </div>
                  </Link>

                  <Link to="/chapter">
                    <div className = {`${selectedTab === 6 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i class="fas fa-file-invoice"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          계획안
                      </div>
                    </div>
                  </Link>

                  <Link to="/chapter">
                    <div className = {`${selectedTab === 7 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          일정표
                      </div>
                    </div>
                  </Link>

                  <Link to="/chapter">
                    <div className = {`${selectedTab === 8 ? 'nav-menu-items active' : 'nav-menu-items'}`}>
                      <div className = "selectMenuBar"></div>
                      <div className = "nav-menu-itemsIcon">
                        <i className="fas fa-user-check"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          출석표
                      </div>
                    </div>
                  </Link>

                  {/* <Link to="/analytics">
                    <div className = "nav-menu-items">
                      <div className = "nav-menu-itemsIcon">
                        <i className="far fa-cloud-upload"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          통계
                      </div> 
                    </div>
                  </Link>

                  {/* <Link to="/settings">                  
                    <div className = "nav-menu-items">
                      <div className = "nav-menu-itemsIcon">
                        <i className="far fa-address-card"></i>
                      </div>
                      <div className = "nav-menu-itemsText">
                          설정
                      </div>
                    </div>
                  </Link> */}
                 </div>
            </nav>
          </div> 

        </div>
      </>
    );
  };


export default SideBar;
