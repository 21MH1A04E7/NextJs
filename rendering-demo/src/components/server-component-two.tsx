import React from 'react'

import fs from 'fs'
function ServerComponentTwo() {
    fs.readFileSync("src/components/server-component-one.tsx",'utf-8')
  return (
    <div>ServerComponentTwo</div>
  )
}

export default ServerComponentTwo