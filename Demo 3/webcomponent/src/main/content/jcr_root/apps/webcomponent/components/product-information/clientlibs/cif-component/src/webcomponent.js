import {
  createCustomElement,
  DOMModel,
  byAttrVal,
} from '@adobe/react-webcomponent';
import { ProductComponent } from './component';

class ProductComponentModel extends DOMModel {
  @byAttrVal('data-id') id;
}

const ProductComponentWebComponent = createCustomElement(
  ProductComponent,
  ProductComponentModel,
  'container',
);

$(function () {
  console.log('test')
  if (!window.customElements.get(ProductComponentWebComponent.elementName)) {
    window.customElements.define(
      'product-information',
      ProductComponentWebComponent,
    );
  }
});
