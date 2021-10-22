import { MDBBtn, MDBIcon, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUserStart, loadUsersStart } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(loadUsersStart())
  }, [])

  useEffect(() => error && toast.error(error), [error])

  if(loading) {
    return (
      <MDBSpinner style={{marginTop: '150px'}} role='status'>
          <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    )
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure that you wanted to delete?")) {
      dispatch(deleteUserStart(id))
      toast.success("User Deleted Successfully")
    }
  }
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
          {users && users.map((item) => (
            <MDBTableBody>
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.role}</td>
                <td>
                  <MDBBtn className="m-1" tag="a" color="none" onClick={() => handleDelete(item.id)}>
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon fas icon="trash" style={{ color: "#dd4b39"}}
                      size="lg"
                    />
                    </MDBTooltip>
                  </MDBBtn>{" "}
                  <Link to={`/editUser/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon 
                      fas icon="pen" 
                      size="lg"
                      style={{ marginBottom: "10px" }}
                    />
                    </MDBTooltip>{" "}
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  )
}

export default Home
