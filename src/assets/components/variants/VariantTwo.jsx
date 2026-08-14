import { formatCount } from "../../utils/formatCount";

const VariantTwo = ({
  avatar,
  coverImage,
  username,
  fullName,
  bio,
  likesCount,
  postsCount,
  viewsCount,
}) => {
  return (
    <article className="bg-(--color-white) w-100 rounded-4xl overflow-hidden">
      <header className="overflow-hidden p-2">
        <div className="relative rounded-3xl h-45 z-0">
          <img
            src={coverImage}
            alt="cover"
            className="object-cover object-center h-full w-full rounded-4xl relative z-0"
          />
          <button type="button" className="absolute z-10 top-2 right-5 bg-(--color-off-white) py-2 px-5 font-semibold rounded-full shadow-(--follow-btn-shadow)">
            Follow <i className="ri-add-large-line"></i>
          </button>
        </div>
      </header>
      <main className="px-6">
        <div className="relative">
          <img
            src={avatar}
            alt="avatar"
            className="h-30 aspect-square rounded-full p-1 bg-(--color-white) absolute top-[-60px] left-0"
          />
        </div>
        <div className="pt-16 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-medium">{username}</h1>
            <h3 className="text-(--color-grey) text-[14px] pt-2">{fullName}</h3>
          </div>
          <p className="text-(--color-grey) h-24">{bio}</p>
        </div>
      </main>
      <footer className="border-t border-(--color-light-grey)">
        <div className="grid grid-cols-3 h-25">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl font-medium">{formatCount(likesCount)}</h4>
            <span className="text-(--color-grey) font-medium">Likes</span>
          </div>
          <div className="border-x border-(--color-light-grey) flex flex-col items-center justify-center">
            <h4 className="text-2xl font-medium">{formatCount(postsCount)}</h4>
            <span className="text-(--color-grey) font-medium">Posts</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl font-medium">{formatCount(viewsCount)}</h4>
            <span className="text-(--color-grey) font-medium">Views</span>
          </div>
        </div>
        <div className="grid grid-cols-3 h-14 bg-(--color-off-white)">
          <div className="font-medium text-2xl flex justify-center items-center">
            <i className="ri-instagram-line"></i>
          </div>
          <div className="border-x border-(--color-light-grey) font-medium text-2xl flex justify-center items-center">
            <i className="ri-twitter-x-line"></i>
          </div>
          <div className="font-medium text-2xl flex justify-center items-center">
            <i className="ri-threads-line"></i>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default VariantTwo;
