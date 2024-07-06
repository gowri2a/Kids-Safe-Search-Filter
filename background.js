//URLs to block
let blockedUrls = [
  {
    link: "liquidgeneration.com",
  },
  {
    link: "onlineanime.org",
  },
  {
    link: "fanworkrecs.com",
  },
  {
    link: "freecartoonsex.com",
  },
  {
    link: "taremeparadise.com",
  },
  {
    link: "hentaifree.net",
  },
  {
    link: "jasonmeador.com",
  },
  {
    link: "cutepet.org",
  },
  {
    link: "shokushu.com",
  },
  {
    link: "hentai-comics.com",
  },
  {
    link: "jastusa.com",
  },
  {
    link: "peachprincess.com",
  },
  {
    link: "g-collections.com",
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
    link: "pcrdist.com",
  },
  {
    link: "hentaigameszone.com",
  },
  {
    link: "pureyaoi.org",
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
