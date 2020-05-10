import React, { useState, useRef } from 'react';
import fetch from 'isomorphic-unfetch';

function Subscribe() {
   const [message, setMessage] = useState('');
   const inputEl = useRef(null);

   const subscribe = async (e) => {
      e.preventDefault();
      /** send a request to our API with the user's email address */
      const res = await fetch('/api/subscribe', {
         body: JSON.stringify({
            email: inputEl.current.value
         }),
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST'
      });
      
      const { error } = await res.json();

      if (error) {
         /** if error, update message in state */
         setMessage(error);
         return;
      }
      inputEl.current.value = '';
      setMessage('Success! 🎉 You are now subscribed to the newsletter.');
   };
   return (
      <form onSubmit={subscribe}>
         <label htmlFor="email-input">{'Email Address'}</label>
         <input 
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            ref={inputEl}
            type="email"
         />
         <div>
            {message ? message : `I'll only send emails when new content is posted. No spam.`}
         </div>
         <button type="submit">{'✨ Subscribe 💌'}</button>
      </form>
   );
};

export default Subscribe

