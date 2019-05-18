/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Templates from '@juridoc/client-templates';
import * as Types from '../types';
/**
 * Snippet creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Folder Id.
     */
    folderId?: string | null;
    /**
     * Snippet status.
     */
    status?: Types.Status;
    /**
     * Determines whether the content should be locked for editing or not.
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
    content?: string;
    /**
     * Form schema.
     */
    form?: Templates.Internals.Form;
}
