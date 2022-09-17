import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'

function SearchBar({onFormSubmit}){

   const [search,setSearchTerm] = useState('')

return <Form onSubmit={(e)=>{
   e.preventDefault();
   onFormSubmit(search)
}}>
    {JSON.stringify(search)}
<Form.Group className="mb-3">
   <div style={{display:"flex"}}>
<Form.Control type="text" placeholder="Search..." value={search} onChange={e=>setSearchTerm(e.target.value)} />
<Button variant="danger" type="submit">Search</Button>
</div>
</Form.Group>
</Form>
}


export default SearchBar