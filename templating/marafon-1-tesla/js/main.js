$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
  $(".header-btn").on("click", () => {
    $(".menu").addClass("active");
  });
  $(".close-btn").on("click", () => {
    $(".menu").removeClass("active");
  });
});
