import React from 'react';


const filePicker = props => (
  <div className="upload-btn-wrapper">
    <button class="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">Upload a file</button>
      <input 
      accept="image/x-png,image/gif,image/jpeg"
      className={[
        !props.valid ? 'invalid' : 'valid',
        props.touched ? 'touched' : 'untouched',
        
      ].join(' ')}
      type="file"
      id={props.id}
      onChange={e => props.onChange(props.id, e.target.value, e.target.files)}
      onBlur={props.onBlur}
      />
  </div>
    
    
);

export default filePicker;
