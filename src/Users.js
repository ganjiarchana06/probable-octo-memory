import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';

const Users = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>
                setdata(response.data))
            .catch(err => {
                console.log(err);
            })
    });

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>body</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {data.map(r =>(
                        <tr>
                            <td>{r.id}</td>
                             <td>{r.title}</td>
                        <td>{r.body}</td>
                    </tr>))}
                </tbody>
        </table>
        </div >

    );

}

export default Users;

