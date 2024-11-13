import axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';

function DisplayData() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
            .then(res => {
                setData(res.data.todo_list)
            })
            .catch(err => alert(err))
    }

    const deleteData = (id) => {

        
        var myformdata = new FormData()
        myformdata.append("todo_id", id)
        axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php", myformdata)
            .then(res => {
                console.log(res)
                getData()
            })
            .catch(err => alert(err))
        

    }
    return (<>
        <h1>Display</h1>

        <table border={1}>
            {data.length > 0 && data.map((value, index) => {
                var id = `edit/${value.todo_id}`
                return (<tr>
                    <td>{value.todo_id}</td>
                    <td>{value.todo_title}</td>
                    <td>{value.todo_date}</td>
                    <td>
                        <Link to={id}>Edit</Link> |
                        <button onClick={() => deleteData(value.todo_id)}>X</button></td>
                </tr>)
            })  }
        </table>
    </>);
}


export default DisplayData