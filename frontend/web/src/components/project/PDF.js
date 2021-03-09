// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
import React, { useState, useEffect } from 'react';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import './App.css';

const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");


function Board(props){
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
  <>
  <br></br>
  <br></br>
  <div style={{width:"97%"}}>
    <Viewer
      fileUrl={require(`./projects/${props.match.params.file}`)}
      defaultScale={0.8}
      plugins={[
        // Register plugins
        defaultLayoutPluginInstance
      ]}
      />
  </div>
    
  </>
  );
}

export default Board;
