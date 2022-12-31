/* @refresh reload */
import 'windi.css'

import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './app'

import './style/style.less'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
)
