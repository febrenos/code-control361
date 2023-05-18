import React from 'react'
import './style.css'

interface ProgressBarProps {
  steps: number
  finished: number
}

export default function ProgressBar({ steps, finished }: ProgressBarProps) {
  const lstSteps: number[] = []
  let renderFirstLine = false
  for (let i = 1; i <= steps; i++) {
    lstSteps.push(i)
  }

  return (
    <div className="progressBar">
      {lstSteps.map((num) => (
        <React.Fragment key={num}>
          {renderFirstLine ? (
            <div
              className={`line ${num <= finished ? 'backgroundLine' : ''}`}
            ></div>
          ) : (
            (renderFirstLine = true)
          )}
          <div
            className={`ball ${num <= finished ? 'backgroundBall' : ''}`}
            key={num}
          >
            <p>{num}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
