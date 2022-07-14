import Card from "./Card";

const FormInput = (props) => {
  const formSubmitHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <Card>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formSubmitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold-mb2"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Age(Years)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            placeholder="20"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add user
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FormInput;
