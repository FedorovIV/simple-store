import { AxiosResponse } from "axios";
import $api from "../http";

import { ProductDTO } from "../models/ProductDTO";

export default class ProductService {
  static async getAll(): Promise<AxiosResponse<ProductDTO[]>> {
    return $api.get("/product/all");
  }

}
