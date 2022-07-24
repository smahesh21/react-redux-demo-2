import { useEffect } from "react"
import { connect } from "react-redux"
import {fetchUsers } from '../redux'

const UserContainer = ({userData,fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    },[])
    return (
        <div>
            {userData.loading ? (<h2>Loading</h2>) : null}
            {userData.error ? (<h2>{userData.error}</h2>) : <div>
                <h2>Users List</h2>
                <div>
                {
                    userData && userData.users && userData.users.map(user=><li key={user.id}>{user.name}</li>)
                }
                </div>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)