import { Model } from 'mongoose';
import { Product } from './product.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    insertProduct(student_reg_no: string, student_name: string, qem_mcq: string, em_mcq_per: number, qh_mcq: string, h_mcq_per: number, qem_ps: string, em_ps_per: number, qh_ps: string, h_ps_per: number): Promise<string>;
    getProducts(): Promise<{
        id: string;
        student_reg_no: string;
        student_name: string;
        qem_mcq: string;
        em_mcq_per: number;
        qh_mcq: string;
        h_mcq_per: number;
        qem_ps: string;
        em_ps_per: number;
        qh_ps: string;
        h_ps_per: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        student_reg_no: string;
        student_name: string;
        qem_mcq: string;
        em_mcq_per: number;
        qh_mcq: string;
        h_mcq_per: number;
        qem_ps: string;
        em_ps_per: number;
        qh_ps: string;
        h_ps_per: number;
    }>;
    updateProduct(productId: string, student_reg_no: string, student_name: string, qem_mcq: string, em_mcq_per: number, qh_mcq: string, h_mcq_per: number, qem_ps: string, em_ps_per: number, qh_ps: string, h_ps_per: number): Promise<void>;
    deleteProduct(prodId: string): Promise<void>;
    private findProduct;
}
