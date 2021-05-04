import React from 'react'
import './flag.css'

export type flagProps = {
  flagUrl: string
}
export default function Flag({ flagUrl }: flagProps) {
  return <img className="imgflag" src={flagUrl} alt="flag" />
}
