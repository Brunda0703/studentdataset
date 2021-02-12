import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(  student_reg_no: string, student_name: string, qem_mcq: string,em_mcq_per: number, qh_mcq: string,h_mcq_per: number,qem_ps: string, em_ps_per: number, qh_ps: string,h_ps_per: number) {
    const newProduct = new this.productModel({
      student_reg_no,
      student_name,
      qem_mcq,
      em_mcq_per,
      qh_mcq,
      h_mcq_per,
      qem_ps,
      em_ps_per,
      qh_ps,
      h_ps_per,
     
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      student_reg_no: prod.student_reg_no,
      student_name: prod.student_name,
      qem_mcq: prod.qem_mcq,
      em_mcq_per: prod.em_mcq_per,
      qh_mcq: prod.qh_mcq,
      h_mcq_per: prod.h_mcq_per,
      qem_ps: prod.qem_ps,
      em_ps_per: prod.em_ps_per,
      qh_ps: prod.qh_ps,
      h_ps_per: prod.h_ps_per,
     
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      student_reg_no: product.student_reg_no,
      student_name: product.student_name,
      qem_mcq: product.qem_mcq,
      em_mcq_per: product.em_mcq_per,
      qh_mcq: product.qh_mcq,
      h_mcq_per: product.h_mcq_per,
      qem_ps: product.qem_ps,
      em_ps_per: product.em_ps_per,
      qh_ps: product.qh_ps,
      h_ps_per: product.h_ps_per,
     
    };
  }

  async updateProduct(
    productId: string,
    student_reg_no:string,
    student_name:string,
    qem_mcq:string,
    em_mcq_per:number,
    qh_mcq:string,
    h_mcq_per:number,
    qem_ps:string,
    em_ps_per:number,
    qh_ps:string,
    h_ps_per:number,
   
  ) {
    const updatedProduct = await this.findProduct(productId);
    if (student_reg_no) {
      updatedProduct.student_reg_no = student_reg_no;
    }
    if (student_name) {
      updatedProduct.student_name = student_name;
    }
    if (qem_mcq) {
      updatedProduct.qem_mcq = qem_mcq;
    }
    if (em_mcq_per) {
      updatedProduct.em_mcq_per = em_mcq_per;
    }
    if (qh_mcq) {
      updatedProduct.qh_mcq = qh_mcq;
    }
    if (h_mcq_per) {
      updatedProduct.h_mcq_per = h_mcq_per;
    }
    if (qem_ps) {
      updatedProduct.qem_ps = qem_ps;
    }
    if (em_ps_per) {
      updatedProduct.em_ps_per = em_ps_per;
    }
    if (qh_ps) {
      updatedProduct.qh_ps = qh_ps;
    }
    if (h_ps_per) {
      updatedProduct.h_ps_per = h_ps_per;
    }
   
    updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    const result = await this.productModel.deleteOne({_id: prodId}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
