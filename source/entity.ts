/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';
import * as Folders from '@juridoc/client-folders';
import * as Templates from '@juridoc/client-templates';
import * as Profiles from '@juridoc/client-profiles';

import * as Types from './types';

/**
 * Snippet entity class.
 */
@RestDB.Schema.Entity('contents')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Snippet Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public folderId?: string;

  /**
   * Folder entity.
   */
  @RestDB.Schema.Object(() => Folders.Entity, ['id', 'name'])
  @Class.Public()
  public folder?: Folders.Entity;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Determines whether the snippet should be locked for editing or not.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public locked?: boolean;

  /**
   * Language option.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public languageOption!: string;

  /**
   * Name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Content.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public content!: string;

  /**
   * Form schema.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Templates.Internals.Form)
  @Class.Public()
  public form!: Templates.Internals.Form;

  /**
   * Determines whether or not this entity is in the trash can.
   */
  @Class.Public()
  public get isTrash(): boolean {
    return (this.folder?.id ?? this.folderId) === Core.Types.AnonymousId;
  }

  /**
   * Test if the specified profile is the entity ownership.
   * @param profile Profile entity.
   * @returns Returns true when the given profile is the ownership, false otherwise.
   */
  @Class.Public()
  public isOwnership(profile: Profiles.Entity): boolean {
    return (this.profile?.id ?? this.profileId) === profile.id;
  }
}
