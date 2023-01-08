import { useEffect, useState } from "react";
import NEDetails from "./NEDetails";
import "./Ne.css";
import RRDetails from "./RRDetails";

const Rhetoricalrole = () => {
  const [rrdocs, setRRdocs] = useState(null);

  useEffect(() => {
    const fetchRRdocs = async () => {
      const response = await fetch("/api/legal/rhetorical_roles/");
      const json = await response.json();

      if (response.ok) {
        setRRdocs(json);
      }
    };
    fetchRRdocs();
  }, []);
  return (
    <div className="flex">
      {rrdocs &&
        rrdocs.map((rrdoc) => <RRDetails key={rrdoc._id} rrdoc={rrdoc} />)}
    </div>
  );
};

export default Rhetoricalrole;
