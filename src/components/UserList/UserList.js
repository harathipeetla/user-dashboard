import "./UserList.css"
const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="user-list-container">
      {users.map((user, index) => (
        <div key={user.id || `user-${index}`} className="user-card-container">
            <p><strong>ID: </strong>{user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };

  export default UserList