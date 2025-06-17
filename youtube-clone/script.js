// Nome: Rafael Gustavo Leal dos Santos n°27 
document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expanded');
}
