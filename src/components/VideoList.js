import VideoItem from "./VideoItem"

function VideoList({videos,onVideoSelect}){
  

    return <div>
        {videos.map((vid,idx) => <VideoItem key={idx} video={vid} onVideoSelect={onVideoSelect}/>)}
       
    </div>
}

export default VideoList