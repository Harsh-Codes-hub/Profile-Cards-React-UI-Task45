import { formatCount } from "../../utils/formatCount";

const VariantOne = ({ avatar, coverImage, username, fullName, bio, mediaCount, followersCount, followingCount }) => {
  return (
    <article className="bg-white w-110 flex flex-col p-3">
      <header className="h-40">
        <img
          src={coverImage}
          alt="cover"
          className="h-full w-full object-cover object-centre"
        />
      </header>
      <section className="relative px-8">
        <img
          src={avatar}
          alt="cover"
          className="h-25 aspect-square rounded-full p-1 absolute left-1/2 -translate-x-1/2 top-[-16px] bg-(--color-white)"
        />
        <div className="flex justify-between text-2xl py-4 text-(--color-grey)">
          <button type="button">
            <i className="ri-star-line"></i>
          </button>
          <button type="button">
            <i className="ri-more-line font-medium"></i>
          </button>
        </div>
        <div className="text-center mt-8">
          <h1 className="text-4xl font-medium">{username}</h1>
          <h2 className="text-(--color-grey)">{fullName}</h2>
          <p className="max-w-100 mx-auto mt-4 h-20">{bio}</p>
        </div>
        <div className="border-t-2 border-(--color-grey) my-8 mx-auto w-15 opacity-40"></div>
      </section>
      <footer className="px-8 grid grid-cols-3 justify-items-center text-center pb-8">
        <div>
          <h3 className="font-semibold text-3xl">{formatCount(mediaCount)}</h3>
          <span className="text-(--color-grey) font-medium">Media</span>
        </div>
        <div>
          <h3 className="font-semibold text-3xl">{formatCount(followersCount)}</h3>
          <span className="text-(--color-grey) font-medium">Followers</span>
        </div>
        <div>
          <h3 className="font-semibold text-3xl">{formatCount(followingCount)}</h3>
          <span className="text-(--color-grey) font-medium">Following</span>
        </div>
      </footer>
    </article>
  );
};

export default VariantOne;
