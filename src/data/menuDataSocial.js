import itemTypes from "./itemTypes";

const menuData = [
  {
    key: "fb",
    name: "Facebook",
    description: `My Facebook page (german)`,
    type: itemTypes.EXTERNAL,
    url: "https://www.facebook.com/maik.be",
  },
  {
    key: "ig",
    name: "Instagram",
    description: `My Instagram (german)`,
    type: itemTypes.EXTERNAL,
    url: "https://www.instagram.com/kellerhalsmaik/",
  },
  {
    key: "email",
    name: "E-Mail",
    description: `Send me an E-Mail`,
    type: itemTypes.EXTERNAL,
    url: "mailto:maik.kellerhals@gmail.com",
  },
];

export default menuData;
