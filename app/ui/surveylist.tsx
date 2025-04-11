import { Survey, fetchSurveys } from '@/app/lib/data'
import Link from 'next/link'

export async function SurveyList({
    path,
  }: {
    path : string
  }) {
    const surveys = await fetchSurveys();

    return (
        <div>
           { surveys.map((s) => {
                return (<Link href={`/${path}/${s.idsurvey}`} className="text-indigo-500 block py-2 px-4">{s.title}</Link>)
            })
        }
        </div>
    );
}