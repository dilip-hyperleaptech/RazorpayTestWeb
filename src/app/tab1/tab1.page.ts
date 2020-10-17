import { Component, NgZone } from '@angular/core';
import { ICustomWindow, WindowRefService } from '../window-ref.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  currencyIcon = 'INR'
  paymentAmount = '100'
  public _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: 'rzp_test_dHY1jw3osOZxOI',
    name: 'New Test store',
    description: 'Test Shopping',
    amount: 100, // razorpay takes amount in paisa
    order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    image: "https://uploads-ssl.webflow.com/5e36a269c62330b0b318dd27/5e36a378f4dd532ade3c7708_Hyperleap_MainLogo_1ColorGreen.png",
    prefill: {
      name: "dilip",
      email: "dilip@hyperleap.com",
      contact: "9705473950"
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
        })
      })
    }
  };

  constructor(
    private zone: NgZone,
    private winRef: WindowRefService
  ) {
    this._window = this.winRef.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }

}
