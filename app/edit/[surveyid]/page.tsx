import { Suspense } from "react";
import Loading from "@/app/ui/loading";
import SurveyDetails from "@/app/ui/surveydetails";
import QuestionsEditor from "@/app/ui/questionseditor";
import QuestionCreator from "@/app/ui/questioncreator";
import { fetchQuestions, removeQuestion, addQuestion } from "@/app/lib/data";
import { redirect } from "next/navigation";

export default async function SurveyPage({
  params,
}: {
  params: Promise<{ surveyid: number }>;
}) {
  const { surveyid } = await params;
  const questions = await fetchQuestions(surveyid);

  async function handleRemove(questionid: number) {
    "use server";
    removeQuestion(questionid);
    redirect("/edit/" + surveyid);
  }

  async function handleCreate(formData: FormData) {
    "use server";
    const question = formData.get("question") as string;
    const responses = formData.get("responses") as string;
    addQuestion(surveyid, question, responses);
    redirect("/edit/" + surveyid);
  }

  return (
    <Suspense fallback={<Loading />}>
      <SurveyDetails surveyid={surveyid} />
      <QuestionsEditor questions={questions} remover={handleRemove} />
      <QuestionCreator adder={handleCreate} />
    </Suspense>
  );
}
