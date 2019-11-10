import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core'
import { DataService } from './shared/data.service'


@Component({
   selector: 'product-thumbnail',
   template :
   `<div style="border: 1px solid black;">
        <p>{{message}}</p>
        <div *ngIf="product?.type===1"  (click)="newMessage(product?.fedex?.id)">
           <span>
            <img [src]="product?.fedex?.thumbnailUrl" style="width: 11em;">
           </span>

           <span>
            <p>{{product?.fedex?.name}}</p>
            <p>{{product?.fedex?.description}}</p>
           </span>
        </div>

        <div *ngIf="product?.type===2"  (click)="newMessage(product?.ups[0]?.id)">
           <span>
            <img [src]="product?.ups[0]?.thumbnailUrl" style="width: 11em;">
           </span>
           <span>
           <p>{{product?.ups[0]?.name}}</p>
            <p>{{product?.ups[0]?.description}}</p>
           </span>
        </div>

        <div *ngIf="product.name"  (click)="newMessage(product?.id)">
          <span>
            <img [src]="product?.thumbnailUrl" style="width: 11em;">
          </span>
          <span>
           <p>{{product?.name}}</p>
           <p>{{product?.description}}</p>
          </span>
        </div>

        <button>Send message</button>
    </div>
   `
})
export class ProductThumbnailComponent implements OnInit{
@Input() product:any[]
@Output() messageEvent = new EventEmitter()



  message: string;

  constructor(private data: DataService){}

  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(num){
    this.data.changeMessage("Hello from thumbnail" + num)
  }

/////////////////////////

  openDetails(productId){
    console.log(productId)
  }

  sendMessage(num){
    this.messageEvent.emit(this.message)
  }
}
