import { SurveyList } from "@/app/ui/surveylist";
import { Suspense } from "react";
import Loading from "@/app/ui/loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SurveyList path="view" />
    </Suspense>
  );
}
