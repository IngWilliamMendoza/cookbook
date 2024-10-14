import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Greeter } from '../../../classes/greeter.class';
import { UserService } from '../../../services/user-services/user.service';

@Component({
  selector: 'app-ng-di-token',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ng-di-token.component.html',
  styleUrl: './ng-di-token.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgDiTokenComponent { 
  user: Greeter;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
