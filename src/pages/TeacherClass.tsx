import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Header from "@/components/Header";

const TeacherClass = () => {
  const { user } = useUser();
  const [classInfo, setClassInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClass = async () => {
      if (!user) return;
      // Get teacher by Clerk ID
      const { data: teacher } = await supabase
        .from('teachers')
        .select('id')
        .eq('clerk_id', user.id)
        .single();
      if (!teacher) return setLoading(false);
      // Get class for teacher
      const { data: classData } = await supabase
        .from('classes')
        .select('*')
        .eq('teacher_id', teacher.id)
        .single();
      setClassInfo(classData || null);
      setLoading(false);
    };
    fetchClass();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">My Class</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : classInfo ? (
          <div className="bg-white rounded shadow p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">{classInfo.name}</h2>
            <p className="text-gray-600">Class ID: {classInfo.id}</p>
          </div>
        ) : (
          <div className="text-center text-gray-500">No class found.</div>
        )}
      </div>
    </div>
  );
};

export default TeacherClass; 