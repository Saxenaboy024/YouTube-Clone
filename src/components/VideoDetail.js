import Card from 'react-bootstrap/Card';
import{Container,Row,Col} from 'react-bootstrap'
function VideoDetail({video}) {
   
   if(!video) return <Container><Row><Col sm={12}><h1 style={{textAlign:"center"}}>Loading...</h1></Col></Row></Container>
 const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` 
   return (
  
  <>
 
  <Card>
 <iframe src={videoSrc} style={{height:"400px"}}>
</iframe>

   
 <Card.Body>
 <Card.Text>
     <h1>{video.snippet.title}</h1>
     <h5>{video.snippet.channelTitle}</h5>
   <h6>{video.snippet.description}</h6>
 </Card.Text>
 </Card.Body>
 </Card>
 
 </>
);
}

export default VideoDetail;