import React from "react";

import AnyChart from "anychart-react";
import anychart from "anychart";

import "./styles.css";

const data = [
  {
    id: "corte",
    name: "Corte",
    fill: "#fff",
    label: {
      fontColor: "#2a333d",
      fontWeight: "bold",
    },
  },

  {
    id: "2.3",
    parent: "corte",
    name: "mantenimiento",
    fill: "#f8bbd0",
    value: 106,
  },
  { id: "2.1", parent: "corte", name: "externo", fill: "#d4e1557", value: 23 },
  { id: "2.2", parent: "corte", name: "operación", fill: "#ff6e40", value: 20 },
  { id: "3.3.3", parent: "2.3", name: "N", value: 50 },
  { id: "3.1.3", parent: "2.3", name: "T", value: 31 },
  { id: "3.2.3", parent: "2.3", name: "D", value: 25 },
  { id: "3.2.1", parent: "2.1", name: "D", value: 11 },
  { id: "3.2.2", parent: "2.2", name: "D", value: 9 },
  { id: "3.3.2", parent: "2.2", name: "N", value: 7 },
  { id: "3.3.1", parent: "2.1", name: "N", value: 7 },
  { id: "3.1.1", parent: "2.1", name: "T", value: 5 },
  { id: "3.1.2", parent: "2.2", name: "T", value: 4 },
  { id: "4.3.3.7", parent: "3.3.3", name: "FRANCISCO", value: 25 },
  { id: "4.1.3.3", parent: "3.1.3", name: "LEONEL", value: 19 },
  { id: "4.2.3.3", parent: "3.2.3", name: "LEONEL", value: 11 },
  { id: "4.3.3.3", parent: "3.3.3", name: "LEONEL", value: 11 },
  { id: "4.2.2.3", parent: "3.2.2", name: "LEONEL", value: 8 },
  { id: "4.3.3.4", parent: "3.3.3", name: "JUAN", value: 7 },
  { id: "4.2.3.4", parent: "3.2.3", name: "JUAN", value: 6 },
  { id: "4.3.3.2", parent: "3.3.3", name: "EDUARDO", value: 5 },
  { id: "4.1.3.7", parent: "3.1.3", name: "FRANCISCO", value: 5 },
  { id: "4.2.1.3", parent: "3.2.1", name: "LEONEL", value: 4 },
  { id: "4.2.3.2", parent: "3.2.3", name: "EDUARDO", value: 4 },
  { id: "4.1.3.8", parent: "3.1.3", name: "E", value: 3 },
  { id: "4.3.1.3", parent: "3.3.1", name: "LEONEL", value: 3 },
  { id: "4.1.1.3", parent: "3.1.1", name: "LEONEL", value: 3 },
  { id: "4.2.1.4", parent: "3.2.1", name: "JUAN", value: 3 },
  { id: "4.1.2.3", parent: "3.1.2", name: "LEONEL", value: 3 },
  { id: "4.3.1.4", parent: "3.3.1", name: "JUAN", value: 3 },
  { id: "4.1.3.2", parent: "3.1.3", name: "EDUARDO", value: 3 },
  { id: "4.2.1.2", parent: "3.2.1", name: "EDUARDO", value: 3 },
  { id: "4.3.2.2", parent: "3.3.2", name: "EDUARDO", value: 2 },
  { id: "4.2.3.7", parent: "3.2.3", name: "FRANCISCO", value: 2 },
  { id: "4.3.2.7", parent: "3.3.2", name: "FRANCISCO", value: 2 },
  { id: "4.3.3.8", parent: "3.3.3", name: "E", value: 2 },
  { id: "4.3.2.4", parent: "3.3.2", name: "JUAN", value: 2 },
  { id: "4.1.3.4", parent: "3.1.3", name: "JUAN", value: 1 },
  { id: "4.3.2.3", parent: "3.3.2", name: "LEONEL", value: 1 },
  { id: "4.3.1.8", parent: "3.3.1", name: "E", value: 1 },
  { id: "4.1.1.1", parent: "3.1.1", name: "EXTERNO", value: 1 },
  { id: "4.2.1.7", parent: "3.2.1", name: "FRANCISCO", value: 1 },
  { id: "4.1.2.2", parent: "3.1.2", name: "EDUARDO", value: 1 },
  { id: "4.2.3.6", parent: "3.2.3", name: "CARIMONEY", value: 1 },
  { id: "4.2.2.6", parent: "3.2.2", name: "CARIMONEY", value: 1 },
  { id: "4.2.3.5", parent: "3.2.3", name: "FANCISCO", value: 1 },
  { id: "4.1.1.4", parent: "3.1.1", name: "JUAN", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Cabezal", value: 8 },
  { id: "5.2.2.3", parent: "4.2.2.3", name: "Cabezal", value: 5 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Liftmaster", value: 5 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Software", value: 4 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Externo", value: 4 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Liftmaster", value: 3 },
  { id: "5.3.3.4", parent: "4.3.3.4", name: "Cabezal", value: 3 },
  { id: "5.2.3.4", parent: "4.2.3.4", name: "Cabezal", value: 3 },
  { id: "5.1.3.7", parent: "4.1.3.7", name: "Elevador", value: 2 },
  { id: "5.2.1.3", parent: "4.2.1.3", name: "Liftmaster", value: 2 },
  { id: "5.3.3.4", parent: "4.3.3.4", name: "Mesa horizontal", value: 2 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Perimetral", value: 2 },
  { id: "5.1.3.8", parent: "4.1.3.8", name: "Cabezal", value: 2 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Mesa horizontal", value: 2 },
  { id: "5.1.3.7", parent: "4.1.3.7", name: "Cabezal", value: 2 },
  { id: "5.1.2.3", parent: "4.1.2.3", name: "Cabezal", value: 2 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Cabezal", value: 2 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Trustore", value: 2 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Cabezal", value: 2 },
  { id: "5.3.3.2", parent: "4.3.3.2", name: "Liftmaster", value: 2 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Trustore", value: 2 },
  { id: "5.1.3.2", parent: "4.1.3.2", name: "Externo", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Mesa Horizintal", value: 1 },
  { id: "5.2.2.3", parent: "4.2.2.3", name: "Trustore", value: 1 },
  { id: "5.1.3.4", parent: "4.1.3.4", name: "Externo", value: 1 },
  { id: "5.1.1.1", parent: "4.1.1.1", name: "Chiller", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Mesa Horizintal", value: 1 },
  { id: "5.2.1.4", parent: "4.2.1.4", name: "Trustore", value: 1 },
  { id: "5.2.1.4", parent: "4.2.1.4", name: "Mesa Horizintal", value: 1 },
  { id: "5.3.1.8", parent: "4.3.1.8", name: "Trampilla", value: 1 },
  { id: "5.3.1.4", parent: "4.3.1.4", name: "Liftmaster", value: 1 },
  { id: "5.1.1.3", parent: "4.1.1.3", name: "Mejora", value: 1 },
  { id: "5.2.1.2", parent: "4.2.1.2", name: "Cabezal", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Carro de carga", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Cerca perimetral", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Cambiador de mesa", value: 1 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Elevador", value: 1 },
  { id: "5.1.1.3", parent: "4.1.1.3", name: "Externo", value: 1 },
  { id: "5.2.3.4", parent: "4.2.3.4", name: "Liftmaster", value: 1 },
  { id: "5.3.2.2", parent: "4.3.2.2", name: "Barreras de seguridad", value: 1 },
  { id: "5.3.3.8", parent: "4.3.3.8", name: "Cabezal", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Trampilla ", value: 1 },
  { id: "5.2.3.4", parent: "4.2.3.4", name: "Mesas de corte", value: 1 },
  { id: "5.2.3.4", parent: "4.2.3.4", name: "Eje X", value: 1 },
  { id: "5.3.3.8", parent: "4.3.3.8", name: "Mesa de corte", value: 1 },
  { id: "5.3.3.4", parent: "4.3.3.4", name: "Mesa de corte", value: 1 },
  { id: "5.2.3.2", parent: "4.2.3.2", name: "Externo", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Externo", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Carro ", value: 1 },
  { id: "5.2.3.2", parent: "4.2.3.2", name: "Techo", value: 1 },
  { id: "5.2.3.7", parent: "4.2.3.7", name: "Mesas de corte", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: 0, value: 1 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Perimetral", value: 1 },
  { id: "5.1.1.4", parent: "4.1.1.4", name: "Conveyor", value: 1 },
  { id: "5.2.1.4", parent: "4.2.1.4", name: "Liftmaster", value: 1 },
  { id: "5.2.1.3", parent: "4.2.1.3", name: "Externo", value: 1 },
  { id: "5.2.2.3", parent: "4.2.2.3", name: "Liftmaster", value: 1 },
  { id: "5.2.2.3", parent: "4.2.2.3", name: "Mesas de corte", value: 1 },
  { id: "5.3.2.3", parent: "4.3.2.3", name: "Liftmaster", value: 1 },
  { id: "5.3.2.4", parent: "4.3.2.4", name: "Mesas de corte", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Unidad de lubricacion", value: 1 },
  { id: "5.2.3.2", parent: "4.2.3.2", name: "Liftmaster", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Software", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Sensores y topes", value: 1 },
  { id: "5.1.3.2", parent: "4.1.3.2", name: "Mesa horizontal", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Cabezal", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Sensor lado maquina", value: 1 },
  { id: "5.3.2.7", parent: "4.3.2.7", name: "Cabezal", value: 1 },
  { id: "5.3.2.7", parent: "4.3.2.7", name: "Estante 2", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Liftmaster", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Elevador", value: 1 },
  { id: "5.2.3.7", parent: "4.2.3.7", name: "Cabezal", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Mesa 106", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Mesa horizontal", value: 1 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Mesa 123", value: 1 },
  { id: "5.3.1.3", parent: "4.3.1.3", name: "Cabezal", value: 1 },
  { id: "5.3.2.2", parent: "4.3.2.2", name: "Liftmaster", value: 1 },
  { id: "5.1.2.3", parent: "4.1.2.3", name: "Mesa de corte", value: 1 },
  { id: "5.3.3.2", parent: "4.3.3.2", name: "Conveyor", value: 1 },
  { id: "5.2.3.6", parent: "4.2.3.6", name: "Cabezal", value: 1 },
  { id: "5.2.2.6", parent: "4.2.2.6", name: "Cabezal", value: 1 },
  { id: "5.2.3.5", parent: "4.2.3.5", name: "Conveyor", value: 1 },
  { id: "5.3.2.4", parent: "4.3.2.4", name: "Mesas 109-110", value: 1 },
  { id: "5.1.3.2", parent: "4.1.3.2", name: "Chiller", value: 1 },
  { id: "5.2.1.3", parent: "4.2.1.3", name: "Cadenas verticales", value: 1 },
  { id: "5.3.3.4", parent: "4.3.3.4", name: "Sensor lado maquina", value: 1 },
  { id: "5.1.1.3", parent: "4.1.1.3", name: "Sensor receptor ", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Mesa horizontal", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Tope cadena elevador", value: 1 },
  { id: "5.3.1.4", parent: "4.3.1.4", name: "Mesa horizontal", value: 1 },
  { id: "5.3.1.4", parent: "4.3.1.4", name: "Cabezal", value: 1 },
  { id: "5.3.1.3", parent: "4.3.1.3", name: "Elevador", value: 1 },
  { id: "5.3.1.3", parent: "4.3.1.3", name: "Mesa horizontal", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Unidad lubricacion", value: 1 },
  { id: "5.1.2.2", parent: "4.1.2.2", name: "Cabezal", value: 1 },
  { id: "5.2.1.2", parent: "4.2.1.2", name: "Software", value: 1 },
  { id: "5.2.1.2", parent: "4.2.1.2", name: "Liftmaster", value: 1 },
  { id: "5.2.1.7", parent: "4.2.1.7", name: "Sensor posicion", value: 1 },
  { id: "5.1.3.7", parent: "4.1.3.7", name: "Liftmaster", value: 1 },
  { id: "5.1.3.8", parent: "4.1.3.8", name: "Mesa de corte", value: 1 },
  { id: "5.3.3.2", parent: "4.3.3.2", name: "Cabezal", value: 1 },
  { id: "5.3.3.3", parent: "4.3.3.3", name: "Estantes 1 y 2", value: 1 },
  { id: "5.3.3.7", parent: "4.3.3.7", name: "Software", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Estante 2", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Mesa de corte", value: 1 },
  { id: "5.2.3.2", parent: "4.2.3.2", name: "Cabezal", value: 1 },
  {
    id: "5.3.3.3",
    parent: "4.3.3.3",
    name: "Mesa desplazamiento Horizontal",
    value: 1,
  },
  { id: "5.3.3.2", parent: "4.3.3.2", name: "Chiller", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Mesas de corte", value: 1 },
];

class AmestiSunburstAnyChart extends React.Component {
  constructor() {
    super();
    // makes tree from the data for the sample
    const dataTree = anychart.data.tree(data, "as-table");

    const chart = anychart.sunburst(dataTree);

    // set calculation mode
    chart.calculationMode("parent-independent");

    // set chart title
    chart.title("Europe Population");

    // set custom palette
    chart.palette(["#0288d1", "#d4e1557", "#ff6e40", "#f8bbd0"]);

    // format chart labels
    chart.labels().format("{%Name}\n{%Value}{scale:(1000000)(1)|( mln)}");

    // format chart tooltip
    chart
      .tooltip()
      .format("Item:  {%Name}\n Cantidad: {%Value}{scale:(1000000)(1)|( mln)}");

    // the fill specified in the data has priority
    // set point fill
    chart.fill(function () {
      return anychart.color.darken(this.parentColor, 0.35);
    });

    // set container id for the chart
    chart.container("container");

    // initiate chart drawing
    this.state = {
      chart: chart.draw(),
    };
  }

  /* eslint lines-between-class-members: ["error", "always"]    */

  render() {
    return (
      <div>
        <AnyChart instance={this.state.chart} title="" />
      </div>
    );
  }
}

export default AmestiSunburstAnyChart;
