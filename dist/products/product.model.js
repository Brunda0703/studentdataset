"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
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
//# sourceMappingURL=product.model.js.map