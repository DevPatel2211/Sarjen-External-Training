import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h2>Task 14 - Fetch API Users</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {users.map((u) => (
          <div key={u.id} style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
            <h4>{u.name}</h4>
            <p>Email: {u.email}</p>
            <p>Phone: {u.phone}</p>
            <p>City: {u.address.city}</p>
            <p>Company: {u.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchUsers;
