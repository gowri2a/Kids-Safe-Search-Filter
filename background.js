//URLs to block
let blockedUrls = [
  {
    link: "liquidgeneration.com",
  },
  {
    link: "galeon.com",
  },
  {
    link: "fanworkrecs.com",
  },
  {
    link: "animehouse.com",
  },
  {
    link: "taremeparadise.com",
  },
  {
    link: "dedelind.com",
  },
  {
    link: "bettiepage.com",
  },
  {
    link: "thebettiepage.com",
  },
  {
    link: "shokushu.com",
  },
  {
    link: "ivannarichman.com",
  },
  {
    link: "jastusa.com",
  },
  {
    link: "peachprincess.com",
  },
  {
    link: "aimeesweet.com",
  },
  {
    link: "canadahentai.com",
  },
  {
    link: "hirameki-int.com",
  },
  {
    link: "jlist.com",
  },
  {
    link: "himeyashop.com",
  },
  {
    link: "bobbieroxxs.com",
  },
  {
    link: "hentaigameszone.com",
  },
  {
    link: "dirtyfantasies.com",
  },
  {
    link: "pinterest.com",
  },
];

blockedUrls.forEach((element) => {
  if (window.location.origin.includes(element.link)) {
    document.getElementsByTagName("body")[0].innerHTML =
      '<div><img src="https://i.ibb.co/BC9yWNx/backgroundimg.jpg" style="margin: 0px auto; height: 100vh; display: flex;"></div>';
  }
});
