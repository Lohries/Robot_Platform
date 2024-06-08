import React from 'react'
import { Link } from 'react-router-dom'
const ClassificationButton = () => {
  return (
    <div class="button-classification">
      <Link to='/classifier'><button>Classification</button></Link>
    </div>
  )
}

export default ClassificationButton
