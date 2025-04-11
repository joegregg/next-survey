import { Suspense } from "react";
import Loading from "@/app/ui/loading";
import SurveyDetails from "@/app/ui/surveydetails";
import QuestionsList from "@/app/ui/questionslist";

export default async function SurveyPage({
  params,
}: {
  params: Promise<{ surveyid: number }>;
}) {
  const { surveyid } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <SurveyDetails surveyid={surveyid} />
      <QuestionsList surveyid={surveyid} />
    </Suspense>
  );
}
