import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class DataService{

  private messageSource = new BehaviorSubject<string>("default me");
  currentMessage = this.messageSource.asObservable();



  constructor(){}

  changeMessage(message: string){
      this.messageSource.next(message)
  }

  getProducts(){
    return PRODUCTS
  }

  getProductsById(id:number){
    return PRODUCTS.find(product => product.id === id)
  }




}


const PRODUCTS = [
  {
    "fedex": {
      "creationDate": 1530110788904,
      "description": "accusamus beatae ad facilis cum similique qui sunt",
      "id": 1,
      "name": "product 1",
      "price": 10,
      "thumbnailUrl": "http:\/\/placehold.it\/150\/92c952",
      "url": "http:\/\/placehold.it\/600\/92c952"
    },
    "type": 1
  },
  {
    "fedex": {
      "creationDate": 1530110788904,
      "description": "reprehenderit est deserunt velit ipsam",
      "id": 2,
      "name": "product 2",
      "price": 11,
      "thumbnailUrl": "http:\/\/placehold.it\/150\/771796",
      "url": "http:\/\/placehold.it\/600\/771796"
    },
    "type": 1
  },
  {
    "type": 2,
    "ups": [
      {
        "creationDate": 1530110788904,
        "description": "officia porro iure quia iusto qui ipsa ut modi",
        "id": 3,
        "name": "product 3",
        "price": 13,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/24f355",
        "url": "http:\/\/placehold.it\/600\/24f355"
      }
    ]
  },
  {
    "type": 2,
    "ups": [
      {
        "creationDate": 1530110788904,
        "description": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "id": 4,
        "name": "product 4",
        "price": 100,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/d32776",
        "url": "http:\/\/placehold.it\/600\/d32776"
      }
    ]
  },
  {
    "type": 2,
    "ups": [
      {
        "creationDate": 1530110788904,
        "description": "natus nisi omnis corporis facere molestiae rerum in",
        "id": 5,
        "name": "product 5",
        "price": 15,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/f66b97",
        "url": "http:\/\/placehold.it\/600\/f66b97"
      }
    ]
  },
  {
    "creationDate": 1530110788904,
    "deliveryComp": "dhl",
    "description": "accusamus ea aliquid et amet sequi nemo",
    "id": 6,
    "name": "product 6",
    "price": 10,
    "thumbnailUrl": "http:\/\/placehold.it\/150\/56a8c2",
    "type": 3,
    "url": "http:\/\/placehold.it\/600\/56a8c2"
  },
  {
    "creationDate": 1530110788904,
    "deliveryComp": "dhl",
    "description": "officia delectus consequatur vero aut veniam explicabo molestias",
    "id": 7,
    "name": "product 7",
    "price": 14,
    "thumbnailUrl": "http:\/\/placehold.it\/150\/b0f7cc",
    "type": 3,
    "url": "http:\/\/placehold.it\/600\/b0f7cc"
  },
  {
    "creationDate": 1530110788904,
    "deliveryComp": "dhl",
    "description": "aut porro officiis laborum odit ea laudantium corporis",
    "id": 8,
    "name": "product 8",
    "price": 140,
    "thumbnailUrl": "http:\/\/placehold.it\/150\/54176f",
    "type": 3,
    "url": "http:\/\/placehold.it\/600\/54176f"
  },
  {
    "type": 2,
    "ups": [
      {
        "creationDate": 1530110788904,
        "description": "qui eius qui autem sed",
        "id": 9,
        "name": "product 9",
        "price": 13,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/51aa97",
        "url": "http:\/\/placehold.it\/600\/51aa97"
      },
      {
        "creationDate": 1530110788904,
        "description": "beatae et provident et ut vel",
        "id": 10,
        "name": "product 10",
        "price": 111,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/810b14",
        "url": "http:\/\/placehold.it\/600\/810b14"
      }
    ]
  },
  {
    "fedex": {
      "creationDate": 1530110788904,
      "description": "nihil at amet non hic quia qui",
      "id": 11,
      "name": "product 11",
      "price": 100,
      "thumbnailUrl": "http:\/\/placehold.it\/150\/1ee8a4",
      "url": "http:\/\/placehold.it\/600\/1ee8a4"
    },
    "type": 1
  },
  {
    "fedex": {
      "creationDate": 1530110788904,
      "description": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "id": 12,
      "name": "product 12",
      "price": 11,
      "thumbnailUrl": "http:\/\/placehold.it\/150\/66b7d2",
      "url": "http:\/\/placehold.it\/600\/66b7d2"
    },
    "type": 1
  },
  {
    "fedex": {
      "creationDate": 1530110788904,
      "description": "repudiandae iusto deleniti rerum",
      "id": 13,
      "name": "product 13",
      "price": 120,
      "thumbnailUrl": "http:\/\/placehold.it\/150\/197d29",
      "url": "http:\/\/placehold.it\/600\/197d29"
    },
    "type": 1
  },
  {
    "fedex": {
      "creationDate": 1530110788904,
      "description": "est necessitatibus architecto ut laborum",
      "id": 14,
      "name": "product 14",
      "price": 111,
      "thumbnailUrl": "http:\/\/placehold.it\/150\/61a65",
      "url": "http:\/\/placehold.it\/600\/61a65"
    },
    "type": 1
  },
  {
    "type": 2,
    "ups": [
      {
        "creationDate": 1530110788904,
        "description": "harum dicta similique quis dolore earum ex qui",
        "id": 15,
        "name": "product 15",
        "price": 120,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/f9cee5",
        "url": "http:\/\/placehold.it\/600\/f9cee5"
      },
      {
        "creationDate": 1530110788904,
        "description": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "id": 16,
        "name": "product 16",
        "price": 120,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/fdf73e",
        "url": "http:\/\/placehold.it\/600\/fdf73e"
      },
      {
        "creationDate": 1530110788904,
        "description": "natus doloribus necessitatibus ipsa",
        "id": 17,
        "name": "product 17",
        "price": 142,
        "thumbnailUrl": "http:\/\/placehold.it\/150\/9c184f",
        "url": "http:\/\/placehold.it\/600\/9c184f"
      }
    ]
  },
  {
    "creationDate": 1530110788904,
    "deliveryComp": "dhl",
    "description": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "id": 18,
    "name": "product 18",
    "price": 113,
    "thumbnailUrl": "http:\/\/placehold.it\/150\/1fe46f",
    "type": 3,
    "url": "http:\/\/placehold.it\/600\/1fe46f"
  },
  {
    "creationDate": 1530110788904,
    "deliveryComp": "dhl",
    "description": "perferendis nesciunt eveniet et optio a",
    "id": 19,
    "name": "product 19",
    "price": 113,
    "thumbnailUrl": "http:\/\/placehold.it\/150\/56acb2",
    "type": 3,
    "url": "http:\/\/placehold.it\/600\/56acb2"
  },
  {
    "creationDate": 1530110788904,
    "deliveryComp": "dhl",
    "description": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "id": 20,
    "name": "product 20",
    "price": 190,
    "thumbnailUrl": "http:\/\/placehold.it\/150\/8985dc",
    "type": 3,
    "url": "http:\/\/placehold.it\/600\/8985dc"
  }
]

