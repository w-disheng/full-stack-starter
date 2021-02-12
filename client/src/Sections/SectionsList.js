import { useState, useEffect } from "react";

import Api from '../Api';

function SectionsList() {
  const [sections, setSections] = useState([]);

	useEffect(() => {
		Api.sections.index().then(response => setSections(response.data))
	}, [])

  return (
    <main className="container">
      <div>Sections List</div>
      <ul>
        {sections.map((s) => (
          <li>{s.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default SectionsList;
