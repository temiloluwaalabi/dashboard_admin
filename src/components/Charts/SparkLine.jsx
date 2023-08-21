import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts/src'

class SparkLine extends React.PureComponent {
  render(){
    const { id, height, width, color, datar, type, currentColor} = this.props;

    return(
      <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{color:currentColor, width:2}}
      dataSource={datar}
      xName="xval"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible:true, format: '${xval} : ${yval}',
        trackLineSettings: {
          visible:true,
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
    )
  }
}


export default SparkLine