import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>
          {/* FAVICON AND TOUCH ICONS  */}
          <link
            rel="shortcut icon"
            href="images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="images/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="images/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="images/apple-touch-icon-76x76.png"
          />
          <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
          {/* GOOGLE FONTS */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
            rel="stylesheet"
          />
          {/* BOOTSTRAP CSS */}
          <link href="css/bootstrap.min.css" rel="stylesheet" />
          {/* FONT ICONS */}
          <link
            href="../../../../../use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link href="css/flaticon.css" rel="stylesheet" />
          {/* PLUGINS STYLESHEET */}
          <link href="css/menu.css" rel="stylesheet" />
          <link
            id="effect"
            href="css/dropdown-effects/fade-down.css"
            media="all"
            rel="stylesheet"
          />
          <link href="css/magnific-popup.css" rel="stylesheet" />
          <link href="css/owl.carousel.min.css" rel="stylesheet" />
          <link href="css/owl.theme.default.min.css" rel="stylesheet" />
          <link href="css/animate.css" rel="stylesheet" />
          <link href="css/jquery.datetimepicker.min.css" rel="stylesheet" />
          {/* TEMPLATE CSS */}
          <link href="css/style.css" rel="stylesheet" />
          {/* RESPONSIVE CSS */}
          <link href="css/responsive.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/modernizr.custom.js"></script>
        <script src="js/jquery.easing.js"></script>
        <script src="js/jquery.appear.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/menu.js"></script>
        {/* <script src="js/sticky.js"></script> */}
        <script src="js/jquery.scrollto.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/imagesloaded.pkgd.min.js"></script>
        <script src="js/isotope.pkgd.min.js"></script>
        <script src="js/hero-form.js"></script>
        <script src="js/contact-form.js"></script>
        <script src="js/comment-form.js"></script>
        <script src="js/appointment-form.js"></script>
        <script src="js/jquery.datetimepicker.full.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <script src="js/jquery.ajaxchimp.min.js"></script>
        <script src="js/wow.js"></script>

        <script src="js/custom.js"></script>

        <script src="js/changer.js"></script>
        <script defer src="js/styleswitch.js"></script>
      </body>
    </Html>
  );
}
