/*
 * Watchman by ESCT
 *
 * Copyright © 2026 Owens F. Shepard. All rights reserved.
 *
 * Created and developed by Owens F. Shepard for use within the Watchman by ESCT
 * product ecosystem and for commercialization through ESCT Holdings Incorporated,
 * subject to written intellectual property ownership, licensing, and authorization
 * agreements.
 *
 * No ownership rights, copyright rights, license rights, sublicensing rights,
 * distribution rights, or commercialization rights are granted by this file except
 * as expressly authorized in writing by Owens F. Shepard or the lawful copyright
 * owner.
 *
 * This source code, including its structure, organization, design, logic,
 * workflows, interfaces, documentation, and related materials, is confidential
 * and proprietary. Unauthorized copying, modification, distribution, disclosure,
 * reverse engineering, or use is strictly prohibited.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
