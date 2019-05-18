"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Core = require("@juridoc/client-core");
const Requests = require("./requests");
const entity_1 = require("./entity");
/**
 * Snippets mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Create a new snippet based on the specified creation request.
     * @param request Snippet creation request.
     * @returns Returns a promise to get the snippet Id.
     * @throws Throws an error when the snippet wasn't found.
     */
    async create(request) {
        return (await this.mapper.insertEx(Requests.Create, request));
    }
    /**
     * Load the snippet that corresponds to the specified Id.
     * @param id Snippet Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the snippet entity.
     */
    async load(id, fields) {
        return (await this.mapper.findById(id, fields));
    }
    /**
     * Update the snippet that corresponds to the specified Id based on the given update request.
     * @param id Snippet Id.
     * @param request Snippet update request.
     * @returns Returns a promise to get true when the snippet was updated, false otherwise.
     */
    async modify(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Update, id, request));
    }
    /**
     * Clone the snippet that corresponds to the specified Id based on the given clone request.
     * @param id Snippet Id.
     * @param request Snippet clone request.
     * @returns Returns a promise to get true when the snippet was cloned, false otherwise.
     */
    async clone(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Clone, id, request));
    }
    /**
     * Share the snippet that corresponds to the specified Id based on the given share request.
     * @param id Snippet Id.
     * @param request Snippet share request.
     * @returns Returns a promise to get true when the snippet was shared, false otherwise.
     */
    async share(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Share, id, request));
    }
    /**
     * List all snippets that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the content list or undefined when an error occurs.
     */
    async list(query, fields) {
        return await this.mapper.find(query, fields);
    }
    /**
     * Count all snippets that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of snippets or undefined when an error occurs.
     */
    async count(query) {
        return await this.mapper.count(query);
    }
    /**
     * Delete the snippet that corresponds to the specified Id.
     * @param id Content Id.
     * @returns Returns a promise to get true when the snippet was deleted, false otherwise.
     */
    async remove(id) {
        return (await this.mapper.deleteById(id));
    }
};
__decorate([
    Injection.Inject(Core.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modify", null);
__decorate([
    Class.Public()
], Mapper.prototype, "clone", null);
__decorate([
    Class.Public()
], Mapper.prototype, "share", null);
__decorate([
    Class.Public()
], Mapper.prototype, "list", null);
__decorate([
    Class.Public()
], Mapper.prototype, "count", null);
__decorate([
    Class.Public()
], Mapper.prototype, "remove", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'snippets' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map