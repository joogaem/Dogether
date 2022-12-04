import React from 'react';
import '../resources/assets/sass/medicine.scss';
function MedicineContent(props) {

    var data = [
        {
            image : "사진",
            check : "1",
            name : "5뚜기",
            classs : "발랄반",
            date : "2022.05.05"
        },
        {
            image : "사진",
            check : "1",
            name : "김모카",
            classs : "발랄반",
            date : "2022.05.05"
        },
        {
          image : "사진",
          check : "1",
          name : "오레오",
          classs : "발랄반",
          date : "2022.05.05"
      }
    ]

    return (
        <>
        <div>
            <div className='menuTitle'>투약의뢰서</div>
            <div className='menuTitleSub'>금일 우리 아이의 투약을 선생님께 의뢰합니다.</div>
        </div>
        <table>
        <tbody>
          {data.map(({ image, check, name, classs, date }, idx) => (
            <tr className='medicineTable' key={idx}>
              <td>
                <div className='medicineLeft'>
                  <div className='image'></div>
                  <div className='name'>{name}</div>
                  <div className='classs'>({classs})</div>                                    
                </div>
              </td>
              <td className='date'>{date}</td>
              <td className='check'><input type="checkbox"></input></td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
}

export default MedicineContent;