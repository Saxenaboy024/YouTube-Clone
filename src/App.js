
import React,{useEffect,useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import {Container, Row,Col} from 'react-bootstrap'
import youtube from './api/youtube';

function App() {

const [videos,setVideos] = useState([])
const [selectedVideo,setSelectedVideo] = useState('')  

//console.log(selectedVideo)
const onVideoSelect = (video) =>{
  setSelectedVideo(video)
}

useEffect(()=>{
      async  function handlesubmit(){
        const response = await youtube.get('search',{
          params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyD6LbBSTGQuy1cfQbrsvz-PznAaFhDSfxI',
            q:"reactjs"     
          }
        })
       //console.log(response)
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
      }
      handlesubmit()
  },[])

  const submitHandler = async (searchTerm) =>{
    const response = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyD6LbBSTGQuy1cfQbrsvz-PznAaFhDSfxI',
        q:searchTerm     
      }
    })
     setVideos(response.data.items)
     setSelectedVideo(response.data.items[0])
  }

  return (
     <Container>
     <SearchBar onFormSubmit={submitHandler}/>
     <Row>
      <Col sm={8}>
      <VideoDetail video={selectedVideo}/>
      </Col>
       <Col sm={4}>
       <VideoList videos = {videos} onVideoSelect={onVideoSelect}/> 
      
      </Col>
     </Row>
  
   
     </Container>    
   
  );
}

export default App;
