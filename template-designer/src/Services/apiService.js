import axios from 'axios';
import { renderPreviousWork } from '../HelperFunctions/CanvasRendererFromJson';

const baseUrl = "https://storio.datasolin.xyz/ApiV1";
const apiKey = "ry6AZJ3jd7aTW42n";
const sharingCode = "530068"


async function sendJsonTemplate(parametric, base64){
    const url =  `${baseUrl}/paylasimKayitPanel.php?ApiKey=${apiKey}&paylasimKodu=530068`;
   

var formData = new FormData();
formData.append("paylasimTasarimJson",parametric);
formData.append("paylasimTasarimMobilJson", base64);


axios({
  method: "post",
  url: url,
  data: formData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  })

 }


 async function getJsonTemplate(sharingCode){
  const url =  `${baseUrl}/paylasimKayitPanel.php?ApiKey=${apiKey}&paylasimKodu=${sharingCode}`;
  //const url = "http://localhost:3001/dummy";
  axios({
    method: "get",
    url: url,
    //headers: { "Accept": "*/*"},
  })
  .then(response => {
      let design = response.data.data.Paylasim[0].paylasimTasarimJson
      if (design){
        renderPreviousWork(design);
      }
  }).catch(error => {
    console.log(error);
  })
 }

export{
    sendJsonTemplate,
    getJsonTemplate
}