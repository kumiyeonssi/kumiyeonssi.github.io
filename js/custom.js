$(document).ready(function () {
  bsCustomFileInput.init()
  var btn = document.getElementById('btnResetForm')
  var form = document.querySelector('form')
  btn.addEventListener('click', function () {
  form.reset()
})

})

function targetFile(id) {
  /* Get the text field */
  var copyText = document.getElementById("targetFile" + id);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
  console.log(copyText);

}

