import React from 'react'

export const Section = ({children, className}) => {
  return (
    <section className={`bg-[#F6F7F9] min-h-[calc(100vh-124px)] ${className}`}>{children}</section>
  )
}
