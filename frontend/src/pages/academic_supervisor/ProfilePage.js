import { useState } from "react";
import { PageHead, Card, Btn } from "../../components/common/Primitives";
import "../../styles/ProfilePage.css";

export default function AcademicSupervisorProfilePage() {
  const [form, setForm] = useState({
    name: "Dr. Sarah Nakato",
    email: "s.nakato@mak.ac.ug",
    phone: "+256 700 000 003",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const initials = form.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="page">
      <PageHead title="My Profile" sub="View and update your account details." />

      <div className="grid grid--2">
        <Card label="Account">
          <div className="profile-avatar-row">
            <div className="profile-avatar">{initials}</div>
            <div>
              <div className="profile-name">{form.name}</div>
              <div className="profile-role">Academic Supervisor</div>
            </div>
          </div>
        </Card>

        <Card label="Edit Details">
          <div className="profile-form">
            <div className="profile-group">
              <label className="profile-label">Full name</label>
              <input
                className="profile-input"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="profile-group">
              <label className="profile-label">Email</label>
              <input
                className="profile-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="profile-group">
              <label className="profile-label">Phone</label>
              <input
                className="profile-input"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <Btn kind="primary" sm>Save changes</Btn>
          </div>
        </Card>
      </div>
    </div>
  );
}
