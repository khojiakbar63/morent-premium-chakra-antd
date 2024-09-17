import React from 'react'

export const Container = ({children, className}) => {
  return (
    <div className={`mx-auto ${className}`}>{children}</div>
  )
}
