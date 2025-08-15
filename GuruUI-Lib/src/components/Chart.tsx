import * as React from 'react'
import { cn } from '../utils/cn'

export type ChartData = {
  label: string
  value: number
  color?: string
}

export type ChartProps = {
  data: ChartData[]
  type: 'bar' | 'line' | 'pie'
  width?: number
  height?: number
  className?: string
}

export const Chart: React.FC<ChartProps> = ({ 
  data, 
  type, 
  width = 400, 
  height = 300,
  className = '' 
}) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const totalValue = data.reduce((sum, d) => sum + d.value, 0)

  const renderBarChart = () => {
    return (
      <svg width={width} height={height} className="w-full h-auto">
        <g>
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * (height - 40)
            const barWidth = (width - 60) / data.length - 10
            const x = 30 + index * ((width - 60) / data.length)
            const y = height - 20 - barHeight
            
            return (
              <g key={index}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color || 'var(--guru-accent, #ffffff)'}
                  className="transition-all duration-300 hover:opacity-80"
                />
                <text
                  x={x + barWidth / 2}
                  y={height - 5}
                  textAnchor="middle"
                  className="text-xs fill-current text-[color:var(--guru-body,#b3b3b3)]"
                >
                  {item.label}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={y - 5}
                  textAnchor="middle"
                  className="text-xs fill-current text-[color:var(--guru-heading,#ffffff)]"
                >
                  {item.value}
                </text>
              </g>
            )
          })}
        </g>
      </svg>
    )
  }

  const renderLineChart = () => {
    const points = data.map((item, index) => {
      const x = 30 + (index / (data.length - 1)) * (width - 60)
      const y = height - 20 - (item.value / maxValue) * (height - 40)
      return `${x},${y}`
    }).join(' ')

    return (
      <svg width={width} height={height} className="w-full h-auto">
        <g>
          <polyline
            fill="none"
            stroke="var(--guru-accent, #ffffff)"
            strokeWidth="2"
            points={points}
            className="transition-all duration-300"
          />
          {data.map((item, index) => {
            const x = 30 + (index / (data.length - 1)) * (width - 60)
            const y = height - 20 - (item.value / maxValue) * (height - 40)
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill={item.color || 'var(--guru-accent, #ffffff)'}
                  className="transition-all duration-300 hover:r-6"
                />
                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  className="text-xs fill-current text-[color:var(--guru-heading,#ffffff)]"
                >
                  {item.value}
                </text>
                <text
                  x={x}
                  y={height - 5}
                  textAnchor="middle"
                  className="text-xs fill-current text-[color:var(--guru-body,#b3b3b3)]"
                >
                  {item.label}
                </text>
              </g>
            )
          })}
        </g>
      </svg>
    )
  }

  const renderPieChart = () => {
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 3

    let currentAngle = 0
    const slices = data.map((item, index) => {
      const sliceAngle = (item.value / totalValue) * 2 * Math.PI
      const startAngle = currentAngle
      const endAngle = currentAngle + sliceAngle
      
      const x1 = centerX + radius * Math.cos(startAngle)
      const y1 = centerY + radius * Math.sin(startAngle)
      const x2 = centerX + radius * Math.cos(endAngle)
      const y2 = centerY + radius * Math.sin(endAngle)
      
      const largeArcFlag = sliceAngle > Math.PI ? 1 : 0
      
      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ')
      
      currentAngle = endAngle
      
      return { pathData, item, index, startAngle, endAngle }
    })

    return (
      <svg width={width} height={height} className="w-full h-auto">
        <g>
          {slices.map(({ pathData, item, startAngle, endAngle }) => {
            const midAngle = (startAngle + endAngle) / 2
            const labelX = centerX + (radius * 0.7) * Math.cos(midAngle)
            const labelY = centerY + (radius * 0.7) * Math.sin(midAngle)
            
            return (
              <g key={item.label}>
                <path
                  d={pathData}
                  fill={item.color || `hsl(${(item.value / totalValue) * 360}, 70%, 60%)`}
                  className="transition-all duration-300 hover:opacity-80"
                />
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs fill-current text-[color:var(--guru-heading,#ffffff)] font-medium"
                >
                  {Math.round((item.value / totalValue) * 100)}%
                </text>
              </g>
            )
          })}
          
          {/* Legend */}
          <g transform={`translate(0, ${height - 60})`}>
            {data.map((item, index) => (
              <g key={index} transform={`translate(${index * 80}, 0)`}>
                <rect
                  width="12"
                  height="12"
                  fill={item.color || `hsl(${(item.value / totalValue) * 360}, 70%, 60%)`}
                  className="rounded"
                />
                <text
                  x="18"
                  y="9"
                  className="text-xs fill-current text-[color:var(--guru-body,#b3b3b3)]"
                >
                  {item.label}
                </text>
              </g>
            ))}
          </g>
        </g>
      </svg>
    )
  }

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart()
      case 'line':
        return renderLineChart()
      case 'pie':
        return renderPieChart()
      default:
        return null
    }
  }

  return (
    <div className={cn('w-full', className)}>
      {renderChart()}
    </div>
  )
}

Chart.displayName = 'Chart'
