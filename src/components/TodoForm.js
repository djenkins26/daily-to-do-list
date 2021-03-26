import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  // array of inputs, create an edit and can see your previous todo
  const [input, setInput] = useState(props.edit ? props.edit.value
  : '');

  const inputRef = useRef(null)

  useEffect(() => {
    // focus on what you put in ref
    inputRef.current.focus()
  })

  // handle function
  const handleChange = e => {
    setInput(e.target.value);
  };
  // prevent page from refreshing
  const handleSubmit = e => {
    e.preventDefault();
    // trying not to get the same id
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    // setting the input to invisible
    setInput('');
  };

  // create a form
  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input
          type='text'
          placeholder='Update'
          value={input}
          name='text'
          className='to-do-input edit'
          onChange={handleChange}
          ref={inputRef}
        />
        <button className='to-do-button edit'>Update to-do</button>
        </>
      ) : (
      <>
        <input
          type='text'
          placeholder='Add a to-do'
          value={input}
          name='text'
          className='to-do-input'
          onChange={handleChange}
          ref={inputRef}
        />
        <button className='to-do-button'>Add to-do</button>
      </>
    )}
</form>
);
}

export default TodoForm;
