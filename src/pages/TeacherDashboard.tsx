import { useUser, SignedIn, SignedOut, RedirectToSignIn, UserButton, useClerk } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Users, BarChart2, Clock, Home, User, FileText, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const summary = [
  {
    label: "Total Students",
    value: 128,
    icon: Users,
    sub: "Active this semester",
    color: "bg-classdojo-blue text-white",
  },
  {
    label: "Average Progress",
    value: "85%",
    icon: BarChart2,
    sub: "Class performance",
    color: "bg-classdojo-orange text-white",
  },
  {
    label: "Hours This Week",
    value: 32,
    icon: Clock,
    sub: "Teaching hours",
    color: "bg-classdojo-purple text-white",
  },
];

const classProgress = [
  { subject: "Mathematics", percent: 92 },
  { subject: "Science", percent: 88 },
  { subject: "Reading", percent: 95 },
  { subject: "Art", percent: 78 },
];

const recentActivity = [
  { name: "Emma Thompson", action: "Completed Math Assignment", time: "2 hours ago", initials: "ET" },
  { name: "Alex Chen", action: "Started Science Project", time: "4 hours ago", initials: "AC" },
  { name: "Sarah Williams", action: "Submitted Reading Report", time: "6 hours ago", initials: "SW" },
  { name: "Michael Brown", action: "Joined Study Group", time: "8 hours ago", initials: "MB" },
];

export default function TeacherDashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) return null;
  if (user.unsafeMetadata.role !== "teacher") return <Navigate to="/" />;

  return (
    <div className="min-h-screen flex bg-gray-50">
      <SignedIn>
        <SidebarProvider>
          <Sidebar className="bg-white border-r">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-4">
                <div className="w-8 h-8 bg-gradient-to-br from-classdojo-green to-classdojo-blue rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">Class Monitor</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="/dashboard/teacher">
                      <Home className="mr-2" /> Dashboard
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <BookOpen className="mr-2" /> Classes
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <User className="mr-2" /> Students
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <FileText className="mr-2" /> Reports
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarSeparator />
            <SidebarFooter>
              <div className="flex items-center gap-2 px-2 py-2">
                <UserButton afterSignOutUrl="/" />
                <span className="text-sm font-medium text-gray-700">{user.firstName || user.emailAddresses[0]?.emailAddress}</span>
              </div>
              <Button variant="ghost" className="w-full flex items-center justify-start gap-2 text-red-600" onClick={() => signOut() }>
                <LogOut className="w-4 h-4" /> Sign Out
              </Button>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="mb-4">
              <Button asChild variant="outline" className="mb-4">
                <a href="/">&larr; Back to Website</a>
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.firstName || "Teacher"}!</h1>
            <p className="text-gray-600 mb-8">Here's what's happening in your classes today.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {summary.map((item) => (
                <Card key={item.label} className="flex flex-col justify-between">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-2xl font-bold">{item.value}</CardTitle>
                      <div className="text-sm text-gray-500">{item.label}</div>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-gray-400">{item.sub}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="max-w-3xl">
              <Card>
                <CardHeader>
                  <CardTitle>Class Progress</CardTitle>
                  <div className="text-sm text-gray-500">Current semester overview</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 mt-4">
                    {classProgress.map((item) => (
                      <div key={item.subject} className="flex items-center gap-4">
                        <div className="w-32 font-medium text-gray-700">{item.subject}</div>
                        <Progress value={item.percent} className="flex-1 h-3 bg-gray-200" />
                        <div className="w-12 text-right font-semibold text-gray-900">{item.percent}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
} 