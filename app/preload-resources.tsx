'use client'
 
import ReactDOM from 'react-dom'
 
export function PreloadResources() {
  // @ts-ignore
  ReactDOM.preconnect('https://fonts.googleapis.com', { crossOrigin: 'anonymous' })
  // @ts-ignore
  ReactDOM.preconnect('https://fonts.googleapis.com')
 
  return null
}
