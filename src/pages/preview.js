function HeaderCV(props) {
  return (
    <div className="grid grid-cols-4 grid-rows-[1fr_3fr]">
      <div className="col-span-3 bg-redd">info</div>
      <div className="bg-orange-500">
        <div
          className="profilePicture aspect-square rounded-full"
          style={{
            backgroundImage: `url(${props.profilePicture})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Preview({ profilePicture }) {
  return (
    <div className="bg-whitee p-2 border-4 border-whitee border-opacity-50 text-grayyy backdrop-blur-sm rounded-2xl w-full grid">
      <HeaderCV profilePicture={profilePicture} />
    </div>
  );
}
