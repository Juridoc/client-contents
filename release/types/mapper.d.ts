/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Snippets mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new snippet based on the specified creation request.
     * @param request Snippet creation request.
     * @returns Returns a promise to get the snippet Id.
     * @throws Throws an error when the snippet wasn't found.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the snippet that corresponds to the specified Id.
     * @param id Snippet Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the snippet entity.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the snippet that corresponds to the specified Id based on the given update request.
     * @param id Snippet Id.
     * @param request Snippet update request.
     * @returns Returns a promise to get true when the snippet was updated, false otherwise.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Clone the snippet that corresponds to the specified Id based on the given clone request.
     * @param id Snippet Id.
     * @param request Snippet clone request.
     * @returns Returns a promise to get true when the snippet was cloned, false otherwise.
     */
    clone(id: string, request: Requests.Clone): Promise<boolean>;
    /**
     * Share the snippet that corresponds to the specified Id based on the given share request.
     * @param id Snippet Id.
     * @param request Snippet share request.
     * @returns Returns a promise to get true when the snippet was shared, false otherwise.
     */
    share(id: string, request: Requests.Share): Promise<boolean>;
    /**
     * List all snippets that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the content list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all snippets that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of snippets or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the snippet that corresponds to the specified Id.
     * @param id Content Id.
     * @returns Returns a promise to get true when the snippet was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
