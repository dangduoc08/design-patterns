import {
  Context
} from './context'
import {
  Tiki
} from './tiki'
import {
  Shopee
} from './shopee'
import {
  Lazada
} from './lazada'

(function main() {
  console.log('---***--- STATE PATTERN ---***---')
  const marketplaceContext = new Context()

  marketplaceContext.setState(new Tiki())
  marketplaceContext.applyState()

  marketplaceContext.setState(new Shopee())
  marketplaceContext.applyState()

  marketplaceContext.setState(new Lazada())
  marketplaceContext.applyState()
  
  console.log('')
})()