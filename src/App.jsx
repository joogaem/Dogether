import React, {useState, useEffect } from 'react';

import axios from 'axios';

import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Front from './container/Front';
import MainFrame from './container/MainFrame';

import ScrollTop from './components/_commons/ScrollTop';

import './resources/assets/sass/_commons.scss';

function App() {

  // const userToken = useSelector(state => state.user.userToken);
  // const dispatch = useDispatch();  

  // useEffect(() => {
      
  //   var data = JSON.stringify({"listToken":"En7lfpF74U8QA39uo8F0PkzeLbTtti"});
  //   var config = {
  //     method: 'post',
  //     url: API_URL + '/' + API_VERSION + '/organization/getOrganization',
  //     headers: { 
  //       'Content-Type': 'application/json'
  //     },
  //     data : data
  //   };
    

  //   axios(config)
  //   .then( (response) => {
  //       if(response.data.code==100){
          
  //         var tmpSelectOrganizationList = [];

  //         response.data.organizationList.map((val,key) =>{

  //             tmpSelectOrganizationList[key] = {
  //                 value : val.organization_code,
  //                 label : val.organization_name,
  //                 open_token : val.open_key,
  //               }
  //           });

  //           dispatch(setOrganizationList([...tmpSelectOrganizationList]));
  //       }
          
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
      
  // }, []);
  //console.log(process.env.API_URL);
  
  return (

    <HashRouter>
      <ToastContainer/>
          <ScrollTop>
              <Routes>
                //로그인 전
                  {/* <Route exact path="/" element={<Front />} />   */}
                
                //로그인 후
                  <Route exact path="/" element={<MainFrame />} />
                  {/* <Route path="/video" component={Video} />   
                  <Route path="/subtitle" component={Subtitle} />
                  <Route path="/chapter" component={Chapter} />
                  <Route path="/analytics" component={Analytics} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/PopupManager/subtitle/:key" component={PopupManager} />
                  <Route path="/PopupManager/chapter/:key" component={PopupManager} /> */}
              </Routes>
          </ScrollTop>
    </HashRouter>
  )

}

export default App; 