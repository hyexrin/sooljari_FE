import React, { useEffect } from "react";
import "../App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const App = () => {

  let now = new Date();
  let year = now.getFullYear();

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let todayMonthEng = month[now.getMonth()];
  let todayMonth = now.getMonth();
  let todayDate = now.getDate();

  let today = year + "-" + todayMonth + "-" + todayDate;
  let todayPlusFourMonth = year + "-" + (todayMonth + 4) + "-" + todayDate;

  useEffect(()=>{
    console.log(now, year, todayMonth, todayDate);
    console.log(today);
    console.log(todayPlusFourMonth);
  }, [])
 


  return (
    <div className="container">
      <div> {year} </div>
      <div> {todayMonthEng} </div>
      <div>
        <CalendarHeatmap
          // 표시할 달
          startDate={new Date(today)}
          endDate={new Date(todayPlusFourMonth)}

          values={[
            { date: "2022-08-22", count: 2 },
            { date: '2022-10-01', count: 1 },
            { date: '2022-10-03', count: 2 },
            { date: '2022-10-06', count: 3 },
            { date: '2022-10-10', count: 4 },
            { date: '2022-10-07', count: 1 },
            { date: '2022-09-15', count: 3 },
            // ...and so on
          ]}

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