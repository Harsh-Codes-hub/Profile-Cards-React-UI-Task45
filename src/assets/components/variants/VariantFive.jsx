import { formatCount } from "../../utils/formatCount";

const VariantFive = ({
  avatar,
  username,
  subtitle,
  followersCount,
  postsCount,
}) => {
  return (
    <article className="p-2 w-100 bg-(--color-white) rounded-4xl">
      <header className="w-full aspect-square overflow-hidden rounded-3xl mx-auto">
        <img src={avatar} alt="cover" className="h-full w-full" />
      </header>
      <main className="px-8 pt-8">
        <h1 className="text-3xl font-semibold">{username}</h1>
        <p className="text-xl text-(--color-light-grey-2) mt-2 h-15">
          {subtitle}
        </p>
      </main>
      <footer className="flex items-center justify-between px-8 pb-8">
        <div className="flex justify-center items-center gap-2 text-xl">
          <i className="ri-user-line text-(--color-light-grey-2) font-medium"></i>
          <span className="font-semibold">{formatCount(followersCount)}</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-xl">
          <i className="ri-checkbox-multiple-line text-(--color-light-grey-2) font-medium"></i>
          <span className="font-semibold">{formatCount(postsCount)}</span>
        </div>
        <button
          type="button"
          className="flex justify-center items-center gap-1 bg-(--color-white) shadow-(--follow-btn-shadow-2) text-xl font-semibold py-2 px-5 rounded-full border border-(--color-light-grey)"
        >
          Follow<i className="ri-add-large-line"></i>
        </button>
      </footer>
    </article>
  );
};

export default VariantFive;
