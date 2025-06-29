import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Clock, Users, MessageCircle, Calendar, Camera, FileText, Users as UsersIcon, Bell } from "lucide-react";
import Header from "@/components/Header";

const summary = [
  { label: "Average Grade", value: "4.8", icon: Star, color: "bg-yellow-100 text-yellow-700" },
  { label: "Achievements", value: 12, icon: Trophy, color: "bg-orange-100 text-orange-700" },
  { label: "Attendance", value: "95%", icon: Clock, color: "bg-green-100 text-green-700" },
  { label: "Teachers", value: 8, icon: Users, color: "bg-blue-100 text-blue-700" },
];

const childProgress = [
  { subject: "Mathematics", percent: 92 },
  { subject: "Reading", percent: 88 },
  { subject: "Science", percent: 75 },
];

const messages = [
  { sender: "Ms. Jessica Zhou", text: "Great progress in math!", time: "2 hours ago" },
  { sender: "Mr. Griffin", text: "Field trip permission slip", time: "1 day ago" },
  { sender: "Ms. Rodriguez", text: "Parent-teacher conference", time: "3 days ago" },
];

const events = [
  { title: "Science Fair", date: "Tomorrow", time: "2:00 PM", location: "School Gymnasium" },
  { title: "Parent-Teacher Conference", date: "Fri", time: "4:30 PM", location: "Room 204" },
  { title: "Winter Holiday Break", date: "Dec 20-Jan 3", time: "All Day", location: "School Closed" },
];

const features = [
  { title: "Class Stories", desc: "View photos and updates from the classroom", icon: Camera, color: "bg-teal-600 text-white" },
  { title: "Assignments", desc: "Track homework and project deadlines", icon: FileText, color: "bg-indigo-600 text-white" },
  { title: "School Community", desc: "Connect with other parents and families", icon: UsersIcon, color: "bg-pink-600 text-white" },
  { title: "Notifications", desc: "Manage alerts and communication preferences", icon: Bell, color: "bg-orange-500 text-white" },
];

export default function ParentDashboard() {
  const { user } = useUser();

  if (!user) return null;
  if (user.unsafeMetadata.role !== "parent") return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SignedIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4">
            <Button asChild variant="outline" className="mb-4">
              <a href="/">&larr; Back to Website</a>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to your Parent Dashboard</h1>
          <p className="text-gray-600 mb-8">Hello, {user?.emailAddresses[0]?.emailAddress}! Here you can:</p>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summary.map((item) => (
              <Card key={item.label} className="flex flex-col items-center justify-center py-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-2xl ${item.color}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </Card>
            ))}
          </div>
          {/* Progress, Messages, Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Child's Progress */}
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle>Your Child's Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-blue-900">Alex Johnson</div>
                    <div className="text-xs text-blue-700">Grade 2</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {childProgress.map((item) => (
                    <div key={item.subject} className="flex items-center gap-4">
                      <div className="w-32 font-medium text-gray-700">{item.subject}</div>
                      <Progress value={item.percent} className="flex-1 h-3 bg-gray-200" />
                      <div className="w-12 text-right font-semibold text-gray-900">{item.percent}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Recent Messages */}
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 flex items-start gap-3 shadow-sm border-l-4 border-green-300">
                      <Avatar>
                        <AvatarFallback>{msg.sender.split(" ").map(w => w[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-green-900">{msg.sender}</div>
                        <div className="text-gray-700 text-sm">{msg.text}</div>
                        <div className="text-xs text-gray-400">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-2">
                    <a href="#" className="text-green-700 font-medium hover:underline">View all messages</a>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Upcoming Events */}
            <Card className="bg-pink-50">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-pink-300">
                      <div className="font-semibold text-pink-900 flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.title}</div>
                      <div className="text-xs text-gray-500">{event.date} &bull; {event.time}</div>
                      <div className="text-xs text-gray-400">{event.location}</div>
                    </div>
                  ))}
                  <div className="text-center mt-2">
                    <a href="#" className="text-pink-700 font-medium hover:underline">View school calendar</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col items-start p-6">
                <div className={`rounded-lg p-2 mb-4 ${feature.color}`}><feature.icon className="w-6 h-6" /></div>
                <div className="font-semibold text-lg mb-1">{feature.title}</div>
                <div className="text-gray-100 text-sm mb-2" style={{color: 'white', opacity: 0.85}}>{feature.desc}</div>
              </Card>
            ))}
          </div>
          {/* Call to Action */}
          <div className="rounded-3xl bg-gradient-to-r from-classdojo-green to-classdojo-blue p-12 text-white text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Keeping teachers, families, and kids connected</h2>
            <p className="text-lg opacity-90 mb-6">Building stronger classroom communities through meaningful connections and shared experiences.</p>
            <Button className="bg-white text-classdojo-green font-bold px-8 py-3 text-lg rounded-full hover:bg-gray-100">Explore Features</Button>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
} 