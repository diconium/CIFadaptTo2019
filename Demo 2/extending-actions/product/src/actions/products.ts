import { Product } from '@adobe/commerce-cif-model';
import { Input, Output, SimpleAction } from '@diconium/commerce-cif-hybris-core';
import GetProductByIdClient from '@diconium/commerce-cif-hybris-products/lib/clients/GetProductByIdClient';
import ProductMapper from '../mappers/ProductMapper';

const ERROR_TYPE = 'ProductError';

function getProductById(input: Input): Promise<Output<Product>> {

  return new SimpleAction<Product>(input)
    .setMapper(ProductMapper)
    .setClient(GetProductByIdClient)
    .setErrorType(ERROR_TYPE)
    .activate();
}

export const getById = getProductById;
