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
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    await BarcodeScanner.checkPermission({ force: true }); // check camera permission
    document.body.classList.add("qrscanner"); // add the qrscanner class to body to hide ionic specific backgrounds
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    document.body.classList.remove("qrscanner"); // remove the qrscanner from the body to unhide ionic specific backgrounds

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  };

}
