export const goto = (id: string) => {
  window.document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
}