export function Input({ type, placeholder, value, state }) {
  return (
    <>
      <div className="flex items-center w-full text-xl text-whitee">
        <p className="w-1/4">{placeholder}:</p>
        <input className="text-xl w-3/4 mb-2 px-2 py-1 rounded-md text-grayyy bg-whitee border-2 border-grayyy bg-opacity-50" type={type} placeholder={placeholder} defaultValue={value} onChange={(e) => state(e.target.value)} />
      </div>
    </>
  );
}

const handleNewImage = (e, state) => {
  console.log(e.target.files);
  console.log(e);
  console.log(state);
  console.log("XD");
  state(URL.createObjectURL(e.target.files[0]));
};

export function ImageInput({ state, placeholder }) {
  return (
    <>
      <div className="flex items-center w-full text-xl text-whitee">
        <p className="w-1/3">{placeholder}:</p>
        <input className="text-xl w-2/3 mb-2 px-2 py-1 rounded-md text-grayyy bg-whitee border-2 border-grayyy bg-opacity-50" onChange={(e) => handleNewImage(e, state)} type="file" />
      </div>
    </>
  );
}
