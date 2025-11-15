import React, { useEffect, useState } from "react";

function Team() {
  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({
    name: "",
    registerNumber: "",
    role: "",
    batch: "",
    phoneNumber: "",
    telegramId: ""
  });
  const [editingId, setEditingId] = useState(null);

  const BASE_URL = "http://localhost:2030/tbh-backend/api/teams";

  // Fetch all team members
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error(err));
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit new team member
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // UPDATE existing member
      fetch(`${BASE_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(updatedMember => {
          setTeams(teams.map(t => (t.id === editingId ? updatedMember : t)));
          setEditingId(null);
          resetForm();
        })
        .catch(err => console.error(err));
    } else {
      // ADD new member
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(newMember => {
          setTeams([...teams, newMember]);
          resetForm();
        })
        .catch(err => console.error(err));
    }
  };

  // Edit team member
  const handleEdit = (member) => {
    setForm(member);
    setEditingId(member.id);
  };

  // Delete team member
  const handleDelete = (id) => {
    fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
      .then(() => setTeams(teams.filter(t => t.id !== id)))
      .catch(err => console.error(err));
  };

  // Reset form
  const resetForm = () => {
    setForm({
      name: "",
      registerNumber: "",
      role: "",
      batch: "",
      phoneNumber: "",
      telegramId: ""
    });
  };

  return (
    <div>
      <h2>Team Members</h2>

      {/* Team List */}
      <ul>
        {teams.map((member) => (
          <li key={member.id}>
            <b>{member.name}</b> ({member.role}) - {member.batch} <br />
            RegNo: {member.registerNumber}, Phone: {member.phoneNumber}, Telegram: {member.telegramId}
            <button onClick={() => handleEdit(member)} style={{ marginLeft: "10px" }}>Edit</button>
            <button onClick={() => handleDelete(member.id)} style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add / Edit Form */}
      <h3>{editingId ? "Edit Member" : "Add New Member"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="number" name="registerNumber" placeholder="Register Number" value={form.registerNumber} onChange={handleChange} required />
        <input type="text" name="role" placeholder="Role" value={form.role} onChange={handleChange} />
        <input type="text" name="batch" placeholder="Batch" value={form.batch} onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
        <input type="text" name="telegramId" placeholder="Telegram ID" value={form.telegramId} onChange={handleChange} />
        <button type="submit">{editingId ? "Update Member" : "Add Member"}</button>
        {editingId && <button type="button" onClick={resetForm} style={{ marginLeft: "10px" }}>Cancel</button>}
      </form>
    </div>
  );
}

export default Team;
