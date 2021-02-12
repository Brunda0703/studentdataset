import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('student_reg_no') prodRegno: string,
    @Body('student_name') prodName: string,
    @Body('qem_mcq') prodeasyques: string,
    @Body('em_mcq_per') prodEasyMePer: number,
    @Body('qh_mcq') prodHardques: string,
    @Body('h_mcq_per') prodHardper: number,
    @Body('qem_ps') prodEasyps: string,
    @Body('em_ps_per') prodpsper: number,
    @Body('qh_ps') prodHps: string,
    @Body('h_ps_per') prodHpsper: number,
  
  ) {
    const generatedId = await this.productsService.insertProduct(
       prodRegno, 
       prodName,  
       prodeasyques, 
       prodEasyMePer,
       prodHardques, 
       prodHardper,  
       prodEasyps, 
       prodpsper, 
       prodHps,  
       prodHpsper, 
       

    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('student_reg_no') prodRegno: string,
    @Body('student_name') prodName: string,
    @Body('qem_mcq') prodeasyques: string,
    @Body('em_mcq_per') prodEasyMePer: number,
    @Body('qh_mcq') prodHardques: string,
    @Body('h_mcq_per') prodHardper: number,
    @Body('qem_ps') prodEasyps: string,
    @Body('em_ps_per') prodpsper: number,
    @Body('qh_ps') prodHps: string,
    @Body('h_ps_per') prodHpsper: number,
   
  ) {
    await this.productsService.updateProduct(prodId,   prodRegno,
      prodName,
      prodeasyques,
      prodEasyMePer,
      prodHardques,
      prodHardper,
      prodEasyps,
      prodpsper,
      prodHps,
      prodHpsper,
     );
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
      await this.productsService.deleteProduct(prodId);
      return null;
  }
}
