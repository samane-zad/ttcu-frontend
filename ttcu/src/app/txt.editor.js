var editor = window.pell.init({
  element: document.getElementById('editor'),
  actions: ['bold', 'italic', 'underline', 'heading1', 'heading2', 'olist', 'ulist', 'link', 'image', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull'],
  defaultParagraphSeparator: 'p',
  onChange: function (html) {
    document.getElementById('description').value   = html
  }
})
editor.content.innerHTML = document.getElementById('description').value
function TextArea(){
editor.content.innerHTML = document.getElementById('description').value
}function toggleEditor() {
if (document.getElementById("source-editor").style.display == "none") {
  document.getElementById("source-editor").style.display = "block";
  document.getElementById("visual-editor").style.display = "none";
  document.getElementById("btn_lbl").value = "Visual Editor";
} else {
  document.getElementById("source-editor").style.display = "none";
  document.getElementById("visual-editor").style.display = "block";
  document.getElementById("btn_lbl").value = "Source Editor";
}
}
