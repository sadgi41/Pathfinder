import React from 'react'
import { useEffect } from "react";
import { getRoles } from "../services/roleService";
import RoleCard from "../components/cards/RoleCards";
import { roles } from "../data/roles";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { usePathfinderStore } from "../store/usePathfinderStore";

const RoleSelect = () => {
  /* const [currentRole, setCurrentRole] = useState(null);
  const [targetRole, setTargetRole] = useState(null); */

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchRoles() {
    try {
      console.log("Fetching roles...");

      const data = await getRoles();
      console.log("API DATA:", data);

      setRoles(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchRoles();
}, []);



  const {
    currentRole,
    targetRole,
    setCurrentRole,
    setTargetRole
  } = usePathfinderStore();

  const navigate = useNavigate();

  if (loading) {
    return <p>Loading roles...</p>;
  }

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">
          What is your Current Role?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              selected={currentRole?.id === role.id}
              onSelect={() => setCurrentRole(role)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          What do you want to be your Target Role?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              selected={targetRole?.id === role.id}
              onSelect={() => setTargetRole(role)}
            />
          ))}
        </div>
      </section>

      <button
        disabled={!currentRole || !targetRole}
        onClick={() =>
          navigate("/skill-gap")
        }
        className="px-6 py-3 rounded-lg bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition duration-200"
      >
        Continue
      </button>


    </div>
  );
}

export default RoleSelect
