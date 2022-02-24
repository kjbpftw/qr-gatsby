exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-wallet",
    component: require.resolve("./src/templates/using-wallet.js"),
    context: {},
    defer: true,
  })
}
