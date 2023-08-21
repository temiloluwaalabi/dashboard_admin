import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';
const Calendar = () => {
  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 pt-10 bg-white mt-24 p-2 md:p-10 rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop, WorkWeek]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar