import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const userIdRef = useRef(localStorage.getItem("userId"));

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${userIdRef.current}/projects`
        );
        setProjects(response.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array to run only on mount

  return { projects, loading };
};

export default useProjects;
