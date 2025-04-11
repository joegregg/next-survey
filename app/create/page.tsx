import { createSurvey } from "@/app/lib/data";
import { redirect } from "next/navigation";
import SurveyCreator from "@/app/ui/surveycreator";

export default function Page() {
  async function addSurvey(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const prompt = formData.get("prompt") as string;
    const id = await createSurvey(title, prompt);
    redirect("/edit/" + id);
  }

  return <SurveyCreator adder={addSurvey} />;
}
