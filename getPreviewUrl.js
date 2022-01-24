// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file

// Oficial para produção
let previewSecret = 'skGPC9HCrOEjSWBZS36Cd6sIZpSEblNFRis80eMGcRHqL7F0vkLpMH08HWlLAPXZWkW4rUCw7B8efWV1kXcRsYpaGQKTCcO2OtfHqmpW9xpD3Xy22XxFIL8JueJl9snWMFb3MPoJsavDNCgN0tGVyM69Bzd7vElLiZgompsGlAeLgphAWVLv';

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://proaviagens.netlify.com`
const localUrl = `http://localhost:3000`

export default function resolveProductionUrl(doc) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl;
  if (window.location.hostname === 'localhost') {
    previewSecret = '1234';
  }

  const previewUrl = new URL(baseUrl)

  const urlDirectory = getUrlDirectory(doc._type);

  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`secret`, previewSecret)
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? ``)
  urlDirectory && previewUrl.searchParams.append(`directory`, urlDirectory)

  console.log('calling resolveProductionUrl :>> ');

  return previewUrl.toString()
}

function getUrlDirectory(docType) {
  let urlDirectory = '';
  switch (docType) {
    case 'travel':
      urlDirectory = '/viagem'
      break;
    case 'post':
      urlDirectory = '/blog'
      break;
  }
  return urlDirectory;
}

// http://localhost:3000/api/preview?secret=1234&slug=alpes-suicos
// http://localhost:3000/api/preview?secret=1234&slug=alpes-suicos&directory=%2Fviagem