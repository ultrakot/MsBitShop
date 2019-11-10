import { Component, Input } from '@angular/core'
import { DataService } from './shared/data.service'


@Component({
  selector: 'product-details',
  template :
  ` <div>
     <p>product id <span>{{productId}}</span> Details</p>
     <img style="width: 26em;" src="http://www.cutestpaw.com/wp-content/uploads/2015/09/Very-tiny-kitty.jpg">
     <div>
       <label>Name</label><input value="Product"/>
     </div>
     <div>
       <label>Description</label><input value="blaha aaaa"/>
      </div>
      <div>
        <label>Price</label><input value="214324"/>
      </div>

      <p>{{message}}</p>
      <p>{{product?.name}}</p>
      <button>Save</button>
</div>
  `
})
export class ProductDetailsComponent{
// @Input() product:any[]
 @Input() productId:Number

  product:any

  message: string;

  constructor(private data: DataService){

    this.product = this.data.getProductsById(11);
  }

  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message)


  }

  updateDetailsByClick()
  {
    //got product id
    //goes to a service to fetch data by id
    //update product object here
  }



}
