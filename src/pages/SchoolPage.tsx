import Header from "@/components/Header";

const schoolDescription = `
Staples High School is a modern educational institution dedicated to fostering academic excellence, creativity, and community spirit. Our campus features state-of-the-art facilities, a vibrant learning environment, and a commitment to preparing students for success in college and beyond. We believe in nurturing every student's potential through a diverse curriculum, extracurricular opportunities, and strong support systems.`;

const SchoolPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Our School</h1>
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
            alt="School Building"
            className="rounded-2xl shadow-lg mb-8 w-full max-w-2xl"
            style={{ objectFit: 'cover', maxHeight: 350 }}
          />
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl">
            {schoolDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolPage; 