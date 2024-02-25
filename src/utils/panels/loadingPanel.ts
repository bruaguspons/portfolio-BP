export const showLoadingPanel = (z_index: number) => {
    const panels: NodeListOf<HTMLElement> = document.querySelectorAll(".js-loading-panel");
    panels.forEach(panel => {
        panel.classList.remove("hidden", "sm:hidden");
        panel.style.zIndex=z_index.toString()

        panel.classList.remove("-translate-x-full", "translate-x-full");
        panel.classList.add("translate-x-0");

    })
}
export const hideLoadingPanel = () => {
    const panel = document.getElementById("js-loading-panel");
    if(panel){
        panel.classList.add("sm:hidden");
        panel.classList.add("hidden");
    }
}