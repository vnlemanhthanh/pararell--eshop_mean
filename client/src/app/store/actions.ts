import { Action } from '@ngrx/store';

export enum EshopActions {
  ChangeLanguage = '[Auth] Change Language',
  SignIn = '[Auth] SignIn',
  SignInSuccess = '[Auth] SignInSuccess',
  SignUp = '[Auth] SignUp',
  SignUpSuccess = '[Auth] SignUpSuccess',
  GetUser = '[Auth] GetUser',
  StoreUser = '[Auth] StoreUser',
  GetUserFail = '[Auth] GetUserFail',

  CleanError = '[Product] Clean Error',
  FilterPrice = '[Product] FilterPrice',
  UpdatePosition = '[Product] UpdatePosition',
  GetCart = '[Product] GetCart',
  GetCartSuccess = '[Product] GetCartSuccess',
  AddToCart = '[Product] AddToCart',
  AddToCartSuccess = '[Product] AddToCartSuccess',
  RemoveFromCart = '[Product] RemoveFromCart',
  GetProducts = '[Product] GetProducts',
  GetProductsSuccess = '[Product] GetProductsSuccess',
  GetCategories = '[Product] GetCategories',
  GetCategoriesSuccess = '[Product] GetCategoriesSuccess',
  GetProductsSearch = '[Product] GetProductsSearch',
  GetProductsSearchSuccess = '[Product] GetProductsSearchSuccess',
  GetProduct = '[Product] GetProduct',
  GetProductSuccess = '[Product] GetProductSuccess',
  MakeOrderWithPayment = '[Product] MakeOrderWithPayment',
  MakeOrderWithPaymentSuccess = '[Product] MakeOrderWithPaymentSuccess',
  MakeOrderWithPaymentFail = '[Product] MakeOrderWithPaymentFail',
  MakeOrder = '[Product] MakeOrder',
  MakeOrderSuccess = '[Product] MakeOrderSuccess',
  MakeOrderFail = '[Product] MakeOrderFail',
  StripeSession = '[Product] StripeSession',
  StripeSessionSuccess = '[Product] StripeSessionSuccess',
  StripeSessionError = '[Product] StripeSessionError',
  GetUserOrders = '[Product] GetUserOrders',
  GetUserOrdersSuccess = '[Product] GetUserOrdersSuccess',

  GetAllProducts = '[Dashboard] GetAllProducts',
  GetAllProductsSuccess = '[Dashboard] GetAllProductsSuccess',
  GetAllTranslations = '[Dashboard] GetAllTranslations',
  GetAllTranslationsSuccess = '[Dashboard] GetAllTranslationsSuccess',
  EditTranslation = '[Dashboard] EditTranslation',
  EditTranslationSuccess = '[Dashboard] EditTranslationSuccess',
  GetOrders = '[Dashboard] GetOrders',
  GetOrdersSuccess = '[Dashboard] GetOrdersSuccess',
  GetOrder = '[Dashboard] GetOrder',
  GetOrderSuccess = '[Dashboard] GetOrderSuccess',
  UpdateOrder = '[Dashboard] UpdateOrder',
  AddProduct = '[Dashboard] AddProduct',
  AddProductSuccess = '[Dashboard] AddProductSuccess',
  EditProduct = '[Dashboard] EditProduct',
  EditProductSuccess  = '[Dashboard] EditProductSuccess',
  RemoveProduct = '[Dashboard] RemoveProduct',
  RemoveProductSuccess = '[Dashboard] RemoveProductSuccess',
  GetImages = '[Dashboard] GetImages',
  GetImagesSuccess = '[Dashboard] GetImagesSuccess',
  AddProductImage = '[Dashboard] AddProductImage',
  AddProductImagesUrl = '[Dashboard] AddProductImagesUrl',
  AddProductImagesUrlSuccess = '[Dashboard] AddProductImagesSuccessUrl',
  RemoveProductImage = '[Dashboard] RemoveProductImage',
  RemoveProductImageSuccess = '[Dashboard] RemoveProductImageSuccess',
  SetUploader = '[Dashboard] SetUploader',
  SetUploaderSuccess = '[Dashboard] SetUploaderSuccess',
  SetUploaderError = '[Dashboard] SetUploaderError',

  SendContact = '[Eshop] SendContact',
  SendContactSuccess = '[Eshop] SendContactSuccess',
  SendContactFail = '[Eshop] SendContactFail',
  GetPages = '[Eshop] GetPages',
  GetPagesSuccess = '[Eshop] GetPagesSuccess',
  GetPagesFail = '[Eshop] GetPagesFail',
  AddOrEditPage = '[Eshop] AddOrEditPage',
  AddOrEditPageSuccess = '[Eshop] AddOrEditPageSuccess',
  AddOrEditPageFail = '[Eshop] AddOrEditPageFail',
  RemovePage = '[Eshop] RemovePage',
  RemovePageSuccess = '[Eshop] RemovePageSuccess',
  RemovePageFail = '[Eshop] RemovePageFail'
}



