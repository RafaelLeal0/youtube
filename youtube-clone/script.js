// Nome: Rafael Gustavo Leal dos Santos n°27 
document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expanded');
}
  const seta = document.querySelector(".categorias .seta");
  const scrollArea = document.querySelector(".categorias .scroll");

  seta.addEventListener("click", () => {
    scrollArea.scrollBy({ left: 150, behavior: "smooth" });
  });

