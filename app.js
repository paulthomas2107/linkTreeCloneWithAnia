const shareButtons = document.querySelectorAll('.title-share-button');

async function copyText(e) {
  // prevent button going to site
  e.preventDefault();
  const link = this.getAttribute('link');
  try {
    await navigator.clipboard.writeText(link)
    alert("Clipboard now contains link.")
  } catch (err){
    console.error(err)
  }

}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener('click', copyText)
);


    