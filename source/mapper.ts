/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Snippets mapper class.
 */
@Injection.Describe({ singleton: true, name: 'snippets' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new snippet based on the specified creation request.
   * @param request Snippet creation request.
   * @returns Returns a promise to get the snippet Id.
   * @throws Throws an error when the snippet wasn't found.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the snippet that corresponds to the specified Id.
   * @param id Snippet Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the snippet entity.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the snippet that corresponds to the specified Id based on the given update request.
   * @param id Snippet Id.
   * @param request Snippet update request.
   * @returns Returns a promise to get true when the snippet was updated, false otherwise.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * Clone the snippet that corresponds to the specified Id based on the given clone request.
   * @param id Snippet Id.
   * @param request Snippet clone request.
   * @returns Returns a promise to get true when the snippet was cloned, false otherwise.
   */
  @Class.Public()
  public async clone(id: string, request: Requests.Clone): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Clone, id, request))!;
  }

  /**
   * Share the snippet that corresponds to the specified Id based on the given share request.
   * @param id Snippet Id.
   * @param request Snippet share request.
   * @returns Returns a promise to get true when the snippet was shared, false otherwise.
   */
  @Class.Public()
  public async share(id: string, request: Requests.Share): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Share, id, request))!;
  }

  /**
   * List all snippets that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the content list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all snippets that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of snippets or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the snippet that corresponds to the specified Id.
   * @param id Content Id.
   * @returns Returns a promise to get true when the snippet was deleted, false otherwise.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
