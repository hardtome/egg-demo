// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCharacter from '../../../app/service/character';
import ExportMguser from '../../../app/service/mguser';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    character: AutoInstanceType<typeof ExportCharacter>;
    mguser: AutoInstanceType<typeof ExportMguser>;
    test: AutoInstanceType<typeof ExportTest>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
