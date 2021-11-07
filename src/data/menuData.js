import itemTypes from "./itemTypes";

const menuData = [
  {
    key: "es",
    name: "Exploring Switzerland",
    description: `My YouTube channel with videos from all over Switzerland`,
    type: itemTypes.EXTERNAL,
    url: "https://www.youtube.com/c/MaikKellerhals",
  },
  {
    key: "photos",
    name: "Photography",
    description: `My photos - I'm not in them ;)`,
    type: itemTypes.EXTERNAL,
    url: "https://maikkellerhals.myportfolio.com/",
  },
  {
    key: "github",
    name: "GitHub",
    description: `My GitHub profile - Programming stuff`,
    type: itemTypes.EXTERNAL,
    url: "https://github.com/maikkel",
  },
  {
    key: "js",
    name: "JavaScript Experiments",
    description: `Some old stuff I developed in JavaScript`,
    type: itemTypes.EXTERNAL,
    url: "https://kelmai.com/",
  },
  {
    key: "music",
    name: "My Music",
    description: `Some of the music I made - It's not very good`,
    type: itemTypes.EXTERNAL,
    url: "https://soundcloud.com/maik_kel",
  },
];

export default menuData;
