import React from 'react'

const Heritage = () => {
  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <div>Heritage</div>
  )
}

export default Heritage