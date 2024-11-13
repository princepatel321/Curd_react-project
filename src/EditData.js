
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function EditData() {

    const {id} = useParams()
    const [data,setData] = React.useState({})
    const mynavigation = useNavigate()
    React.useEffect(()=>{
        axios.get(`https://akashsir.in/myapi/crud/todo-detail-api.php?todo_id=${id}`)
        .then(res=>{
            console.log(res)
             setData(res.data)
        })
    },[])

    const updateData = () =>{
        var myformdata = new FormData()
        myformdata.append("todo_id",id)
        myformdata.append("todo_title",data.todo_title)
        myformdata.append("todo_details",data.todo_details)
        axios.post("https://akashsir.in/myapi/crud/todo-update-api.php",myformdata)
        .then(res=>{
            //alert(res.data.message)
            mynavigation('/')
        })
        .catch(err=>alert(err))
    }
return (<>
<h1>Edit</h1>
    ID is :  {id}<br/>
    Title : <input type='text' onChange={(e)=>setData({...data,todo_title:e.target.value})} value={data.todo_title}/> <br/>
    Details : <input type='text'  onChange={(e)=>setData({...data,todo_details:e.target.value})}  value={data.todo_details}/> <br/>
    <input type='button' value="Update" onClick={updateData}/>
    <input type='button' value="goBack" onClick={()=>mynavigation(-1)}/>
    </>  );
}

export default EditData;