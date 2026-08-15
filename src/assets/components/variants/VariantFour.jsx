import { formatPostedAt } from "../../utils/formatPostedAt";

const VariantFour = ({
  avatar,
  username,
  currentJob,
  skills,
  postedAt,
  hiring,
  currentPositionAt,
}) => {
  return (
    <article className="w-100 bg-(--color-white) p-6 rounded-4xl">
      <header className="flex justify-between items-start">
        <img
          src={avatar}
          alt="avatar"
          className="h-20 p-2 border border-(--color-light-grey) rounded-full"
        />
        <button
          type="button"
          className="text-(--color-light-grey-2) font-medium border border-(--color-light-grey) py-1 px-2 rounded-xl shadow-(--save-btn-shadow)"
        >
          Save <i className="ri-bookmark-line"></i>
        </button>
      </header>
      <main className="mt-6 h-60">
        <div className="flex gap-1 items-end">
          <h1 className="font-medium text-xl">{username}</h1>
          <span className="text-(--color-light-grey-2) text-[12px] pb-[2px]">
            {formatPostedAt(postedAt)}
          </span>
        </div>
        <h2 className="text-2xl font-semibold mt-2">{currentJob}</h2>
        <ul className="flex gap-1 mt-4 flex-wrap items-start justify-baseline">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-(--color-light-grey) text-sm font-medium py-1 px-2 rounded-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </main>
      <footer className="border-t border-t-(--color-light-grey) h-22 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{hiring}</h3>
          <h4 className="text-sm text-(--color-light-grey-2)">{currentPositionAt}</h4>
        </div>
        <button
          type="button"
          className="bg-(--color-black) text-(--color-white) py-2 px-4 rounded-md text-sm"
        >
          Hire Now
        </button>
      </footer>
    </article>
  );
};

export default VariantFour;
