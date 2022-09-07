import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  ionViewWillEnter() {
    this.startScan();
  }


  async startScan() {
    console.log("flag0");

    BarcodeScanner.hideBackground(); // make background of WebView transparent
    console.log("flag1");
  
    document.body.classList.add("qrscanner"); // add the qrscanner class to body

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    document.body.classList.remove("qrscanner"); // remove the qrscanner from the body

    console.log("flag2");

    // if the result has content
    console.log("flag3");

    if (result.hasContent) {
      console.log("flag4");
      console.log(result.content); // log the raw scanned content
    }
  };

}
