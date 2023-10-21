import React from 'react'
import '../ChartBar/chart-bar.css'

export default function ChartBar(props) {
  let filledHeight = '0%'
  if (props.maxValue > 0){
    filledHeight = Math.round(props.value / props.maxValue * 100) + '%'
  }
  return (
    <div className='chart-bar'>
        <div className='chart-bar-container'>
            <div className='chart-bar-fill' style={{ height: filledHeight }}></div>
        </div>
        <div className='chart-bar-label'>{props.label}</div>
    </div>
  )
}
