import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodRegno: string, prodName: string, prodeasyques: string, prodEasyMePer: number, prodHardques: string, prodHardper: number, prodEasyps: string, prodpsper: number, prodHps: string, prodHpsper: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
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
    getProduct(prodId: string): Promise<{
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
    updateProduct(prodId: string, prodRegno: string, prodName: string, prodeasyques: string, prodEasyMePer: number, prodHardques: string, prodHardper: number, prodEasyps: string, prodpsper: number, prodHps: string, prodHpsper: number): Promise<any>;
    removeProduct(prodId: string): Promise<any>;
}
