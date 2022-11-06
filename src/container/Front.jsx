import React from 'react';

import Select from 'react-select';

import '../resources/assets/sass/front.scss'

function Front(props) {

    const usertypeList = [ 
        { 'label' : '원장', 'value' : 'head' },
        { 'label' : '선생님', 'value' : 'teacher' },
        { 'label' : '집사님', 'value' : 'parent' }
    ]

    return (
        <div className="frontPage">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4" style={{'textAlign': 'center', 'fontSize': '30px', 'marginTop' : '20px'}}>
                    Dogether
                </div>
                <div className="col-4"></div>
            </div>
            <div id="mainOrganizationBox" className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <Select 
                        className="selectUsertype"
                        classNamePrefix="select"
                        // onChange={setOrganization}
                        isSearchable={ true }
                        placeholder="계정 유형을 선택해주세요"
                        // onInputChange={ setInputChange }
                        options={usertypeList}
                        noOptionsMessage={() => '일치하는 유저타입이 없습니다.'} 
                    />
                </div>
                <div className="col-4"></div>
            </div>
            {/* {selectedOrganization.length == 0 ? null     
                : */}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form id="form-login" className="fade show">
                            <div className="form-group">
                            {/* <input placeholder="아이디" type="text" id="user_id" className="form-control form-control-lg" onChange={handleUserIDChange}></input> */}
                                <input placeholder="아이디" type="text" id="user_id" className="form-control form-control-lg" ></input>
                            </div>
                            <div className="form-group">
                            {/* <input placeholder="비밀번호" type="password" id="user_password" className="form-control form-control-lg" onChange={handlePasswordChange}></input> */}
                                <input placeholder="비밀번호" type="password" id="user_password" className="form-control form-control-lg"></input>
                            </div>
                            {/* <div className="btn-login" onClick={tryAuthLogin}>로그인</div> */}
                            <div className="btn-login" >로그인</div>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
                {/* } */}
        </div>
    );
}

export default Front;