import { useQuery } from "@tanstack/react-query";



const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handelAdmin = item => {
        fetch(`http://localhost:5000/users/admin/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount)
                    alert('you are admin now')
            })
    };

    const handelDelete = item => {
        fetch(`http://localhost:5000/users/admin/${item._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    alert('user deleted')
                }
            })
    };

    return (
        <div className="p-20">
            {/* <div className="">
            <SectionTitle subHeading={'My users'} heading={'wanna add more'}></SectionTitle>
        </div> */}
            <h2>my order {users?.length}</h2>
            {/* <h4>to-tal price ={total}</h4> */}
            <section className="">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th>action</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">Desktop </span>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.role === 'admin' ? 'admin' : <button
                                            onClick={() => handelAdmin(item)}
                                            className="btn bg-orange-200 btn-xs">put admin</button>}</td>
                                        <th>
                                            <button
                                                onClick={() => handelDelete(item)}
                                                className="btn bg-red-500 btn-xs">delete</button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>


                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllUsers;