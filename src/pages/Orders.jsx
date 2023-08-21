import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, Context, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids/src';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

import { Header } from '../components';
import { ContextMenu } from '@syncfusion/ej2/navigations';
const Orders = () => {
  return (
    <div className='m-2 dark:bg-secondary-dark-bg md:m-10 pt-10 sm:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Orders" category="Page" />

      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services = {[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders