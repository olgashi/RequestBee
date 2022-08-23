const copyUrl = (event) => {
  event.preventDefault();
  const copyText = document.getElementById("endpoint-url")

  navigator.clipboard.writeText(copyText.textContent)
}

export default copyUrl;