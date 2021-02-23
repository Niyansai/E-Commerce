import React from 'react'
import HeaderY from "../src/YoutubeClone/HeaderY";
import SideBar from "../src/YoutubeClone/SideBar";
import RecommendedVideos from "../src/YoutubeClone/RecommendedVideos";
import RightSideVideos from "../src/YoutubeClone/RightSideVideos";

function Row() {
    return (
        <div className="complete_page">

            {/* HeaderY */}<HeaderY />

            {/* Sidebar */}<div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <SideBar/>                            
                    </div>
                    <div className="col-7">
                    <RecommendedVideos />
                    </div>
                    <div className="col-3">
                      <RightSideVideos />  
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Row
