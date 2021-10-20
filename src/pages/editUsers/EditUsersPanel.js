import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "exampleUser@gmail.com", "Головний Енергоменеджер", "NaN", 1],
  ["John Walsh", "exampleUser@gmail.com", "Користувач", "NaN", 2],
  ["Bob Herm", "exampleUser@gmail.com", "Менеджер 1 рівня", "NaN", 3],
  ["James Houston", "exampleUser@gmail.com", "Менеджер будівлі", "NaN", 4],
  ["Prabhakar Linwood", "exampleUser@gmail.com", "Користувач", "NaN", 5],
  ["Kaui Ignace", "exampleUser@gmail.com", "Головний Енергоменеджер", "NaN", 6],
  ["Esperanza Susanne", "exampleUser@gmail.com", "Користувач", "NaN", 7],
  ["Christian Birgitte", "exampleUser@gmail.com", "Менеджер 1 рівня", "NaN", 8],
  ["Meral Elias", "exampleUser@gmail.com", "Користувач", "NaN", 9],
  ["Deep Pau", "exampleUser@gmail.com", "Головний Енергоменеджер", "NaN", 10],
  ["Sebastiana Hani", "exampleUser@gmail.com", "Менеджер будівлі", "NaN", 11],
  ["Marciano Oihana", "exampleUser@gmail.com", "Головний Енергоменеджер", "NaN", 12],
  ["Brigid Ankur", "exampleUser@gmail.com", "Менеджер будівлі", "NaN", 13],
  ["Anna Siranush", "exampleUser@gmail.com", "Головний Енергоменеджер", "NaN", 14],
  ["Avram Sylva", "exampleUser@gmail.com", "Користувач", "NaN", 15],
  ["Serafima Babatunde", "exampleUser@gmail.com", "Менеджер 1 рівня", "NaN", 16],
  ["Gaston Festus", "exampleUser@gmail.com", "Менеджер 1 рівня", "NaN", 17],
];

export default function EditUsers() {
  return (
    <>
      <PageTitle title="EditUsers" button="Додати Користувача"/>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Ім'я", "Пошта", "Посада", "Доступні модулі", "№ Корпусу"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        </Grid>
    </>
  );
}