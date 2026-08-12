const profiles = [
  {
    avatar: "/images/characters/batman/avatar.jpg",
    coverImage: "/images/characters/batman/cover.jpg",

    username: "Batman",
    fullName: "Bruce Wayne",

    subtitle: "The night is darkest before the dawn.",
    bio: "Gotham's silent guardian. Detective, strategist, and founder of Wayne Enterprises.",
    currentPositionAt: "Gotham City",
    currentJob: "Wayne Enterprises",

    skills: ["Detective Work", "Martial Arts", "Stealth", "Strategy"],

    mediaCount: 184,
    followersCount: 12400000,
    followingCount: 3,
    likesCount: 38200000,
    postsCount: 184,
    viewsCount: 94100000,

    postedAt: "2026-08-06",

    available: false,
    hiring: "$0/hr",
  },

  {
    avatar: "/images/characters/spider-man/avatar.jpg",
    coverImage: "/images/characters/spider-man/cover.jpg",

    username: "SpiderMan",
    fullName: "Peter Parker",

    subtitle: "Your friendly neighborhood Spider-Man.",
    bio: "Photographer, scientist, and Queens' resident wall-crawler trying to balance responsibility with everything else.",
    currentPositionAt: "New York City",
    currentJob: "Freelance Photographer",

    skills: ["Web-Slinging", "Photography", "Science", "Agility"],

    mediaCount: 463,
    followersCount: 8900000,
    followingCount: 182,
    likesCount: 24600000,
    postsCount: 463,
    viewsCount: 68300000,

    postedAt: "2026-08-08",

    available: true,
    hiring: "$45/hr",
  },

  {
    avatar: "/images/characters/iron-man/avatar.jpg",
    coverImage: "/images/characters/iron-man/cover.jpg",

    username: "IronMan",
    fullName: "Tony Stark",

    subtitle: "Genius. Billionaire. Philanthropist. Inventor.",
    bio: "Engineer and founder of Stark Industries. Building the future one impossible problem at a time.",
    currentPositionAt: "Malibu, California",
    currentJob: "Stark Industries",

    skills: ["Engineering", "AI", "Robotics", "Armor Design"],

    mediaCount: 728,
    followersCount: 18600000,
    followingCount: 41,
    likesCount: 71200000,
    postsCount: 728,
    viewsCount: 184000000,

    postedAt: "2026-08-10",

    available: true,
    hiring: "$1000/hr",
  },

  {
    avatar: "/images/characters/wonder-woman/avatar.jpg",
    coverImage: "/images/characters/wonder-woman/cover.jpg",

    username: "WonderWoman",
    fullName: "Diana Prince",

    subtitle: "Truth is stronger than fear.",
    bio: "Amazon warrior, diplomat, and protector of humanity. Ambassador between Themyscira and the modern world.",
    currentPositionAt: "Themyscira / Washington D.C.",
    currentJob: "Diplomat & Hero",

    skills: ["Combat", "Diplomacy", "Leadership", "Ancient History"],

    mediaCount: 241,
    followersCount: 15300000,
    followingCount: 12,
    likesCount: 49700000,
    postsCount: 241,
    viewsCount: 126000000,

    postedAt: "2026-08-07",

    available: false,
    hiring: "Free",
  },

  {
    avatar: "/images/characters/superman/avatar.jpg",
    coverImage: "/images/characters/superman/cover.jpg",

    username: "Superman",
    fullName: "Clark Kent",

    subtitle: "Hope begins with one person.",
    bio: "Reporter at the Daily Planet and protector of Metropolis. Trying to remind the world that kindness is a strength.",
    currentPositionAt: "Metropolis",
    currentJob: "Daily Planet",

    skills: ["Journalism", "Flight", "Leadership", "Investigation"],

    mediaCount: 316,
    followersCount: 21900000,
    followingCount: 7,
    likesCount: 93400000,
    postsCount: 316,
    viewsCount: 247000000,

    postedAt: "2026-08-09",

    available: false,
    hiring: "Free",
  },

  {
    avatar: "/images/characters/luke-skywalker/avatar.jpg",
    coverImage: "/images/characters/luke-skywalker/cover.jpg",

    username: "LukeSkywalker",
    fullName: "Luke Skywalker",

    subtitle: "A Jedi seeks knowledge and peace.",
    bio: "Jedi Master who helped restore the Jedi Order after the fall of the Empire.",
    currentPositionAt: "Ossus",
    currentJob: "Jedi Master",

    skills: ["Lightsaber", "The Force", "Piloting", "Jedi Lore"],

    mediaCount: 96,
    followersCount: 7400000,
    followingCount: 26,
    likesCount: 19800000,
    postsCount: 96,
    viewsCount: 52100000,

    postedAt: "2026-08-03",

    available: true,
    hiring: "$120/hr",
  },

  {
    avatar: "/images/characters/darth-vader/avatar.jpg",
    coverImage: "/images/characters/darth-vader/cover.jpg",

    username: "DarthVader",
    fullName: "Anakin Skywalker",

    subtitle: "The Force will be with me. Always.",
    bio: "Former Jedi Knight turned Sith Lord. His past remains buried beneath the armor of Darth Vader.",
    currentPositionAt: "Death Star",
    currentJob: "Imperial Commander",

    skills: ["The Force", "Lightsaber", "Leadership", "Piloting"],

    mediaCount: 66,
    followersCount: 6100000,
    followingCount: 0,
    likesCount: 17300000,
    postsCount: 66,
    viewsCount: 44200000,

    postedAt: "2026-07-31",

    available: false,
    hiring: "$500/hr",
  },

  {
    avatar: "/images/characters/ahsoka/avatar.jpg",
    coverImage: "/images/characters/ahsoka/cover.jpg",

    username: "Ahsoka",
    fullName: "Ahsoka Tano",

    subtitle: "I am no Jedi.",
    bio: "Former Jedi Padawan who chose her own path after leaving the Order. Still fighting for those who need help.",
    currentPositionAt: "Unknown",
    currentJob: "Independent Force User",

    skills: ["Dual Lightsabers", "The Force", "Reconnaissance", "Leadership"],

    mediaCount: 137,
    followersCount: 5800000,
    followingCount: 18,
    likesCount: 15400000,
    postsCount: 137,
    viewsCount: 39700000,

    postedAt: "2026-08-05",

    available: true,
    hiring: "$75/hr",
  },

  {
    avatar: "/images/characters/black-panther/avatar.jpg",
    coverImage: "/images/characters/black-panther/cover.jpg",

    username: "BlackPanther",
    fullName: "T'Challa",

    subtitle: "Wakanda forever.",
    bio: "King of Wakanda and protector of its people. Scientist, warrior, and guardian of a nation's future.",
    currentPositionAt: "Wakanda",
    currentJob: "King of Wakanda",

    skills: ["Leadership", "Martial Arts", "Science", "Tactical Planning"],

    mediaCount: 205,
    followersCount: 11200000,
    followingCount: 14,
    likesCount: 34600000,
    postsCount: 205,
    viewsCount: 108000000,

    postedAt: "2026-08-04",

    available: false,
    hiring: "Free",
  },

  {
    avatar: "/images/characters/harley-quinn/avatar.jpg",
    coverImage: "/images/characters/harley-quinn/cover.jpg",

    username: "HarleyQuinn",
    fullName: "Harleen Quinzel",

    subtitle: "Property of absolutely nobody.",
    bio: "Former psychiatrist turned unpredictable Gotham antihero. Occasionally saves the day. Usually makes it interesting.",
    currentPositionAt: "Gotham City",
    currentJob: "Independent Contractor",

    skills: ["Psychology", "Acrobatics", "Improvisation", "Chaos"],

    mediaCount: 389,
    followersCount: 9700000,
    followingCount: 217,
    likesCount: 31800000,
    postsCount: 389,
    viewsCount: 81200000,

    postedAt: "2026-08-10",

    available: true,
    hiring: "$65/hr",
  },
];

export default profiles;
