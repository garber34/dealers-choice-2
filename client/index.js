import reactDom from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import Main from './components/Main'
import store from './store/index'

reactDom.render(<Provider store={store}><Main/></Provider>,document.getElementById('app'))
