export default function (htmlElement) {
  const template = document.createElement('template');
  template.innerHTML = htmlElement;
  return template.content.firstChild;
}