import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils'
import closeIcon from './close-icon.png';

export function Notifications() {
  return (
    <div className="Notifications">
      <button 
        onClick={() => console.log("Close button has been clicked")}
        aria-label='close'
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: '',
          cursor: 'pointer'
        }}>
      <img src={closeIcon} alt="Close icon" style={{ width: '15px', height: '15px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{_html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}