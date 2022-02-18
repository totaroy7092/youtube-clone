import React from 'react';
import './SidebarRow.css'
import HomeIcon from '@mui/icons-material/Home';

function SidebarRow({ Selected, Icon, title }) {
  return (
    <div className={`SidebarRow ${Selected && "Selected"}`}>
        {<Icon className="SidebarRow__icons"/>}
      <h2 className="SidebarRow__title">{title}</h2>
    </div>
  )
}

export default SidebarRow
