import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Row } from './row';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  hideHelp = false;
  hideTitle = "open";
  fullname = "";
  rows: Row[] = new Array();

  constructor(public navCtrl: NavController,
              private http: Http) {

    this.http.get("./assets/data/rows.json")
      .subscribe(
        res => {
          if (!res.ok) {
            console.error("Failed with status: " + res.status + "\nTrying to find fil at " + "./assets/data/rows.json");
          }

          var jsonRes = res.json();

          this.rows = jsonRes;
        }
      );
  }

  hide() {
    if (this.hideHelp) {
      this.hideHelp = false;
      this.hideTitle = "open";
    } else {
      this.hideHelp = true;
      this.hideTitle = "close";
    }
  }

  showIcon(row: Row) {
    row.iconVisible = true;
  }

  hideIcon(row: Row) {
    row.iconVisible = false;
  }

  removeLine(i: number) {
    this.rows.splice(i, 1);
  }

  addRow() {
    this.rows.push(new Row("Fake Line", "fakeline@example.com", "Fake City", "Fake group", "Fake days", "DD/MM/YYYY HH:MI"));
  }

}