// AUTH
export class ChangeLanguage implements Action {
  readonly type = EshopActions.ChangeLanguage;
  constructor(public payload: any ) {
  }
}

export class SignIn implements Action {
  readonly type = EshopActions.SignIn;
  constructor(public payload: any ) {
  }
}

export class SignInSuccess implements Action {
  readonly type = EshopActions.SignInSuccess;
  constructor(public payload: any ) {
  }
}

export class SignUp implements Action {
  readonly type = EshopActions.SignUp;
  constructor(public payload: any ) {
  }
}

export class SignUpSuccess implements Action {
  readonly type = EshopActions.SignUpSuccess;
  constructor(public payload: any ) {
  }
}

export class GetUser implements Action {
  readonly type = EshopActions.GetUser;
}

export class GetUserFail implements Action {
readonly type = EshopActions.GetUserFail;
}

export class StoreUser implements Action {
  readonly type = EshopActions.StoreUser;
   constructor(public payload: any ) {
   }
}

// PRODUCT

export class CleanError implements Action {
  readonly type = EshopActions.CleanError;
  constructor( ) {
  }
}

export class FilterPrice implements Action {
  readonly type = EshopActions.FilterPrice;
    constructor(public payload: any ) {
  }
}

export class UpdatePosition implements Action {
readonly type = EshopActions.UpdatePosition;
  constructor(public payload: any ) {
 }
}

export class GetCart implements Action {
  readonly type = EshopActions.GetCart;
}

export class GetCartSuccess implements Action {
  readonly type = EshopActions.GetCartSuccess;
  constructor(public payload: any ) {
  }
}

export class AddToCart implements Action {
  readonly type = EshopActions.AddToCart;
  constructor(public payload: any ) {
  }
}

export class AddToCartSuccess implements Action {
  readonly type = EshopActions.AddToCartSuccess;
  constructor(public payload: any ) {
  }
}

export class RemoveFromCart implements Action {
  readonly type = EshopActions.RemoveFromCart;
  constructor(public payload: any ) {
  }
}

export class GetProducts implements Action {
  readonly type = EshopActions.GetProducts;
   constructor(public payload: any) {
  }
}

export class GetProductsSuccess implements Action {
  readonly type = EshopActions.GetProductsSuccess;
   constructor(public payload: any) {
  }
}

export class GetCategories implements Action {
  readonly type = EshopActions.GetCategories;
   constructor(public payload: any) {
  }
}

export class GetCategoriesSuccess implements Action {
  readonly type = EshopActions.GetCategoriesSuccess;
   constructor(public payload: any) {
  }
}


export class GetProductsSearch implements Action {
  readonly type = EshopActions.GetProductsSearch;
   constructor(public payload: any) {
  }
}

export class GetProductsSearchSuccess implements Action {
  readonly type = EshopActions.GetProductsSearchSuccess;
   constructor(public payload: any) {
  }
}

export class GetProduct implements Action {
    readonly type = EshopActions.GetProduct;
     constructor(public payload: any) {
    }
}

export class GetProductSuccess implements Action {
    readonly type = EshopActions.GetProductSuccess;
     constructor(public payload: any) {
    }
}

export class MakeOrderWithPayment implements Action {
        readonly type = EshopActions.MakeOrderWithPayment;
         constructor(public payload: any ) {
    }
}

export class MakeOrderWithPaymentSuccess implements Action {
    readonly type = EshopActions.MakeOrderWithPaymentSuccess;
     constructor(public payload: any ) {
    }
}

export class MakeOrderWithPaymentFail implements Action {
  readonly type = EshopActions.MakeOrderWithPaymentFail;
   constructor(public payload: any ) {
  }
}

export class MakeOrder implements Action {
  readonly type = EshopActions.MakeOrder;
   constructor(public payload: any ) {
  }
}

export class MakeOrderSuccess implements Action {
  readonly type = EshopActions.MakeOrderSuccess;
    constructor(public payload: any ) {
  }
}

export class MakeOrderFail implements Action {
  readonly type = EshopActions.MakeOrderFail;
    constructor() {
  }
}


export class StripeSession implements Action {
  readonly type = EshopActions.StripeSession;
   constructor(public payload: any ) {
  }
}

export class StripeSessionSuccess implements Action {
  readonly type = EshopActions.StripeSessionSuccess;
    constructor(public payload: any ) {
  }
}

export class StripeSessionError implements Action {
  readonly type = EshopActions.StripeSessionError;
   constructor(public payload: any ) {
  }
}

export class GetUserOrders implements Action {
  readonly type = EshopActions.GetUserOrders;
   constructor() {
  }
}

export class GetUserOrdersSuccess implements Action {
  readonly type = EshopActions.GetUserOrdersSuccess;
   constructor(public payload: any) {
  }
}


// DASHBOARD

export class GetAllProducts implements Action {
  readonly type = EshopActions.GetAllProducts;
   constructor(public payload: any) {
  }
}

export class GetAllProductsSuccess implements Action {
  readonly type = EshopActions.GetAllProductsSuccess;
   constructor(public payload: any) {
  }
}

