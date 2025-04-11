export default function QuestionCreator({
    adder
  }: {
    adder : (data:FormData) => void
  }) {
    return (
      <form action={adder}>
        <div className="mt-2 mb-2 border-t-1 border-indigo-400">
          <label htmlFor="prompt" className="block mt-1 mb-2 font-medium text-gray-900">Question prompt</label>
          <input type="text" id="prompt" name="question" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
        </div>
        <div className="mb-2">
          <label htmlFor="responses" className="block mb-2 font-medium text-gray-900">Question choices</label>
          <input type="text" id="responses" name="responses" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2"/>
        </div>
        <p><button type="submit" className="bg-indigo-500 text-white rounded p-2">Add Question</button></p>
      </form>
    )
  }