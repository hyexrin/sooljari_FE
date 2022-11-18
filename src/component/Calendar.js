import React, { useEffect } from "react";
import "../App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";

const App = ({userName, calendar}) => {

  let now = new Date();
  let year = now.getFullYear();

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let todayMonthEng = month[now.getMonth()];
  let todayMonth = now.getMonth();
  let todayDate = now.getDate();

  // let today = year + "-" + todayMonth + "-" + todayDate;
  // let todayPlusFourMonth = year + "-" + (todayMonth + 4) + "-" + todayDate;

  // useEffect(()=>{
  //   console.log("+++++++++++++++++++++++++");
  //   console.log(now, year, todayMonth, todayDate);
  //   console.log(today);
  //   console.log(todayPlusFourMonth);
  //   console.log("+++++++++++++++++++++++++");
  // }, [])

  var resultArr = [];

 // 날짜 구하기
 var num = 0;
 calendar?.map((calendar)=>(
    userName === calendar.userName &&
    resultArr.push({ date: calendar.date, count: 4})
  ))

  // cnt 구하기
  var length = resultArr.length;
  console.log('length', length);

  for(var i = 0; i < length; i++) {
    var num = 0;
    var a = resultArr[i].date;
    for(var j = i; j < length; j++) {
      a === resultArr[j].date
      && (num = num + 1);
    }
    resultArr[i].count = num;
    console.log(resultArr[i].date, resultArr[i].count);
  }

  console.log('resultArr', resultArr)
  const result = resultArr;
  console.log('result >> ', result)

  // calendar value test 데이터
  // var test = [
  //   { date: '2022-11-1', count: 3},
  //   { date: '2022-11-5', count: 1},
  //   { date: '2022-11-11', count: 1},
  //   { date: '2022-11-14', count: 5}
  // ]
  // console.log('test', test)

  useEffect(() => {
    console.log('result >> ', result)
  }, [result])

  const navigate = useNavigate('/')

  return (
    <div className="container">
      <div> {year} </div>
      <div> {todayMonthEng} </div>
      <div>
        <CalendarHeatmap
          
          // 표시할 달
          startDate={new Date(now.setDate(now.getDate() - 30))}
          endDate={new Date(now.setDate(now.getDate() + 120))}

          values={result}

          // color
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) {
              return null;
            }
            // react-tooltip의 구성
            return {
              "data-tip": `${value.date}\n전통주 ${value.count
                }병 Clear!`, 
            };
          }}
        />
      </div>
      <ReactTooltip />
    </div>
  );
};

export default App;