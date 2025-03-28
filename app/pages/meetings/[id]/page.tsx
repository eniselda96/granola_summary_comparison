"use client"

// pages/meetings/[id].tsx
import { meetingsData } from "@/app/data";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { evaluateSummaries } from "../evaluateSummaries";
import { useState } from "react";

export default function MeetingPage() {
  const { id } = useParams();
  const [evaluationResult, setEvaluationResult] = useState<string | null>(null);


  const meeting = meetingsData.find((m: { id: number; }) => m.id === +id!);

  console.log('ENTERED MEETINGS')

  if (!meeting) {
    return <div>Meeting not found.</div>;
  }

  const handleEvaluate = async () => {
    const result = await evaluateSummaries(meeting);
    setEvaluationResult(result); // Store result in state
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">{meeting.title}</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Summary V1 */}
        <div className="p-4 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-2">Summary V1</h2>
          <ReactMarkdown>{meeting.summary1}</ReactMarkdown>
        </div>

        {/* Summary V2 */}
        <div className="p-4 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-2">Summary V2</h2>
          <ReactMarkdown>{meeting.summary2}</ReactMarkdown>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() =>handleEvaluate()}>Evaluate</button>
      </div>

      {/* Display evaluation result here */}
        {evaluationResult && (
          <div className="mt-6 p-4 bg-gray-100 shadow-md w-full">
            <h2 className="text-xl font-semibold mb-2">Evaluation Result</h2>
            <pre className="">{evaluationResult}</pre>
          </div>
        )}
    </div>
  );
}