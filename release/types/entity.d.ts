/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Folders from '@juridoc/client-folders';
import * as Templates from '@juridoc/client-templates';
import * as Profiles from '@juridoc/client-profiles';
import * as Types from './types';
/**
 * Snippet entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Snippet Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Folder Id.
     */
    folderId?: string;
    /**
     * Folder entity.
     */
    folder?: Folders.Entity;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Status.
     */
    status: Types.Status;
    /**
     * Determines whether the snippet should be locked for editing or not.
     */
    locked?: boolean;
    /**
     * Language option.
     */
    languageOption: string;
    /**
     * Name.
     */
    name: string;
    /**
     * Content.
     */
    content: string;
    /**
     * Form schema.
     */
    form: Templates.Internals.Form;
    /**
     * Determines whether or not this entity is in the trash can.
     */
    get isTrash(): boolean;
    /**
     * Test if the specified profile is the entity ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile: Profiles.Entity): boolean;
}
