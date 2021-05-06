// import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
// import { AdminListComponent } from './admin-list/admin-list.component';
// import { UserListComponent } from './user-list/user-list.component';
 import { Component,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorators';
  constructor(
    // private vcR: ViewContainerRef, //Responsible for making a container where we can just place the lazyloaded component
    // private cfR: ComponentFactoryResolver //will make the component from the code

    private vcR: ViewContainerRef,
    private cfR: ComponentFactoryResolver
  ) {
  }
  // async loadAdmin(){
  //   this.vcR.clear();
  //   const {} = await import('./admin-list/admin-list.component')
  //   this.vcR.createComponent(
  //     this.cfR.resolveComponentFactory(AdminListComponent)
  //   )
  // }
  // async loadUser(){
  //   this.vcR.clear();
  //   const {} = await import('./user-list/user-list.component')
  //   this.vcR.createComponent(
  //     this.cfR.resolveComponentFactory(UserListComponent)
  //   )
  // }

  async loadAdmin(){
    this.vcR.clear();
    const {} =await import('./admin/admin.component')
    this.vcR.createComponent(

      this.cfR.resolveComponentFactory(AdminComponent)
    )
  }

  async loadUser(){
    this.vcR.clear();
    const {} = await import('./user/user.component');
    this.vcR.createComponent(
      this.cfR.resolveComponentFactory(UserComponent)
    )
  }
}


