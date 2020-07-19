import { openDatabase, Transaction } from "react-native-sqlite-storage";

export function insert() {
  const db = openDatabase({ name: "stock.db", location: "default" });
}

export async function config() {
  const db = await openDatabase({
    name: "stock.db",
    createFromLocation: "../db"
  });

  db.transaction((tx: Transaction) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS t_stock(
               id INTEGER PRIMARY KEY AUTOINCREMENT, 
               price REAL, 
               description VARCHAR(255)`
    );
  });
}
