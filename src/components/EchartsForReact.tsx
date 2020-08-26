import React, {useEffect, useRef} from "react";
import echarts from 'echarts'

type Props = {
  options: Object,
  className?: string
}

const EchartsForReact: React.FC<Props> = ({options, className}) => {
  const container = useRef<HTMLDivElement>(null)
  const chart = useRef(null)

  useEffect(() => {
    // @ts-ignore
    chart.current = echarts.init(container.current)
  }, [])

  useEffect(() => {
    // @ts-ignore
    chart.current.setOption(options)
  }, [options])

  return (
      <div ref={container} className={className}/>
  )
}

export default EchartsForReact