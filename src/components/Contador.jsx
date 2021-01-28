import React from "react";
import moment from "moment";
import Numero from "./Numero";

function Contador() {
  const [tiempo, setTiempo] = React.useState(moment().add(30032, "minutes"));
  const [contador, setContador] = React.useState({
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0,
  });

  React.useEffect(() => {
    conteo(tiempo);
  }, [tiempo]);

  const conteo = (tiempo) => {
    const interval = setInterval(() => {
      const segundos = tiempo.diff(moment(), "seconds");
      if (segundos >= 0) {
        const dias = Math.trunc(segundos / 86400);
        const horas = Math.trunc((segundos - dias * 86400) / 3600);
        const minutos = Math.trunc(
          (segundos - (dias * 86400 + horas * 3600)) / 60
        );
        const seg = segundos - (dias * 86400 + horas * 3600 + minutos * 60);
        setContador({
          dia: dias,
          hora: horas,
          minuto: minutos,
          segundo: seg,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  };

  return (
    <div className="centrado-vertical">
      <div className="centrado-horizontal">
        <div className="numero-tiempo">
          <Numero dato={contador.dia}></Numero>
          <div className="nombre-tiempo"> Días</div>
        </div>
        <div className="numero-tiempo">
          <Numero dato={contador.hora}></Numero>
          <div className="nombre-tiempo"> Horas</div>
        </div>
        <div className="numero-tiempo">
          <Numero dato={contador.minuto}></Numero>
          <div className="nombre-tiempo"> Minutos</div>
        </div>
        <div className="numero-tiempo">
          <Numero dato={contador.segundo}></Numero>
          <div className="nombre-tiempo"> Segundos</div>
        </div>
      </div>
    </div>
  );
}

export default Contador;
