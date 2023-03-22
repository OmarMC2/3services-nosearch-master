import React, { useState, useEffect } from "react";
import MainForm from "./components/MainForm";

function App() {
  const [emailData, setEmailData] = useState({
    userName: "",
  });
  const [dataUser, setDataUser] = useState({
    userName: "",
    zipCode: "",
    emailUser: "",
    subject: "", //'The Subject Line is Pre-Filled and can be Edited',
    text: "", //'Users will see a pre-filled email and can edit it before sending. If the system administrator prefers, subject line and/or body text can made uneditable.'
  });
  const [mp, setMp] = useState([]);
  const [senator, setSenator] = useState([]);
  const [clientId, setClientId] = useState(`641b4e853ecc21a6c35d8242`);
  const adanCID = "636dadcf2626f92aade6664a";
  const fetchData = async () => {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    const data = await fetch(
      `https://payload-demo-tpm.herokuapp.com/emails-content/?clientId=${clientId}`,
      requestOptions
    );
    const datos = await data.json();
    console.log(datos.data, "datos.data-email");

    const payload = datos.data.docs[0].content;
    if (payload.length > 0) {
      const txt = payload.map((el) => {
        console.log(el.children[0].text);
        return el.children[0].text + `\n`;
      });
      let sub = datos.data.docs[0].subject;
      dataUser.text =
        txt.length > 0
          ? txt.join(" ").replace(/#/g, " ")
          : "Introduzca un texto sugerido";
      dataUser.subject =
        sub.length > 0 ? sub : "Por favor introduzca un asunto del correos";
      console.log();
      console.log(txt);
      return txt;
    }
  };

  useEffect(() => {
    fetchData().catch((error) => console.error(error));

    console.log(dataUser);
  }, []);

  return (
    <MainForm
      setEmailData={setEmailData}
      emailData={emailData}
      dataUser={dataUser}
      setDataUser={setDataUser}
      mp={mp}
      setMp={setMp}
      senator={senator}
      setSenator={setSenator}
      clientId={clientId}
    />
  );
}

export default App;
