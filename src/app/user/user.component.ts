import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  user!: any
  generateButtonIsVisible = false
  alreadyGenerated = false

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user: any) => {
      console.log(user)
      this.user = user

      let activeActivity = user.activites.find((activity: any) => {
        return activity.is_active === true
      })

      this.generateButtonIsVisible =
        typeof activeActivity === 'undefined' ? true : false
      console.log(activeActivity)
      console.log(this.generateButtonIsVisible)
    })
  }

  generate() {
    this.userService
      .generateActivity({ something: 'somethong' })
      .subscribe((e) => {
        this.alreadyGenerated = true
      })
  }
}
