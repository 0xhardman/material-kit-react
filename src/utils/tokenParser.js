export default function tokenParser(token) {
  const splitToken = token.split('.');
  const payload = splitToken[1];
  const decodedPayload = atob(payload);
  const payloadObj = JSON.parse(decodedPayload);
  return payloadObj;
}
