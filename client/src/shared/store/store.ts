/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from "mobx";
import { UserDTO } from "../models/UserDTO";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
import { ProfileDTO } from "../models/ProfileDTO";
import { ProductDTO } from "../models/ProductDTO";
import ProductService from "../services/ProductService";
import $api from "../http";
import { ChProduct } from "../models/ChProduct";

export default class Store {
  numOfProduct: number = 0;
  isAuth: boolean = false;

  choosenProduct:ChProduct[] = [];
  products: ProductDTO[] = [];
  totalSum: number = 0;

  user: UserDTO = {
    profileCreated: true,
    username: "ilya2003",
    email: "ifedorov555@mail.ru",
    phoneNumber: "89175410106",
    deliveryAddress: "г. Мытитищи, пр-т Астрахова",
  } as UserDTO;

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: UserDTO) {
    console.log(user);
    this.user = user;
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  calculateSum() {
    this.totalSum = 0;
    this.choosenProduct.map((value)=>(
      this.totalSum += this.products.filter((product) => {
        return product.id === value.id;
      })[0].price*value.num
    ));
  }

  async login(username: string, password: string) {
    try {
      this.setLoading(true);
      const response = await AuthService.login(username, password);
      console.log(response);

      localStorage.setItem("accessToken", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setLoading(false);
      return "okay";
    } catch (e: any) {
      console.log(e?.response?.data);
      this.setLoading(false);
      return e;
    }
  }

  async registration(username: string, email: string, password: string) {
    try {
      this.setLoading(true);
      const response = await AuthService.registration(
        username,
        email,
        password
      );
      console.log(response);

      localStorage.setItem("accessToken", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);

      this.setLoading(false);
    } catch (e: any) {
      console.log(e?.response?.data);
      this.setLoading(false);
      return e;
    }
  }

  async getInfo() {
    try {
      const response = await UserService.getInfo();
      console.log(response);
      this.setAuth(true);
      this.setUser(response.data.user);
      console.log(this.user);
    } catch (error: any) {
      this.setAuth(false);
      localStorage.removeItem("accessToken");
      console.log(error?.response?.data);
    }
  }

  async logout() {
    this.setAuth(false);
    this.setUser({} as UserDTO);
    localStorage.removeItem("accessToken");
  }

  async createProfile(profile: ProfileDTO) {
    try {
      const response = await UserService.createProfile(profile);
      console.log(response);
      this.setUser(response.data.user);
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  }

  async getAllProduct() {
    try {
      const response = await ProductService.getAll();
      this.products = response.data;

      console.log(this.products);
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  }

  async uploadPhoto(file:any) {
    try {
      const formData = new FormData();
      formData.append("file1", file);
      formData.append("file2", file);

      const response = $api.post("/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      console.log(response);
      
    } catch (error:any) {
      console.log(error?.response?.data);
    }
  }

  chooseProd(prodId:number) {
    let i = 0;

    const product = this.choosenProduct.find((product, index) => {
      i = index;
      return product.id === prodId;
    });

    if (product) {
      this.choosenProduct[i].num+=1;
    } else {
      this.choosenProduct.push({id:prodId, num:1})
    }    
    console.log(this.choosenProduct.length);
    this.calculateSum();
  }


  deleteProd(prodId:number) {
    this.choosenProduct = this.choosenProduct.filter((value)=>{return value.id !== prodId})
    this.calculateSum();
  }
}
