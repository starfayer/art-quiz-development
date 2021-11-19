export default function getCurrentUrl() {
  return window.location.hash.slice(1);
}