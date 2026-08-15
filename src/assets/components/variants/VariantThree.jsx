const VariantThree = ({
  avatar,
  username,
  bio,
  available,
  skills,
  currentJob,
  currentPositionAt,
  hiring,
}) => {
  return (
    <article className="bg-(--color-white) w-100 flex flex-col px-8 py-6">
      <header className="w-full">
        <div className="flex items-center h-8">
          {available ? (
            <h4 className="bg-(--color-green) text-(--color-white) px-3 py-1 rounded-full">
              available
            </h4>
          ) : (
            <></>
          )}
          <h3 className="ml-auto font-semibold text-(--color-grey)">
            {hiring}
          </h3>
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="aspect-square h-35 rounded-full mx-auto avatar-shadow"
        />
      </header>
      <main className="w-full mt-6">
        <h1 className="text-2xl font-medium mx-auto w-fit">{username}</h1>
        <h3 className="w-fit mx-auto text-[14px] text-(--color-light-grey-2)">
          {currentJob}
        </h3>
        <h4 className="w-fit mx-auto text-[14px] mt-2 text-(--color-blue)">
          {currentPositionAt}
        </h4>
        <ul className="flex justify-between my-4">
          {skills.map((skill) => (
            <li className="text-[12px] border border-(--color-light-grey) rounded-full px-2 py-1" key={skill}>{skill}</li>
          ))}
        </ul>
        <p className="text-center text-(--color-light-grey-2) text-[14px] h-20">{bio}</p>
      </main>
      <footer className="w-full flex flex-col items-center gap-5 justify-between">
        <div className="border-t w-20 border-t-(--color-light-grey)"></div>
        <button type="button" className="font-semibold">VIEW PROFILE</button>
      </footer>
    </article>
  );
};

export default VariantThree;
