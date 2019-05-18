/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Templates from '@juridoc/client-templates';

import * as Types from '../types';

/**
 * Snippet update request.
 */
@RestDB.Schema.Entity('contents/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @RestDB.Schema.Null()
  @Class.Public()
  public folderId?: string | null;

  /**
   * Status.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status?: Types.Status;

  /**
   * Determines whether the content should be locked for editing or not.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public locked?: boolean;

  /**
   * Language option.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public languageOption?: string;

  /**
   * Name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

  /**
   * Content.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public content?: string;

  /**
   * Form schema.
   */
  @RestDB.Schema.Object(() => Templates.Internals.Form)
  @Class.Public()
  public form?: Templates.Internals.Form;
}
