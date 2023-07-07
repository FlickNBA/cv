export function Input({ type, placeholder, value }) {
  return (
    <>
      <div className="flex items-center w-full text-2xl text-whitee">
        <p className="w-1/4">{placeholder}:</p>
        <input className="text-2xl w-3/4 mb-2 px-4 py-2 rounded-md text-grayyy bg-whitee border-2 border-grayyy bg-opacity-50" type={type} placeholder={placeholder} defaultValue={value} />
      </div>
    </>
  );
}

export function ImageInput({ state, placeholder }) {
  return (
    <>
      <div className="flex items-center w-full text-2xl text-whitee">
        <p className="w-1/3">{placeholder}:</p>
        <input className="text-2xl w-2/3 mb-2 px-4 py-2 rounded-md text-grayyy bg-whitee border-2 border-grayyy bg-opacity-50" onChange={(e) => state(URL.createObjectURL(e.target.files[0]))} type="file" />
      </div>
    </>
  );
}
