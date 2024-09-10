import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data - replace with actual data from your backend
const semesterData = [
  { semester: "1st", GPA: 3.5 },
  { semester: "2nd", GPA: 3.7 },
  { semester: "3rd", GPA: 3.6 },
  { semester: "4th", GPA: 3.8 },
  { semester: "5th", GPA: 3.9 },
  { semester: "6th", GPA: 4.0 },
  { semester: "7th", GPA: 4.1 },
  { semester: "8th", GPA: 4.2 },
  { semester: "9th", GPA: 4.3 },
  { semester: "10th", GPA: 4.5 },
];

const coursePerformanceData = [
  { course: "SE101", score: 94 },
  { course: "SE102", score: 96 },
  { course: "SE103", score: 92 },
  { course: "SE104", score: 98 },
];

const GPAProgressChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>GPA Progress</CardTitle>
      <CardDescription>Semester-wise GPA progress</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={semesterData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="GPA"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

const CoursePerformanceChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Course Performance</CardTitle>
      <CardDescription>Current semester course scores</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={coursePerformanceData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

const PerformanceAnalysis = () => {
  return (
    <div className="performance__analysis__chart grid gap-6 md:grid-cols-2">
      <GPAProgressChart />
      <CoursePerformanceChart />
    </div>
  );
};

export default PerformanceAnalysis;
