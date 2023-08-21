import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page,Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids/src';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';

import { Header } from '../components';
import { ContextMenu } from '@syncfusion/ej2/navigations';
const Employees = () => {
  return (
    <div className='m-2 dark:bg-secondary-dark-bg md:m-10 pt-10 sm:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Employees" category="Page" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services = {[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees