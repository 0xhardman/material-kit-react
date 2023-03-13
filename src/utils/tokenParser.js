export default function tokenParser(token) {
  const splitToken = token.split('.');
  const payload = splitToken[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = atob(base64);
  const payloadObj = JSON.parse(decodedPayload);
  return payloadObj;
}
