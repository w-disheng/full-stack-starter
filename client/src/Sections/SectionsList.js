import { useState, useEffect } from "react";

import Api from "../Api";
import { Link } from "react-router-dom";

function SectionsList() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    Api.sections.index().then((response) => setSections(response.data));
  }, []);

  const onDelete = (section) => {
    if (window.confirm(`Are you sure you want to delete ${section.name}?`)) {
      // delete button from the API
      Api.sections.delete(section.id).then(() => {
        // We are fukterunf gthe section list, keeping every section that does not match the one we're deleting
        const newSections = sections.filter( s => s.id !== section.id);
        setSections(newSections)
      })
    }
  }

  return (
    <main className="container">
      <div>Sections List</div>
      <ul>
        {sections.map((s) => (
          <li>
            <p>
              <Link to={`/sections/${s.id}/edit`}>
                {s.name}, {s.slug}, {s.position}
              </Link>
            </p>
            <p>
              <button
                onClick={() => onDelete(s)}
                type="button"
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default SectionsList;
