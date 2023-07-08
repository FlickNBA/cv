function returnBackground(props) {
  return props.length == 0 ? {} : { backgroundImage: `url(${props})` };
}

function HeaderCV(props) {
  return (
    <div className="grid grid-cols-4 grid-rows-[1fr_4fr]">
      <div className="col-span-3 p-2 border border-black">
        <h1 className="text-4xl text-grayyy font-medium mb-1">
          {props.firstName} <span className="font-bold">{props.lastName}</span>
        </h1>
        <h2 className="text-2xl font-light text-grayy">
          Email address: <span className="text-grayyy">{props.emailAddress}</span>
        </h2>
        <h2 className="text-2xl font-light text-grayy">
          Phone number: <span className="text-grayyy">{props.phoneNumber}</span>
        </h2>
        <h2 className="text-2xl font-light text-grayy">
          City: <span className="text-grayyy">{props.city}</span>
        </h2>
      </div>
      <div className="border border-black">
        <div className="profilePicture aspect-square rounded-xl" style={returnBackground(props.profilePicture)}></div>
      </div>
    </div>
  );
}

export default function Preview(props) {
  return (
    <div className="bg-whitee p-2 border-4 border-whitee border-opacity-50 text-grayyy backdrop-blur-sm rounded-2xl w-full grid">
      <HeaderCV {...props} />
    </div>
  );
}
