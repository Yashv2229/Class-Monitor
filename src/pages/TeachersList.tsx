import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Header from "@/components/Header";

const getAvatarUrl = (name: string) => {
  // Use ui-avatars.com for a random avatar based on the teacher's name
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=64`;
};

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      const { data } = await supabase.from('teachers').select('name');
      setTeachers(data || []);
      setLoading(false);
    };
    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Teachers</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <ul className="bg-white rounded shadow p-6">
            {teachers.length === 0 && <li className="text-gray-500">No teachers found.</li>}
            {teachers.map((teacher, idx) => (
              <li key={idx} className="py-2 border-b last:border-b-0 text-lg flex items-center gap-4">
                <img
                  src={getAvatarUrl(teacher.name)}
                  alt={teacher.name}
                  className="w-10 h-10 rounded-full border"
                />
                <span>{teacher.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeachersList; 