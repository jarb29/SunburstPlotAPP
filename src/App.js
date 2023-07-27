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
    id: "2.1",
    parent: "corte",
    name: "mantenimiento",
    fill: "#d4e1557",
    value: 10,
  },
  { id: "2.3", parent: "corte", name: "operación", fill: "#f8bbd0", value: 4 },
  { id: "2.2", parent: "corte", name: "externa", fill: "#ff6e40", value: 3 },
  { id: "3.1.1", parent: "2.1", name: "D", value: 5 },
  { id: "3.2.1", parent: "2.1", name: "T", value: 3 },
  { id: "3.2.3", parent: "2.3", name: "T", value: 2 },
  { id: "3.3.1", parent: "2.1", name: "N", value: 2 },
  { id: "3.3.2", parent: "2.2", name: "N", value: 2 },
  { id: "3.1.2", parent: "2.2", name: "D", value: 1 },
  { id: "3.1.3", parent: "2.3", name: "D", value: 1 },
  { id: "3.3.3", parent: "2.3", name: "N", value: 1 },
  { id: "4.2.1.2", parent: "3.2.1", name: "EDUARDOORTEGA", value: 3 },
  {
    id: "4.1.1.1",
    parent: "3.1.1",
    name: "FRANCISCOADOLFOVENEGASDIAZ",
    value: 2,
  },
  { id: "4.1.1.2", parent: "3.1.1", name: "EDUARDOORTEGA", value: 2 },
  { id: "4.3.1.2", parent: "3.3.1", name: "EDUARDOORTEGA", value: 2 },
  { id: "4.3.2.2", parent: "3.3.2", name: "EDUARDOORTEGA", value: 2 },
  { id: "4.1.2.2", parent: "3.1.2", name: "EDUARDOORTEGA", value: 1 },
  { id: "4.1.3.3", parent: "3.1.3", name: "JUANCARLOSAEDORAMIREZ", value: 1 },
  { id: "4.2.3.2", parent: "3.2.3", name: "EDUARDOORTEGA", value: 1 },
  { id: "4.1.1.3", parent: "3.1.1", name: "JUANCARLOSAEDORAMIREZ", value: 1 },
  { id: "4.3.3.2", parent: "3.3.3", name: "EDUARDOORTEGA", value: 1 },
  { id: "4.2.3.3", parent: "3.2.3", name: "JUANCARLOSAEDORAMIREZ", value: 1 },
  { id: "5.1.1.1", parent: "4.1.1.1", name: "Bastidor palas", value: 1 },
  { id: "5.3.1.2", parent: "4.3.1.2", name: "Liftmaster", value: 1 },
  { id: "5.1.1.1", parent: "4.1.1.1", name: "Mesas de corte", value: 1 },
  { id: "5.3.2.2", parent: "4.3.2.2", name: "Software", value: 1 },
  { id: "5.2.3.3", parent: "4.2.3.3", name: "Mesas de corte", value: 1 },
  { id: "5.2.1.2", parent: "4.2.1.2", name: "Conveyor belt", value: 1 },
  { id: "5.3.3.2", parent: "4.3.3.2", name: "Liftmaster", value: 1 },
  { id: "5.3.2.2", parent: "4.3.2.2", name: "Coveyor belt", value: 1 },
  { id: "5.1.1.3", parent: "4.1.1.3", name: "Trudisk", value: 1 },
  { id: "5.1.1.2", parent: "4.1.1.2", name: "Sistema seguridad", value: 1 },
  { id: "5.2.1.2", parent: "4.2.1.2", name: "Software", value: 1 },
  { id: "5.2.1.2", parent: "4.2.1.2", name: "Cabezal", value: 1 },
  { id: "5.2.3.2", parent: "4.2.3.2", name: "Linea lubricacion", value: 1 },
  { id: "5.1.3.3", parent: "4.1.3.3", name: "Conveyor belt", value: 1 },
  { id: "5.1.1.2", parent: "4.1.1.2", name: "Bastidor palas", value: 1 },
  { id: "5.1.2.2", parent: "4.1.2.2", name: "Disco duro", value: 1 },
  { id: "5.3.1.2", parent: "4.3.1.2", name: "Software", value: 1 },
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
