import { AbstractTablet } from './abstract_tablet'

export class AppleTablet implements AbstractTablet {
  touching(): void {
    console.log('Apple tablets have "3D-touch" feature, users can take actions without navigating away from the original screen they were on.')
  }
}