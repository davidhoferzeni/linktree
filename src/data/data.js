const socialLinks = [
  "https://github.com/davidhoferzeni",
  "https://www.linkedin.com/in/david-hofer-zeni-02456915a/",
];
const profileData = {
  userName: "David Hofer-Zeni",
  photoLink: "profilePic.png",
  desc: "DevOps Engineer | Software Engineer | Create Writer",
};

const themeData = {
  light: {
    backgroundColor: "white",
    onHoverBackgroundColor: "#dfe6e9",
    cardBackgroundColor: "#ffffff",
    onHoverTextColor: "#636e72",
    footerColor: "black",
    footerSocialLinkColor: "white",
    headerFontColor: "#black",
    CardtextColor: "#2d3436",
  },
  dark: {
    backgroundColor: "#000000",
    onHoverBackgroundColor: "#02040a",
    cardBackgroundColor: "#222222",
    onHoverTextColor: "white",
    footerColor: "white",
    footerSocialLinkColor: "white",
    headerFontColor: "white",
    CardtextColor: "white",
  },
};
const linkData = [
  {
    id: 1,
    link: "https://ovid-draw.azurewebsites.net/",
    name: "Online Drawing App",
    image: "drawapp.png",
  },
  {
    id: 2,
    link: "https://sandbox.luvdav.com/Core_ts_sb/",
    name: "Typescript Core Library Storybook",
    image: "storybook.png",
  },
  {
    id: 3,
    link: "https://portfolio.luvdav.com/",
    name: "Creative Writing Portfolio",
    image: "ink.png",
  },
];

export { socialLinks, profileData, linkData, themeData };
