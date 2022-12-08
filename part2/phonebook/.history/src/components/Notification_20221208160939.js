import React from 'react'

export const Notification = ({ message }) => {
    if (message === null) {
        return null;
      } else if(message.includes("previously")){
        return <div className="error">{message}</div>;
      }
  return (
    <div className='success'>
    {message}
  </div>
  )
}

export default Notification;
