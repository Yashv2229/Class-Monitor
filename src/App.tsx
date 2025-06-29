import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignUpWithRole from "./pages/SignUpWithRole";
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import Chatbot from "./pages/Chatbot";
import TeachersList from "./pages/TeachersList";
import SchoolPage from "./pages/SchoolPage";
import TeacherClass from "./pages/TeacherClass";
import TeacherStudents from "./pages/TeacherStudents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUpWithRole />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/teachers" element={<TeachersList />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/dashboard/teacher/class" element={<TeacherClass />} />
          <Route path="/dashboard/teacher/students" element={<TeacherStudents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
