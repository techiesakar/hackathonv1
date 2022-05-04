import React from 'react'

const Festival = () => {
  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <div>This is Festival</div>
  )
}

export default Festival