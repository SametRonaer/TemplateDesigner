import axios from 'axios';

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

export{
    sendJsonTemplate
}