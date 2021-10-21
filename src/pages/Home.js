import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBTooltip, MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsersStart } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(loadUsersStart())
  }, [])

  const handleDelete = (id) => {

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
                  </MDBBtn>
                </td>
                </tr>
            </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  )
}

export default Home
