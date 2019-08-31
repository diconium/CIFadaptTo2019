# Simple Javascript Action

This is a bundled action, this action will be created by bundling a JS file with dependencies using Rollup, and then install that bundled file instead of the index.js file.

## Install

Run the code following commands to create the justifyRight action.

1. Install the dependencies
  ```
  npm install
  ```
2. Bundle the index file using rollup
  ```
  npm run build
  ```
3. Deploy the bundled file to I/O   
  ```
  wsk action create justifyRight bundledAction.js
  ```

## Invoke

  ```
  wsk action invoke --result justifyRight --param lines "[\"As armas e os barões assinalados\", \"Que da ocidental praia Lusitana\", \"Por mares nunca de antes navegados\", \"Passaram ainda além da Taprobana\" ]"  
  ```
