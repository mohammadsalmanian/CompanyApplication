import { Component } from '@angular/core';
//import { AdminDb } from 'src/app/DTOs/Entity/UserDTO';


@Component({
  selector: 'app-rejester-project',
  templateUrl: './rejester-project.component.html',
  styleUrls: ['./rejester-project.component.scss']
})
export class RejesterProjectComponent {
constructor(){}
//public AdminList : AdminDb[] = [];
// ngOnInit():void{
//   this.pService.getCurrentAdmins().subscribe(Item => {
//     if (Item.length === 0) {
//       this.pService.getAdmin().subscribe(res => {
//         console.log(res.status);        
//         if (res.status === 'success') {
//           this.pService.setCurrentAdmins(res.data);
//         }
//       });
//     }
//     else
//     {
//       this.AdminList = Item;     
//     }
//     console.log(this.AdminList)
  
//   });
// }
}
