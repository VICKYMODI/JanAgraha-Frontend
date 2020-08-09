import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-admin-routes',
  templateUrl: './admin-routes.component.html',
  styleUrls: ['./admin-routes.component.css']
})
export class AdminRoutesComponent implements OnInit {
  loggedUserName: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: AgentService
    ) { }

  ngOnInit(): void {
    this.loggedUserName = this.api.loggedUser
  }

  showOffice(){
    this.router.navigate(['listoffice'],{relativeTo:this.route})
  }

  showMac(){
    this.router.navigate(['listmac'],{relativeTo:this.route})
  }

  showAgent(){
    this.router.navigate(['listAgent'],{relativeTo:this.route})
  }

  logout(){
    Swal("You Have Successfullt logged Out","Success")
    this.api.logout();
  }

}
