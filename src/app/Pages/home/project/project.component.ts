import { Component } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/Entity/UserDTO';
import { ProjectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-home-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  public ProjectList: UserDTO[] = [];
  constructor(private pService: ProjectService) { }
  ngOnInit(): void {
    this.pService.getCurrentUsers().subscribe(item=>{
      
      if(item.length ===0){
        this.pService.getUsers().subscribe(res=>{
          console.log(res);
          if(res.status === 'Success'){
            console.log('ok');
            this.pService.setCurrentUsers(res.data);
          }
        })
      }
      else{
        this.ProjectList = item;
        console.log(item);
      }
      
    })
    }

  public RemoveProject(Id: number) {
    console.log(Id);
    this.pService.removeUser(Id).subscribe(res=>{
      console.log(res);
    })
  }

}
