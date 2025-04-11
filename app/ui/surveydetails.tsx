import { Survey, fetchSurvey } from '@/app/lib/data'

export default async function SurveyDetails({
    surveyid,
  }: {
    surveyid : number
  }) {
    
    try {
        const survey = await fetchSurvey(surveyid);

        return (
            <div className="border-b-2 border-indigo-400">
                <h3 className="font-bold text-xl text-indigo-400 p-2">{survey.title}</h3>
                <p className="text-gray-500 mb-2 p-2">{survey.prompt}</p>
            </div>
        );
    } catch(e) {
        return (
            <div className="border-b-2 border-indigo-400">
                <h3 className="font-bold text-xl p-2 text-indigo-400">No survey</h3>
                <p className="text-sm mb-2 p-2">No survey to display</p>
            </div>
        );
    }        
}