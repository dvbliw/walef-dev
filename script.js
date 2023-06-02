function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#avatar img")

  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar do light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
