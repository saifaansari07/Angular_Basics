import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Container } from './container/container';
import { Nav } from './nav/nav';
import { Header } from './header/header';
import { Notification } from './notification/notification';
import { Search } from './search/search';
import { FormsModule } from '@angular/forms';
import { Products } from './products/products';
import { Searchproduct } from './searchproduct/searchproduct';
import { Filter } from './filter/filter';
import { Demo } from './demo/demo';
import { Customer } from './customer/customer';
import { Content } from './content/content';
import { SetBackgroundDirective } from './customattribute/setbackground.directive';
import { Highlight } from './customattribute/highlight';
import { Hover } from './customattribute/hover';
import { Betterhighligh } from './customattrivute/betterhighligh';
import { Betterhighlight } from './customattribute/betterhighlight';
import { Adduser } from './adduser/adduser';
import { Loggerservice } from './loggerservice';
import { Showproduct } from './showproduct/showproduct';
import {  RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Errorpage } from './errorpage/errorpage';
import { Home } from './home/home';
import { Singleproduct } from './products/singleproduct/singleproduct';
import { Pipestest } from './pipestest/pipestest';
import { PercentagePipe } from './percentage-pipe';
import { FilterpipePipe } from './filterpipe-pipe';

const approute:Routes=[
  // {path:'',redirectTo:'home',pathMatch:'full'},
  { path: '', component: Header },
  { path: 'header', component: Header },
  {path:'Product',component:Products},
  {path:'About',component:About},
  {path:'Contact',component:Contact},
  // {path:'Product/Singleproduct/:id',component:Singleproduct},
  {path:'Product',children:[
    {path:'Singleproduct/:id',component:Singleproduct}
  ]},
  {path:'**',component:Errorpage} //always at last
]

@NgModule({
  declarations: [
    App,
    Container,
    Nav,
    Header,
    Notification,
    Search,
    Products,
    Searchproduct,
    Filter,
    Demo,
    Customer,
    Content,
    Highlight,
    Hover,
    Betterhighlight,
    Adduser,
    Showproduct,
    About,
    Contact,
    Errorpage,   
    Home, Singleproduct, Pipestest, PercentagePipe, FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SetBackgroundDirective,
    RouterModule.forRoot(approute)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Loggerservice
  ],
  bootstrap: [App]
})
export class AppModule { }
