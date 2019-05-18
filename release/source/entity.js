"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Core = require("@juridoc/client-core");
const Folders = require("@juridoc/client-folders");
const Templates = require("@juridoc/client-templates");
const Profiles = require("@juridoc/client-profiles");
const Types = require("./types");
/**
 * Snippet entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Determines whether or not this entity is in the trash can.
     */
    get isTrash() {
        var _a, _b;
        return ((_b = (_a = this.folder) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.folderId) === Core.Types.AnonymousId;
    }
    /**
     * Test if the specified profile is the entity ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile) {
        var _a, _b;
        return ((_b = (_a = this.profile) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.profileId) === profile.id;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "profileId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Profiles.Entity, [
        'id',
        'contact.id',
        'contact.pictureId',
        'contact.name',
        'contact.personal.firstName',
        'contact.personal.lastName',
        'contact.professional.denomination'
    ]),
    Class.Public()
], Entity.prototype, "profile", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "folderId", void 0);
__decorate([
    RestDB.Schema.Object(() => Folders.Entity, ['id', 'name']),
    Class.Public()
], Entity.prototype, "folder", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "grantsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "locked", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "languageOption", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "content", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Templates.Internals.Form),
    Class.Public()
], Entity.prototype, "form", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "isTrash", null);
__decorate([
    Class.Public()
], Entity.prototype, "isOwnership", null);
Entity = __decorate([
    RestDB.Schema.Entity('contents'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map