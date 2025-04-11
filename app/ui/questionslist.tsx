import { Survey, fetchQuestions } from '@/app/lib/data'
import QuestionDisplay from '@/app/ui/questiondisplay';

export default async function QuestionsList({
    surveyid,
  }: {
    surveyid : number
  }) {
    const questions = await fetchQuestions(surveyid);

    return (
        <div>
           { questions.map((q) => {
                return (
                <div className="pb-3 border-b-1 border-indigo-400">
                  <QuestionDisplay question={q} />
                </div>)
            })}
        </div>
    );
}