import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Header from "@/components/Header";

const TeacherStudents = () => {
  const { user } = useUser();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentsAndParents = async () => {
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
        .select('id')
        .eq('teacher_id', teacher.id)
        .single();
      if (!classData) return setLoading(false);
      // Get students in class
      const { data: studentsData } = await supabase
        .from('students')
        .select('id, name')
        .eq('class_id', classData.id);
      if (!studentsData) return setLoading(false);
      // For each student, get parent details
      const studentsWithParents = await Promise.all(
        studentsData.map(async (student) => {
          // Get parent_student link
          const { data: link } = await supabase
            .from('parent_student')
            .select('parent_id')
            .eq('student_id', student.id)
            .single();
          let parent = null;
          if (link && link.parent_id) {
            const { data: parentData } = await supabase
              .from('parents')
              .select('name, email, contact_no')
              .eq('id', link.parent_id)
              .single();
            parent = parentData;
          }
          return { ...student, parent };
        })
      );
      setStudents(studentsWithParents);
      setLoading(false);
    };
    fetchStudentsAndParents();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Class Students & Parents</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="space-y-4">
            {students.length === 0 && (
              <div className="text-gray-500 text-center py-4">No students found.</div>
            )}
            {students.map((student, idx) => (
              <div key={idx} className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold text-lg">{student.name}</div>
                  <div className="text-gray-600">Parent: {student.parent?.name || '-'}</div>
                  <div className="text-gray-600">Email: {student.parent?.email || '-'}</div>
                  <div className="text-gray-600">Contact No: {student.parent?.contact_no || '-'}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherStudents; 