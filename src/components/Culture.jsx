import React from 'react'

const Culture = () => {
  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <div>This is Culture</div>
  )
}

export default Culture