import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  student_reg_no: { type: String, required: true },
  student_name: { type: String, required: true },
  qem_mcq: { type: String, required: true },
  em_mcq_per: { type: Number, required: true },
  qh_mcq: { type: String, required: true },
  h_mcq_per: { type: Number, required: true },
  qem_ps: { type: String, required: true },
  em_ps_per: { type: Number, required: true },
  qh_ps: { type: String, required: true },
  h_ps_per: { type: Number, required: true },
 

});

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
