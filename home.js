let menuItems = document.querySelectorAll(".menuItems");
let overviewItems = document.querySelectorAll(".overviewItems");
overviewItems[0].addEventListener("click", () => {
    window.location.assign("product.html");
});
overviewItems[1].addEventListener("click", () => {
    window.location.assign("billing.html");
});
overviewItems[2].addEventListener("click", () => {
    window.location.assign("delivery.html");
});
overviewItems[3].addEventListener("click", () => {
    window.location.assign("sales.html");
});
overviewItems[4].addEventListener("click", () => {
    window.location.assign("payments.html");
});
overviewItems[5].addEventListener("click", () => {
    window.location.assign("transaction.html");
});
menuItems[0].addEventListener("click", () => {
    window.location.assign("profile.html");
});
menuItems[1].addEventListener("click", () => {
    window.location.assign("ranking.html");
});
menuItems[2].addEventListener("click", () => {
    window.location.assign("rating.html");
});
menuItems[3].addEventListener("click", () => {
    window.location.assign("order.html");
});
menuItems[4].addEventListener("click", () => {
    window.location.assign("setting.html");
});
menuItems[5].addEventListener("click",()=>{
    window.location.assign("index.html");
});
