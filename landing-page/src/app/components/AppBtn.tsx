import React from 'react';
import './AppBtn.css'; 

function AppBtn(props : any) {
  const { label, onClick } = props;

  return (
    <div>
    <button className="button">
      <span className="button-content" onClick={onClick}>{label}</span>
    </button>
  </div>
  );
}

export default AppBtn;
