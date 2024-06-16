import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  email: string
  password: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.email = ''
    this.password = ''
  }

  onSubmit() {
    console.log('Email:', this.email)
    console.log('Password:', this.password)

    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/user']),
      error: (err) => console.error(err),
    })
  }
}
