const hero = document.getElementsByClassName("hero");
hero[0].innerText = "dede";
hero[0].style.color = "red";

const fitur = document.getElementById("fitur");
fitur.innerHTML = "<h1>dede</h1>";
fitur.style.backgroundColor = "blue";
fitur.style.textAlign = "center";

const h2 = document.getElementsByTagName("h2");
for (let i = 0; i < h2.length; i++) {
  h2[i].innerText = "oke";
  h2[i].style.color = "blue";
}
// for (let i = 0; i < h2.length; i++) {
h2[2].addEventListener("click", function () {
  alert((h2[2].innerText = "dede"));
});

const img = document.getElementsByTagName("img");
img[0].src =
  "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/18/0f281526-aff1-48cf-8d3e-6a96ab1cce41.jpg";
