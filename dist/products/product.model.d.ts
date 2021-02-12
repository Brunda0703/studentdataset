import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any>;
export interface Product extends mongoose.Document {
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
}
