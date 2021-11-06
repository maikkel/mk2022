import itemTypes from "./itemTypes";

const menuData = [
  {
    key: "exploring-switzerland",
    name: "Exploring Switzerland",
    description: `My YouTube channel with videos from all over Switzerland`,
    image: "none.png",
    type: itemTypes.EXTERNAL,
    url: "https://www.youtube.com/c/MaikKellerhals",
  },
  {
    key: "github",
    name: "GitHub",
    description: `My GitHub profile`,
    image: "none.png",
    type: itemTypes.COMPONENT,
    url: "/item2",
  },
  {
    key: "item3",
    name: "Item 3",
    description: `Description for Item 3`,
    image: "none.png",
    type: itemTypes.COMPONENT,
    url: "/item3",
  },
  {
    key: "item4",
    name: "Item 4",
    description: `Description for Item 4`,
    image: "none.png",
    type: itemTypes.COMPONENT,
    url: "/item4",
  },
];

export default menuData;
