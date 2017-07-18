
import React from 'react'

if(typeof window !== 'undefined') {
  window.React = React
  window.localStorage = () => {
    let storage = {}
    return {
      setTtem: (key, value) => {
        storage[key] = value || ''
      }
    }
  }
}
