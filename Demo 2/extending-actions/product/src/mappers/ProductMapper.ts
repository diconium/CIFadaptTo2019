import { Product } from '@adobe/commerce-cif-model';
import CoreProductMapper from '@diconium/commerce-cif-hybris-products/lib/mappers/ProductMapper';

export default class ProductMapper extends CoreProductMapper {

  mapToEntity(dto, entity?): Product {
    const product = super.mapToEntity(dto, entity);

product.name = product.name.toUpperCase();

    return product;
  }
}
