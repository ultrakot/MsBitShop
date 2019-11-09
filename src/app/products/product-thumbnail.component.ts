import { Component,OnInit, Input } from '@angular/core'


@Component({
   selector: 'product-thumbnail',
   template :
   `<div style="border: 1px solid black;">
        <div *ngIf="product?.type===1">
           <span>
            <img [src]="product?.fedex?.thumbnailUrl" style="width: 11em;">
           </span>

           <span>
            <p>{{product?.fedex?.name}}</p>
            <p>{{product?.fedex?.description}}</p>
           </span>
        </div>

        <div *ngIf="product?.type===2">
           <span>
            <img [src]="product?.ups[0]?.thumbnailUrl" style="width: 11em;">
           </span>
           <span>
           <p>{{product?.ups[0]?.name}}</p>
            <p>{{product?.ups[0]?.description}}</p>
           </span>
        </div>

        <div *ngIf="product.name">
          <span>
            <img [src]="product?.thumbnailUrl" style="width: 11em;">
          </span>
          <span>
           <p>{{product?.name}}</p>
           <p>{{product?.description}}</p>
          </span>
        </div>
    </div>


   `
})
export class ProductThumbnailComponent{
@Input() product:any[]

handleDeleteMe(){
  console.log("deleted");
}

}
