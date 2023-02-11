type UserInfo = {
  name: string
  role: string
}

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: UserInfo
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
