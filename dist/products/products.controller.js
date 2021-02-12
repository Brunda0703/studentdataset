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
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addProduct(prodRegno, prodName, prodeasyques, prodEasyMePer, prodHardques, prodHardper, prodEasyps, prodpsper, prodHps, prodHpsper) {
        return __awaiter(this, void 0, void 0, function* () {
            const generatedId = yield this.productsService.insertProduct(prodRegno, prodName, prodeasyques, prodEasyMePer, prodHardques, prodHardper, prodEasyps, prodpsper, prodHps, prodHpsper);
            return { id: generatedId };
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productsService.getProducts();
            return products;
        });
    }
    getProduct(prodId) {
        return this.productsService.getSingleProduct(prodId);
    }
    updateProduct(prodId, prodRegno, prodName, prodeasyques, prodEasyMePer, prodHardques, prodHardper, prodEasyps, prodpsper, prodHps, prodHpsper) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productsService.updateProduct(prodId, prodRegno, prodName, prodeasyques, prodEasyMePer, prodHardques, prodHardper, prodEasyps, prodpsper, prodHps, prodHpsper);
            return null;
        });
    }
    removeProduct(prodId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productsService.deleteProduct(prodId);
            return null;
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('student_reg_no')),
    __param(1, common_1.Body('student_name')),
    __param(2, common_1.Body('qem_mcq')),
    __param(3, common_1.Body('em_mcq_per')),
    __param(4, common_1.Body('qh_mcq')),
    __param(5, common_1.Body('h_mcq_per')),
    __param(6, common_1.Body('qem_ps')),
    __param(7, common_1.Body('em_ps_per')),
    __param(8, common_1.Body('qh_ps')),
    __param(9, common_1.Body('h_ps_per')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, Number, String, Number, String, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('student_reg_no')),
    __param(2, common_1.Body('student_name')),
    __param(3, common_1.Body('qem_mcq')),
    __param(4, common_1.Body('em_mcq_per')),
    __param(5, common_1.Body('qh_mcq')),
    __param(6, common_1.Body('h_mcq_per')),
    __param(7, common_1.Body('qem_ps')),
    __param(8, common_1.Body('em_ps_per')),
    __param(9, common_1.Body('qh_ps')),
    __param(10, common_1.Body('h_ps_per')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, String, Number, String, Number, String, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "removeProduct", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map