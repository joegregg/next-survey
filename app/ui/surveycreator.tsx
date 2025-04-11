export default function SurveyCreator({
    adder
  }: {
    adder : (data:FormData) => void
  }) {
    return (
      <form action={adder}>
        <div className="mb-2">
          <label htmlFor="title" className="block mb-2 font-medium text-gray-900">Survey Title:</label>
          <input type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
        </div>
        <div className="mb-2">
          <label htmlFor="prompt" className="block mb-2 font-medium text-gray-900">Survey Prompt:</label>
          <input type="text" name="prompt" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2"/>
        </div>
        <p><button type="submit" className="bg-indigo-500 text-white rounded p-2">Create Survey</button></p>
      </form>
    );
  }