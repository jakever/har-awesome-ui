module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
          libraryName: "har-ui",
          // styleLibraryDirectory: 'test',
          // style: (name) => {
          //     console.log('style-->>', name)
          //     return `har-ui/css/${name.slice(name.lastIndexOf('/') + 1, name.lastIndexOf('.'))}.css`
          // },
          style: false,
          customName: (name) => {
              console.log('customName-->>', name)
              // return `har-ui/lib/${name}.js`
              return `har-ui/har-button/index.js`
          }
      }
    ]
  ]
};
