const get = require("lodash.get")
const QRCode = require("qrcode")

exports.createSchemaCustomization = async ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  const createQRCode = fieldName => async source => {
    const string = get(source, fieldName)
    let qrCode = ``

    try {
      qrCode = await QRCode.toDataURL(string, { scale: 6 })
    } catch (err) {
      console.error(err)
    }

    return qrCode
  }

  createFieldExtension({
    name: "createQRCode",
    args: {
      fieldName: "String!"
    },
    extend({ fieldName }) {
      return {
        resolve: createQRCode(fieldName)
      }
    }
  })

  createTypes(`
    type InformationYaml implements Node {
      qrCodeDataURL: String @createQRCode(fieldName: "link")
    }
  `)
}


exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-wallet",
    component: require.resolve("./src/templates/using-wallet.js"),
    context: {},
    defer: true,
  })
}
