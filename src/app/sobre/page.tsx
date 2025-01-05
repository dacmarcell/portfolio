import ClassroomPhoto from "@/components/About/ClassroomPhoto";

export default function Page() {
  return (
    <div className="grid grid-cols-2 p-5">
      <div className="flex items-center justify-center text-white rounded-md p-4">
        <ClassroomPhoto />
      </div>
      <div className="flex items-center justify-center bg-green-500 text-white rounded-md p-4">
        Elemento Direito
      </div>
    </div>
  );
}
