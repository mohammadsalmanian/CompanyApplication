export class ProjectDb{
    constructor(
       public name : string,
       public projectType: string,
       public projectTypeId: number,
       public projectAdminId: number,
       public projectAdmin: string,
       public isActive: boolean,
       public active: boolean,       
       public id: number        
        ){
    
        }
}