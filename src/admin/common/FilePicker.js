import React from 'react';


const filePicker = props => (
  <div>
    
    <input
      multiple
      className={[
        !props.valid ? 'invalid' : 'valid',
        props.touched ? 'touched' : 'untouched',
        'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
      ].join(' ')}
      type="file"
      id={props.id}
      onChange={e => props.onChange(props.id, e.target.value, e.target.files)}
      onBlur={props.onBlur}
    />
  </div>
);

export default filePicker;
