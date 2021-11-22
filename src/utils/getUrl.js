export default function getCurrentUrl() {
  return location.hash.slice(1);
}