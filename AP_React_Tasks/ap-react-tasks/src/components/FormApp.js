import React, { useState } from "react";

const CITIES = ["---Select City---", "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhi Nagar"];

function FormApp() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [city, setCity] = useState("");
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("formRecords");
    return saved ? JSON.parse(saved) : [];
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  function toggleHobby(h) {
    setHobbies((prev) =>
      prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]
    );
  }

  function validate() {
    if (!name.trim()) return "Name is required";
    if (!/^\d{10}$/.test(mobile)) return "Mobile must be 10 digits";
    if (!gender) return "Select gender";
    if (!city || city === "---Select City---") return "Select a city";
    return "";
  }

  function submit() {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    let updated;
    if (editId) {
      updated = records.map((r) =>
        r.id === editId ? { id: editId, name, mobile, gender, hobbies, city } : r
      );
      setEditId(null);
    } else {
      const newRecord = { id: Date.now(), name, mobile, gender, hobbies, city };
      updated = [...records, newRecord];
    }
    setRecords(updated);
    localStorage.setItem("formRecords", JSON.stringify(updated));
    setName(""); setMobile(""); setGender(""); setHobbies([]); setCity("");
  }

  function deleteRecord(id) {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem("formRecords", JSON.stringify(updated));
  }

  function editRecord(r) {
    setEditId(r.id);
    setName(r.name); setMobile(r.mobile); setGender(r.gender);
    setHobbies(r.hobbies); setCity(r.city);
  }

  return (
    <div>
      <h2>Task 13 - Form with LocalStorage</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Enter Name: <input value={name} onChange={(e) => setName(e.target.value)} /></label><br />
        <label>Enter Mobile No: <input value={mobile} onChange={(e) => setMobile(e.target.value)} /></label><br />
        <label>Gender: </label>
        <label><input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male</label>
        <label><input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female</label><br />
        <label>Hobby: </label>
        {["Reading", "Dancing", "Singing"].map((h) => (
          <label key={h}>
            <input type="checkbox" checked={hobbies.includes(h)} onChange={() => toggleHobby(h)} /> {h}
          </label>
        ))}<br />
        <label>City: <select value={city} onChange={(e) => setCity(e.target.value)}>
          {CITIES.map((c) => <option key={c}>{c}</option>)}
        </select></label><br />
        <button onClick={submit}>{editId ? "Update Data" : "Submit Data"}</button>
      </div>

      {records.length > 0 && (
        <table border="1" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
          <thead>
            <tr><th>Name</th><th>Mobile</th><th>Gender</th><th>Hobbies</th><th>City</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.mobile}</td>
                <td>{r.gender}</td>
                <td>{r.hobbies.join(", ")}</td>
                <td>{r.city}</td>
                <td>
                  <button onClick={() => editRecord(r)}>Edit</button>
                  <button onClick={() => deleteRecord(r.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FormApp;
