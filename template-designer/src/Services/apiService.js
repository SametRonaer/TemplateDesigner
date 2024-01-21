import axios from 'axios';
import { renderPreviousWork } from '../HelperFunctions/CanvasRendererFromJson';

const baseUrl = "https://storio.datasolin.xyz/ApiV1";
const apiKey = "ry6AZJ3jd7aTW42n";



async function sendJsonTemplate(parametric, base64, designCode){
    const url =  `${baseUrl}/paylasimKayitPanel.php?ApiKey=${apiKey}&paylasimKodu=${designCode}`;
   

    var formData = new FormData();
    var trimmedBase64 = base64.replace(/(\r\n|\n|\r)/gm, "");
    formData.append("paylasimTasarimJson",parametric);
    formData.append("paylasimTasarimMobilJson", trimmedBase64);
    

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
  const url =  `${baseUrl}/paylasimPanel.php?ApiKey=${apiKey}&paylasimKodu=${sharingCode}`;
      axios({
        method: "get",
        url: url,
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