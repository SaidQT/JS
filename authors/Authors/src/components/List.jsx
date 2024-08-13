import React from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {
    return (
        <div>

            <table className="table col">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, i) => (
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/author/${author._id}/edit`} className="btn btn-info mx-2 text-white">Edit</Link>
                                <button className="btn btn-danger" onClick={() => props.delete(author._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default List;

