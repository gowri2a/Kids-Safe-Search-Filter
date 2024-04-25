//URLs to block
let blockedUrls = [
  {
    link: "twitter.com",
  },
  {
    link: "facebook.com",
  },
  {
    link: "instagram.com",
  },
  {
    link: "youtube.com",
  },
  {
    link: "web.whatsapp.com",
  },
  {
    link: "reddit.com",
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
