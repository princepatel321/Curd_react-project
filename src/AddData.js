import axios from 'axios';
import React from 'react';

function AddData() {

  const [txt1,setTxt1] = React.useState("")
  const [txt2,setTxt2] = React.useState("")
  const onClickData  =()=>{
    var myformdata = new FormData()
    myformdata.append("todo_title",txt1)
    myformdata.append("todo_details",txt2)
    
    axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myformdata)
    .then(res =>{
      if(res.data.flag==="1"){
        alert(res.data.message)
      }else{
        alert("Issue")
      }
    })
    .catch(err=>alert(err))
}
const onClickData1 =()=>{
   var myobj ={
    todo_title:txt1,
    todo_details :txt2
   }
   var myjson = JSON.stringify(myobj)
    
    axios.post("https://akashsir.in/myapi/crud/todo-add-json.php",myjson,{
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res =>{
      if(res.data.flag==="1"){
        alert(res.data.message)
      }else{
        alert("Issue")
      }
    })
    .catch(err=>alert(err))
}

  return ( <>
  <h1>Add</h1>
            Title : <input type='text' onChange={(e)=>setTxt1(e.target.value)}/>
            Details : <input type='text'  onChange={(e)=>setTxt2(e.target.value)}/>
            <br/>
            <input type='button' onClick={onClickData} value="Method 1"/>
            <input type='button' onClick={onClickData1} value="Method 2"/>
  </> );
}

export default AddData;