import React, { useState } from 'react'
import { data } from '../assets/userdata.js'

function UsersList() {

    const [search, setSearch] = useState('');


    return (
        <div className='w-full h-full'>
            <div className='p-10'>
                <h1 className='text-3xl font-semibold text-gray-950'>Filter Table Data</h1>
                <div className='my-5'>
                    <input
                        className='w-80 p-2 border-gray-500 rounded-lg border-2 focus:border-black bg-gray-50'
                        placeholder='Search Text'
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-200 border-b">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-600">S.No</th>
                                <th className="px-4 py-2 text-left text-gray-600">First Name</th>
                                <th className="px-4 py-2 text-left text-gray-600">Last Name</th>
                                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                                <th className="px-4 py-2 text-left text-gray-600">Mobile Number</th>
                                <th className="px-4 py-2 text-left text-gray-600">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.filter((item) => {

                                    return item === '' ? item :
                                        item.first_name.toLowerCase().includes(search) ||
                                        item.last_name.toLowerCase().includes(search) ||
                                        item.email.toLowerCase().includes(search) ||
                                        item.phone.includes(search) ||
                                        item.city.toLowerCase().includes(search);


                                }).map((item, id) => (
                                    <tr key={id} className={`${id % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b hover:bg-gray-300`}>
                                        <td className="px-4 py-2 text-gray-700">{id + 1}</td>
                                        <td className="px-4 py-2 text-gray-700">{item.first_name}</td>
                                        <td className="px-4 py-2 text-gray-700">{item.last_name}</td>
                                        <td className="px-4 py-2 text-gray-700">{item.email}</td>
                                        <td className="px-4 py-2 text-gray-700">{item.phone}</td>
                                        <td className="px-4 py-2 text-gray-700">{item.city}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default UsersList