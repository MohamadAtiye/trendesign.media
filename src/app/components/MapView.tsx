import React from "react";
import { Box } from "@mui/material";
import Iframe from "react-iframe";

const MapView: React.FC = () => {
  return (
    <Box>
      <Iframe
        // url="https://maps.google.com/maps?q=33.851209,35.504244&t=&z=14&ie=UTF8&iwloc=&output=embed"
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4975014942033!2d35.50165681176141!3d33.85106732821375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f171aef0fb077%3A0x47d318fbb4b82763!2sTrendesign!5e0!3m2!1sen!2slb!4v1708430651142!5m2!1sen!2slb"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </Box>
  );
};

export default MapView;
