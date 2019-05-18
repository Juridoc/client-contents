/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Snippet share request.
 */
@RestDB.Schema.Entity('contents/{id}/share')
@Class.Describe()
export class Share extends Class.Null {
  /**
   * List of contacts to share grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList!: string[];
}
