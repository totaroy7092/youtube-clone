import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow.js";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';
import RestoreTwoToneIcon from '@mui/icons-material/RestoreTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <SidebarRow Selected Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={WhatshotTwoToneIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsTwoToneIcon} title="Subscription"/>
      <hr/>
      <SidebarRow Icon={VideoLibraryTwoToneIcon} title="Library"/>
      <SidebarRow Icon={RestoreTwoToneIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoTwoToneIcon} title="Your Videos"/>
      <SidebarRow Icon={WatchLaterTwoToneIcon} title="Library"/>
      <SidebarRow Icon={ThumbUpTwoToneIcon} title="Lided Videos"/>
      <SidebarRow Icon={ExpandMoreTwoToneIcon} title="Show More"/>
      <hr/>
    </div>
  )
}

export default Sidebar