export class GetAllTranslations implements Action {
  readonly type = EshopActions.GetAllTranslations;
  constructor( ) {
  }
}

export class GetAllTranslationsSuccess implements Action {
  readonly type = EshopActions.GetAllTranslationsSuccess;
  constructor( public payload: any ) {
  }
}

export class EditTranslation implements Action {
  readonly type = EshopActions.EditTranslation;
  constructor( public payload: any ) {
  }
}


export class EditTranslationSuccess implements Action {
  readonly type = EshopActions.EditTranslationSuccess;
  constructor( public payload: any ) {
  }
}

export class GetOrders implements Action {
  readonly type = EshopActions.GetOrders;
   constructor() {
  }
}

export class GetOrdersSuccess implements Action {
  readonly type = EshopActions.GetOrdersSuccess;
   constructor(public payload: any) {
  }
}

export class GetOrder implements Action {
  readonly type = EshopActions.GetOrder;
   constructor(public payload: any) {
  }
}

export class GetOrderSuccess implements Action {
  readonly type = EshopActions.GetOrderSuccess;
   constructor(public payload: any) {
  }
}

export class UpdateOrder implements Action {
  readonly type = EshopActions.UpdateOrder;
   constructor(public payload: any) {
  }
}


export class AddProduct implements Action {
  readonly type = EshopActions.AddProduct;
  constructor(public payload: any ) {
  }
}

export class AddProductSuccess implements Action {
readonly type = EshopActions.AddProductSuccess;
constructor(public payload: any ) {
}
}

export class EditProduct implements Action {
  readonly type = EshopActions.EditProduct;
  constructor(public payload: any ) {
  }
}

export class EditProductSuccess implements Action {
readonly type = EshopActions.EditProductSuccess;
constructor(public payload: any ) {
}
}

export class RemoveProduct implements Action {
  readonly type = EshopActions.RemoveProduct;
  constructor(public payload: any ) {
  }
}

export class RemoveProductSuccess implements Action {
  readonly type = EshopActions.RemoveProductSuccess;
  constructor(public payload: any ) {
  }
}

export class GetImages implements Action {
  readonly type = EshopActions.GetImages;
  constructor() {
  }
}

export class GetImagesSuccess implements Action {
  readonly type = EshopActions.GetImagesSuccess;
  constructor(public payload: any ) {
  }
}

export class AddProductImage implements Action {
    readonly type = EshopActions.AddProductImage;
    constructor(public payload: any ) {
    }
}

export class AddProductImagesUrl implements Action {
  readonly type = EshopActions.AddProductImagesUrl;
  constructor(public payload: any ) {
  }
}

export class RemoveProductImage implements Action {
  readonly type = EshopActions.RemoveProductImage;
  constructor(public payload: any ) {
  }
}

export class RemoveProductImageSuccess implements Action {
 readonly type = EshopActions.RemoveProductImageSuccess;
  constructor(public payload: any ) {
  }
}

export class AddProductImagesUrlSuccess implements Action {
  readonly type = EshopActions.AddProductImagesUrlSuccess;
  constructor(public payload: any ) {
  }
}

export class SetUploader implements Action {
  readonly type = EshopActions.SetUploader;
  constructor(public payload: any) {
  }
}

export class SetUploaderSuccess implements Action {
  readonly type = EshopActions.SetUploaderSuccess;
  constructor(public payload: any) {
  }
}

export class SetUploaderError implements Action {
  readonly type = EshopActions.SetUploaderError;
  constructor(public payload: any) {
  }
}


// ESHOP

export class SendContact implements Action {
  readonly type = EshopActions.SendContact;
  constructor(public payload: any ) {
  }
}

export class SendContactSuccess implements Action {
  readonly type = EshopActions.SendContactSuccess;
  constructor( ) {
  }
}

export class SendContactFail implements Action {
  readonly type = EshopActions.SendContactFail;
  constructor( ) {
  }
}

export class GetPages implements Action {
  readonly type = EshopActions.GetPages;
   constructor() {
   }
}

export class GetPagesSuccess implements Action {
  readonly type = EshopActions.GetPagesSuccess;
   constructor(public payload: any) {
   }
}

export class GetPagesFail implements Action {
  readonly type = EshopActions.GetPagesFail;
   constructor() {
   }
}

export class AddOrEditPage implements Action {
  readonly type = EshopActions.AddOrEditPage;
   constructor(public payload: any) {
   }
}

export class AddOrEditPageSuccess implements Action {
  readonly type = EshopActions.AddOrEditPageSuccess;
   constructor(public payload: any) {
   }
}

export class AddOrEditPageFail implements Action {
  readonly type = EshopActions.AddOrEditPageFail;
   constructor() {
   }
}

export class RemovePage implements Action {
  readonly type = EshopActions.RemovePage;
   constructor(public payload: any) {
   }
}

export class RemovePageSuccess implements Action {
  readonly type = EshopActions.RemovePageSuccess;
   constructor(public payload: any) {
   }
}

export class RemovePageFail implements Action {
  readonly type = EshopActions.RemovePageFail;
   constructor() {
   }
}
