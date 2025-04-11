"use client";
import { Question } from "@/app/lib/data";
import QuestionDisplay from "@/app/ui/questiondisplay";

export default function QuestionsEditor({
  questions,
  remover,
}: {
  questions: Question[];
  remover: (id: number) => void;
}) {
  return (
    <div>
      {questions.map((q) => {
        return (
          <div className="pb-3 border-b-1 border-indigo-400 grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <QuestionDisplay question={q} />
            </div>
            <div>
              <button
                onClick={() => remover(q.idquestion)}
                className="mt-4 mb-1 bg-red-500 text-white rounded p-2"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
