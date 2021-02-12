"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    insertProduct(student_reg_no, student_name, qem_mcq, em_mcq_per, qh_mcq, h_mcq_per, qem_ps, em_ps_per, qh_ps, h_ps_per) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const result = yield newProduct.save();
            return result.id;
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productModel.find().exec();
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
        });
    }
    getSingleProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.findProduct(productId);
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
        });
    }
    updateProduct(productId, student_reg_no, student_name, qem_mcq, em_mcq_per, qh_mcq, h_mcq_per, qem_ps, em_ps_per, qh_ps, h_ps_per) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield this.findProduct(productId);
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
        });
    }
    deleteProduct(prodId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productModel.deleteOne({ _id: prodId }).exec();
            if (result.n === 0) {
                throw new common_1.NotFoundException('Could not find product.');
            }
        });
    }
    findProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let product;
            try {
                product = yield this.productModel.findById(id).exec();
            }
            catch (error) {
                throw new common_1.NotFoundException('Could not find product.');
            }
            if (!product) {
                throw new common_1.NotFoundException('Could not find product.');
            }
            return product;
        });
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map