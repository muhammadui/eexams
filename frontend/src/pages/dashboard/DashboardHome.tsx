import PerformanceAnalysis from "@/components/PerformanceAnalysis";
import { GraduationCap, Layers } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="space-y-4">
      <div className="student__name__wrapper mb-8 bg-[#f2f4f6] p-4 text-[#262e3d]">
        <p>
          Hi <span className="font-semibold">{`Muhammad`},</span>{" "}
        </p>
        <p className="text-sm">welcome to your dashboard</p>
      </div>

      <div className="student__overview">
        <p className="font-medium">overview</p>
        <div className="overview__wrapper flex gap-6">
          <div className="registered__courses flex flex-1 gap-4 rounded-md bg-[#1546a3] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white p-2">
              <GraduationCap strokeWidth={1} />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[#c8d6e5]">Registered Courses</p>
              <p className="font-medium text-[#c8d6e5]">4</p>
            </div>
          </div>
          <div className="level__wrapper flex gap-3 rounded-md bg-[#0d99ff] bg-opacity-[12%] p-4 text-[#262e3d]">
            <Layers className="w-5" strokeWidth={1} />
            <div className="">
              <p>level</p>
              <p className="font-semibold">500 Level</p>
            </div>
          </div>
          <div className="semester__wrapper flex gap-3 rounded-md bg-[#0d99ff] bg-opacity-[12%] p-4 text-[#262e3d]">
            <Layers className="w-5" strokeWidth={1} />
            <div className="">
              <p>Semester</p>
              <p className="font-semibold">Second Semester</p>
            </div>
          </div>
          <div className="cgpa__wrapper flex gap-3 rounded-md bg-[#0d99ff] bg-opacity-[12%] p-4 text-[#262e3d]">
            <Layers className="w-5" strokeWidth={1} />
            <div className="">
              <p>CGPA</p>
              <p className="font-semibold">4.97 / 5.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="performance__analysis__chart">
        <PerformanceAnalysis />
      </div>
    </div>
  );
};

export default DashboardHome;
