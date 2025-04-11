import { Question } from '@/app/lib/data'

export default function QuestionDisplay({
    question,
  }: {
    question : Question
  }) {
    
    if(question.responses==null || question.responses.length == 0) {
      return (
        <div>
          <p className="p-2">{question.question}</p>
          <p className="p-2"><input type="text" className="p-2 outline"/></p>
        </div>
      )
    } else {
      const options = question.responses.split(',');
      return (
        <div>
          <p className="p-2">{question.question}</p>
          <p className="p-2">
          {options.map((o) => {return(<span  className="gap-2 p-1">
            <input type="radio" name={"options"+question.idquestion} className="mr-1"/>
            {o}</span>)})}
          </p>
        </div>
      )
    }
  }