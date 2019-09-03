# React webcomponent

This demo is about an example project using CIF, this will use storybook for creating the react components in isolation. Then it will use @adobe/react-webcomponent to mount that component in a way that i can react to changes in the HTML caused by the updates of the dialogs.

You can find the Frontend project under the folder:
´´´
webcomponent/src/main/content/jcr_root/apps/webcomponent/components/product-information/clientlibs/cif-component
´´´

## Installing the project

1. Build the frontend project running `npm build` on the frontend project folder.

2. To install it to AEM run gradlew at the root of the `webcomponent` project.

3. Enable the `adaptTo` group or the `Product Info` component on the desired page template.