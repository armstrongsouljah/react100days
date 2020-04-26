import React from 'react';
import '../styles/banner.css'; 

const Banner = () => (
    <div class="banner">
        <div className="intro-text">
            <h1 className="banner-header">Tulye.com</h1>
            <p className="banner-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button class="learn">Learn More &rarr;</button>
        </div>
    </div>
);

export default Banner;
