import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { env } from './config';

function Users() {

    const [users, setUsers] = useState([]);

    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let users = await axios.get(`${env.api}/allusers?limit=100&offset=0`,{
            headers :{
                'authorization' : window.localStorage.getItem("app-token")
            }
        });

        setUsers(users.data);
        setLoading(false);
    }



return (
 <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Users</h1>
        
            </div>
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">User Data Details</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            users.map((user, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    
                                                   
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Users;