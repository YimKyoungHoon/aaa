const article = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");
console.log(article);

for (let el of articles){
    el.addEveentListener("mouseenter",(e) => {
        e.currentTarget.querySelector("video").play();
    })
    el.addEveentListener("mouseleave",(e) => {
        e.currentTarget.querySelector("video").pause();
    })
    el.addEveentListener("click", (e) => {
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let video = e.currentTarget.querySelector("video").getAttribute("src");
        aside.querySelector("h1").innertext = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vid);
        aside.classList.add("on");
        aside.querySelector("video").play;
    })
}
close.addEveentListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
})