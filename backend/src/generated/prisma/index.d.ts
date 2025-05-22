
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model CustomInquiry
 * 
 */
export type CustomInquiry = $Result.DefaultSelection<Prisma.$CustomInquiryPayload>
/**
 * Model PatientMedications
 * 
 */
export type PatientMedications = $Result.DefaultSelection<Prisma.$PatientMedicationsPayload>
/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Medications
 * const medications = await prisma.medication.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Medications
   * const medications = await prisma.medication.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customInquiry`: Exposes CRUD operations for the **CustomInquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomInquiries
    * const customInquiries = await prisma.customInquiry.findMany()
    * ```
    */
  get customInquiry(): Prisma.CustomInquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientMedications`: Exposes CRUD operations for the **PatientMedications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientMedications
    * const patientMedications = await prisma.patientMedications.findMany()
    * ```
    */
  get patientMedications(): Prisma.PatientMedicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Medication: 'Medication',
    Patient: 'Patient',
    CustomInquiry: 'CustomInquiry',
    PatientMedications: 'PatientMedications',
    Pharmacy: 'Pharmacy',
    User: 'User',
    ContactMessage: 'ContactMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "medication" | "patient" | "customInquiry" | "patientMedications" | "pharmacy" | "user" | "contactMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      CustomInquiry: {
        payload: Prisma.$CustomInquiryPayload<ExtArgs>
        fields: Prisma.CustomInquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomInquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomInquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>
          }
          findFirst: {
            args: Prisma.CustomInquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomInquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>
          }
          findMany: {
            args: Prisma.CustomInquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>[]
          }
          create: {
            args: Prisma.CustomInquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>
          }
          createMany: {
            args: Prisma.CustomInquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomInquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>
          }
          update: {
            args: Prisma.CustomInquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>
          }
          deleteMany: {
            args: Prisma.CustomInquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomInquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomInquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInquiryPayload>
          }
          aggregate: {
            args: Prisma.CustomInquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomInquiry>
          }
          groupBy: {
            args: Prisma.CustomInquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomInquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomInquiryCountArgs<ExtArgs>
            result: $Utils.Optional<CustomInquiryCountAggregateOutputType> | number
          }
        }
      }
      PatientMedications: {
        payload: Prisma.$PatientMedicationsPayload<ExtArgs>
        fields: Prisma.PatientMedicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientMedicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientMedicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>
          }
          findFirst: {
            args: Prisma.PatientMedicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientMedicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>
          }
          findMany: {
            args: Prisma.PatientMedicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>[]
          }
          create: {
            args: Prisma.PatientMedicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>
          }
          createMany: {
            args: Prisma.PatientMedicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientMedicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>
          }
          update: {
            args: Prisma.PatientMedicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>
          }
          deleteMany: {
            args: Prisma.PatientMedicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientMedicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientMedicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationsPayload>
          }
          aggregate: {
            args: Prisma.PatientMedicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientMedications>
          }
          groupBy: {
            args: Prisma.PatientMedicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientMedicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientMedicationsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientMedicationsCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    medication?: MedicationOmit
    patient?: PatientOmit
    customInquiry?: CustomInquiryOmit
    patientMedications?: PatientMedicationsOmit
    pharmacy?: PharmacyOmit
    user?: UserOmit
    contactMessage?: ContactMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    PatientMedications: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PatientMedications?: boolean | MedicationCountOutputTypeCountPatientMedicationsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountPatientMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientMedicationsWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    CustomInquiries: number
    PatientMedications: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomInquiries?: boolean | PatientCountOutputTypeCountCustomInquiriesArgs
    PatientMedications?: boolean | PatientCountOutputTypeCountPatientMedicationsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountCustomInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomInquiryWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPatientMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientMedicationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    StockQuantity: number | null
    StockLimit: number | null
  }

  export type MedicationSumAggregateOutputType = {
    StockQuantity: number | null
    StockLimit: number | null
  }

  export type MedicationMinAggregateOutputType = {
    MedicationId: string | null
    Name: string | null
    Description: string | null
    Image: string | null
    DateCreated: Date | null
    StockQuantity: number | null
    StockLimit: number | null
    ManufactureDate: Date | null
    ExpirationDate: Date | null
    IsAvailable: boolean | null
  }

  export type MedicationMaxAggregateOutputType = {
    MedicationId: string | null
    Name: string | null
    Description: string | null
    Image: string | null
    DateCreated: Date | null
    StockQuantity: number | null
    StockLimit: number | null
    ManufactureDate: Date | null
    ExpirationDate: Date | null
    IsAvailable: boolean | null
  }

  export type MedicationCountAggregateOutputType = {
    MedicationId: number
    Name: number
    Description: number
    Image: number
    DateCreated: number
    StockQuantity: number
    StockLimit: number
    ManufactureDate: number
    ExpirationDate: number
    IsAvailable: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    StockQuantity?: true
    StockLimit?: true
  }

  export type MedicationSumAggregateInputType = {
    StockQuantity?: true
    StockLimit?: true
  }

  export type MedicationMinAggregateInputType = {
    MedicationId?: true
    Name?: true
    Description?: true
    Image?: true
    DateCreated?: true
    StockQuantity?: true
    StockLimit?: true
    ManufactureDate?: true
    ExpirationDate?: true
    IsAvailable?: true
  }

  export type MedicationMaxAggregateInputType = {
    MedicationId?: true
    Name?: true
    Description?: true
    Image?: true
    DateCreated?: true
    StockQuantity?: true
    StockLimit?: true
    ManufactureDate?: true
    ExpirationDate?: true
    IsAvailable?: true
  }

  export type MedicationCountAggregateInputType = {
    MedicationId?: true
    Name?: true
    Description?: true
    Image?: true
    DateCreated?: true
    StockQuantity?: true
    StockLimit?: true
    ManufactureDate?: true
    ExpirationDate?: true
    IsAvailable?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    MedicationId: string
    Name: string
    Description: string
    Image: string | null
    DateCreated: Date
    StockQuantity: number | null
    StockLimit: number | null
    ManufactureDate: Date | null
    ExpirationDate: Date | null
    IsAvailable: boolean
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MedicationId?: boolean
    Name?: boolean
    Description?: boolean
    Image?: boolean
    DateCreated?: boolean
    StockQuantity?: boolean
    StockLimit?: boolean
    ManufactureDate?: boolean
    ExpirationDate?: boolean
    IsAvailable?: boolean
    PatientMedications?: boolean | Medication$PatientMedicationsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>



  export type MedicationSelectScalar = {
    MedicationId?: boolean
    Name?: boolean
    Description?: boolean
    Image?: boolean
    DateCreated?: boolean
    StockQuantity?: boolean
    StockLimit?: boolean
    ManufactureDate?: boolean
    ExpirationDate?: boolean
    IsAvailable?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MedicationId" | "Name" | "Description" | "Image" | "DateCreated" | "StockQuantity" | "StockLimit" | "ManufactureDate" | "ExpirationDate" | "IsAvailable", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PatientMedications?: boolean | Medication$PatientMedicationsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      PatientMedications: Prisma.$PatientMedicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MedicationId: string
      Name: string
      Description: string
      Image: string | null
      DateCreated: Date
      StockQuantity: number | null
      StockLimit: number | null
      ManufactureDate: Date | null
      ExpirationDate: Date | null
      IsAvailable: boolean
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `MedicationId`
     * const medicationWithMedicationIdOnly = await prisma.medication.findMany({ select: { MedicationId: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PatientMedications<T extends Medication$PatientMedicationsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$PatientMedicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly MedicationId: FieldRef<"Medication", 'String'>
    readonly Name: FieldRef<"Medication", 'String'>
    readonly Description: FieldRef<"Medication", 'String'>
    readonly Image: FieldRef<"Medication", 'String'>
    readonly DateCreated: FieldRef<"Medication", 'DateTime'>
    readonly StockQuantity: FieldRef<"Medication", 'Int'>
    readonly StockLimit: FieldRef<"Medication", 'Int'>
    readonly ManufactureDate: FieldRef<"Medication", 'DateTime'>
    readonly ExpirationDate: FieldRef<"Medication", 'DateTime'>
    readonly IsAvailable: FieldRef<"Medication", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.PatientMedications
   */
  export type Medication$PatientMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    where?: PatientMedicationsWhereInput
    orderBy?: PatientMedicationsOrderByWithRelationInput | PatientMedicationsOrderByWithRelationInput[]
    cursor?: PatientMedicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientMedicationsScalarFieldEnum | PatientMedicationsScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    PatientId: string | null
    Fullname: string | null
    Mobile: string | null
    NationalID: string | null
    Email: string | null
    DateCreated: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    PatientId: string | null
    Fullname: string | null
    Mobile: string | null
    NationalID: string | null
    Email: string | null
    DateCreated: Date | null
  }

  export type PatientCountAggregateOutputType = {
    PatientId: number
    Fullname: number
    Mobile: number
    NationalID: number
    Email: number
    DateCreated: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    PatientId?: true
    Fullname?: true
    Mobile?: true
    NationalID?: true
    Email?: true
    DateCreated?: true
  }

  export type PatientMaxAggregateInputType = {
    PatientId?: true
    Fullname?: true
    Mobile?: true
    NationalID?: true
    Email?: true
    DateCreated?: true
  }

  export type PatientCountAggregateInputType = {
    PatientId?: true
    Fullname?: true
    Mobile?: true
    NationalID?: true
    Email?: true
    DateCreated?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID: string | null
    Email: string | null
    DateCreated: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PatientId?: boolean
    Fullname?: boolean
    Mobile?: boolean
    NationalID?: boolean
    Email?: boolean
    DateCreated?: boolean
    CustomInquiries?: boolean | Patient$CustomInquiriesArgs<ExtArgs>
    PatientMedications?: boolean | Patient$PatientMedicationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    PatientId?: boolean
    Fullname?: boolean
    Mobile?: boolean
    NationalID?: boolean
    Email?: boolean
    DateCreated?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PatientId" | "Fullname" | "Mobile" | "NationalID" | "Email" | "DateCreated", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomInquiries?: boolean | Patient$CustomInquiriesArgs<ExtArgs>
    PatientMedications?: boolean | Patient$PatientMedicationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      CustomInquiries: Prisma.$CustomInquiryPayload<ExtArgs>[]
      PatientMedications: Prisma.$PatientMedicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PatientId: string
      Fullname: string
      Mobile: string
      NationalID: string | null
      Email: string | null
      DateCreated: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `PatientId`
     * const patientWithPatientIdOnly = await prisma.patient.findMany({ select: { PatientId: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CustomInquiries<T extends Patient$CustomInquiriesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$CustomInquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PatientMedications<T extends Patient$PatientMedicationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$PatientMedicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly PatientId: FieldRef<"Patient", 'String'>
    readonly Fullname: FieldRef<"Patient", 'String'>
    readonly Mobile: FieldRef<"Patient", 'String'>
    readonly NationalID: FieldRef<"Patient", 'String'>
    readonly Email: FieldRef<"Patient", 'String'>
    readonly DateCreated: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.CustomInquiries
   */
  export type Patient$CustomInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    where?: CustomInquiryWhereInput
    orderBy?: CustomInquiryOrderByWithRelationInput | CustomInquiryOrderByWithRelationInput[]
    cursor?: CustomInquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomInquiryScalarFieldEnum | CustomInquiryScalarFieldEnum[]
  }

  /**
   * Patient.PatientMedications
   */
  export type Patient$PatientMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    where?: PatientMedicationsWhereInput
    orderBy?: PatientMedicationsOrderByWithRelationInput | PatientMedicationsOrderByWithRelationInput[]
    cursor?: PatientMedicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientMedicationsScalarFieldEnum | PatientMedicationsScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model CustomInquiry
   */

  export type AggregateCustomInquiry = {
    _count: CustomInquiryCountAggregateOutputType | null
    _min: CustomInquiryMinAggregateOutputType | null
    _max: CustomInquiryMaxAggregateOutputType | null
  }

  export type CustomInquiryMinAggregateOutputType = {
    CustomInquiryId: string | null
    PatientId: string | null
    ImageUpload: string | null
    Prescription: string | null
    Description: string | null
    Status: string | null
    DateCreated: Date | null
  }

  export type CustomInquiryMaxAggregateOutputType = {
    CustomInquiryId: string | null
    PatientId: string | null
    ImageUpload: string | null
    Prescription: string | null
    Description: string | null
    Status: string | null
    DateCreated: Date | null
  }

  export type CustomInquiryCountAggregateOutputType = {
    CustomInquiryId: number
    PatientId: number
    ImageUpload: number
    Prescription: number
    Description: number
    Status: number
    DateCreated: number
    _all: number
  }


  export type CustomInquiryMinAggregateInputType = {
    CustomInquiryId?: true
    PatientId?: true
    ImageUpload?: true
    Prescription?: true
    Description?: true
    Status?: true
    DateCreated?: true
  }

  export type CustomInquiryMaxAggregateInputType = {
    CustomInquiryId?: true
    PatientId?: true
    ImageUpload?: true
    Prescription?: true
    Description?: true
    Status?: true
    DateCreated?: true
  }

  export type CustomInquiryCountAggregateInputType = {
    CustomInquiryId?: true
    PatientId?: true
    ImageUpload?: true
    Prescription?: true
    Description?: true
    Status?: true
    DateCreated?: true
    _all?: true
  }

  export type CustomInquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomInquiry to aggregate.
     */
    where?: CustomInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInquiries to fetch.
     */
    orderBy?: CustomInquiryOrderByWithRelationInput | CustomInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomInquiries
    **/
    _count?: true | CustomInquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomInquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomInquiryMaxAggregateInputType
  }

  export type GetCustomInquiryAggregateType<T extends CustomInquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomInquiry[P]>
      : GetScalarType<T[P], AggregateCustomInquiry[P]>
  }




  export type CustomInquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomInquiryWhereInput
    orderBy?: CustomInquiryOrderByWithAggregationInput | CustomInquiryOrderByWithAggregationInput[]
    by: CustomInquiryScalarFieldEnum[] | CustomInquiryScalarFieldEnum
    having?: CustomInquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomInquiryCountAggregateInputType | true
    _min?: CustomInquiryMinAggregateInputType
    _max?: CustomInquiryMaxAggregateInputType
  }

  export type CustomInquiryGroupByOutputType = {
    CustomInquiryId: string
    PatientId: string
    ImageUpload: string | null
    Prescription: string
    Description: string
    Status: string
    DateCreated: Date
    _count: CustomInquiryCountAggregateOutputType | null
    _min: CustomInquiryMinAggregateOutputType | null
    _max: CustomInquiryMaxAggregateOutputType | null
  }

  type GetCustomInquiryGroupByPayload<T extends CustomInquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomInquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomInquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomInquiryGroupByOutputType[P]>
            : GetScalarType<T[P], CustomInquiryGroupByOutputType[P]>
        }
      >
    >


  export type CustomInquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomInquiryId?: boolean
    PatientId?: boolean
    ImageUpload?: boolean
    Prescription?: boolean
    Description?: boolean
    Status?: boolean
    DateCreated?: boolean
    Patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customInquiry"]>



  export type CustomInquirySelectScalar = {
    CustomInquiryId?: boolean
    PatientId?: boolean
    ImageUpload?: boolean
    Prescription?: boolean
    Description?: boolean
    Status?: boolean
    DateCreated?: boolean
  }

  export type CustomInquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CustomInquiryId" | "PatientId" | "ImageUpload" | "Prescription" | "Description" | "Status" | "DateCreated", ExtArgs["result"]["customInquiry"]>
  export type CustomInquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $CustomInquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomInquiry"
    objects: {
      Patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CustomInquiryId: string
      PatientId: string
      ImageUpload: string | null
      Prescription: string
      Description: string
      Status: string
      DateCreated: Date
    }, ExtArgs["result"]["customInquiry"]>
    composites: {}
  }

  type CustomInquiryGetPayload<S extends boolean | null | undefined | CustomInquiryDefaultArgs> = $Result.GetResult<Prisma.$CustomInquiryPayload, S>

  type CustomInquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomInquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomInquiryCountAggregateInputType | true
    }

  export interface CustomInquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomInquiry'], meta: { name: 'CustomInquiry' } }
    /**
     * Find zero or one CustomInquiry that matches the filter.
     * @param {CustomInquiryFindUniqueArgs} args - Arguments to find a CustomInquiry
     * @example
     * // Get one CustomInquiry
     * const customInquiry = await prisma.customInquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomInquiryFindUniqueArgs>(args: SelectSubset<T, CustomInquiryFindUniqueArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomInquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomInquiryFindUniqueOrThrowArgs} args - Arguments to find a CustomInquiry
     * @example
     * // Get one CustomInquiry
     * const customInquiry = await prisma.customInquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomInquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomInquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomInquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryFindFirstArgs} args - Arguments to find a CustomInquiry
     * @example
     * // Get one CustomInquiry
     * const customInquiry = await prisma.customInquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomInquiryFindFirstArgs>(args?: SelectSubset<T, CustomInquiryFindFirstArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomInquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryFindFirstOrThrowArgs} args - Arguments to find a CustomInquiry
     * @example
     * // Get one CustomInquiry
     * const customInquiry = await prisma.customInquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomInquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomInquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomInquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomInquiries
     * const customInquiries = await prisma.customInquiry.findMany()
     * 
     * // Get first 10 CustomInquiries
     * const customInquiries = await prisma.customInquiry.findMany({ take: 10 })
     * 
     * // Only select the `CustomInquiryId`
     * const customInquiryWithCustomInquiryIdOnly = await prisma.customInquiry.findMany({ select: { CustomInquiryId: true } })
     * 
     */
    findMany<T extends CustomInquiryFindManyArgs>(args?: SelectSubset<T, CustomInquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomInquiry.
     * @param {CustomInquiryCreateArgs} args - Arguments to create a CustomInquiry.
     * @example
     * // Create one CustomInquiry
     * const CustomInquiry = await prisma.customInquiry.create({
     *   data: {
     *     // ... data to create a CustomInquiry
     *   }
     * })
     * 
     */
    create<T extends CustomInquiryCreateArgs>(args: SelectSubset<T, CustomInquiryCreateArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomInquiries.
     * @param {CustomInquiryCreateManyArgs} args - Arguments to create many CustomInquiries.
     * @example
     * // Create many CustomInquiries
     * const customInquiry = await prisma.customInquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomInquiryCreateManyArgs>(args?: SelectSubset<T, CustomInquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomInquiry.
     * @param {CustomInquiryDeleteArgs} args - Arguments to delete one CustomInquiry.
     * @example
     * // Delete one CustomInquiry
     * const CustomInquiry = await prisma.customInquiry.delete({
     *   where: {
     *     // ... filter to delete one CustomInquiry
     *   }
     * })
     * 
     */
    delete<T extends CustomInquiryDeleteArgs>(args: SelectSubset<T, CustomInquiryDeleteArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomInquiry.
     * @param {CustomInquiryUpdateArgs} args - Arguments to update one CustomInquiry.
     * @example
     * // Update one CustomInquiry
     * const customInquiry = await prisma.customInquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomInquiryUpdateArgs>(args: SelectSubset<T, CustomInquiryUpdateArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomInquiries.
     * @param {CustomInquiryDeleteManyArgs} args - Arguments to filter CustomInquiries to delete.
     * @example
     * // Delete a few CustomInquiries
     * const { count } = await prisma.customInquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomInquiryDeleteManyArgs>(args?: SelectSubset<T, CustomInquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomInquiries
     * const customInquiry = await prisma.customInquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomInquiryUpdateManyArgs>(args: SelectSubset<T, CustomInquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomInquiry.
     * @param {CustomInquiryUpsertArgs} args - Arguments to update or create a CustomInquiry.
     * @example
     * // Update or create a CustomInquiry
     * const customInquiry = await prisma.customInquiry.upsert({
     *   create: {
     *     // ... data to create a CustomInquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomInquiry we want to update
     *   }
     * })
     */
    upsert<T extends CustomInquiryUpsertArgs>(args: SelectSubset<T, CustomInquiryUpsertArgs<ExtArgs>>): Prisma__CustomInquiryClient<$Result.GetResult<Prisma.$CustomInquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryCountArgs} args - Arguments to filter CustomInquiries to count.
     * @example
     * // Count the number of CustomInquiries
     * const count = await prisma.customInquiry.count({
     *   where: {
     *     // ... the filter for the CustomInquiries we want to count
     *   }
     * })
    **/
    count<T extends CustomInquiryCountArgs>(
      args?: Subset<T, CustomInquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomInquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomInquiryAggregateArgs>(args: Subset<T, CustomInquiryAggregateArgs>): Prisma.PrismaPromise<GetCustomInquiryAggregateType<T>>

    /**
     * Group by CustomInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomInquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomInquiryGroupByArgs['orderBy'] }
        : { orderBy?: CustomInquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomInquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomInquiry model
   */
  readonly fields: CustomInquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomInquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomInquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomInquiry model
   */
  interface CustomInquiryFieldRefs {
    readonly CustomInquiryId: FieldRef<"CustomInquiry", 'String'>
    readonly PatientId: FieldRef<"CustomInquiry", 'String'>
    readonly ImageUpload: FieldRef<"CustomInquiry", 'String'>
    readonly Prescription: FieldRef<"CustomInquiry", 'String'>
    readonly Description: FieldRef<"CustomInquiry", 'String'>
    readonly Status: FieldRef<"CustomInquiry", 'String'>
    readonly DateCreated: FieldRef<"CustomInquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomInquiry findUnique
   */
  export type CustomInquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CustomInquiry to fetch.
     */
    where: CustomInquiryWhereUniqueInput
  }

  /**
   * CustomInquiry findUniqueOrThrow
   */
  export type CustomInquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CustomInquiry to fetch.
     */
    where: CustomInquiryWhereUniqueInput
  }

  /**
   * CustomInquiry findFirst
   */
  export type CustomInquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CustomInquiry to fetch.
     */
    where?: CustomInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInquiries to fetch.
     */
    orderBy?: CustomInquiryOrderByWithRelationInput | CustomInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomInquiries.
     */
    cursor?: CustomInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomInquiries.
     */
    distinct?: CustomInquiryScalarFieldEnum | CustomInquiryScalarFieldEnum[]
  }

  /**
   * CustomInquiry findFirstOrThrow
   */
  export type CustomInquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CustomInquiry to fetch.
     */
    where?: CustomInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInquiries to fetch.
     */
    orderBy?: CustomInquiryOrderByWithRelationInput | CustomInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomInquiries.
     */
    cursor?: CustomInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomInquiries.
     */
    distinct?: CustomInquiryScalarFieldEnum | CustomInquiryScalarFieldEnum[]
  }

  /**
   * CustomInquiry findMany
   */
  export type CustomInquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CustomInquiries to fetch.
     */
    where?: CustomInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInquiries to fetch.
     */
    orderBy?: CustomInquiryOrderByWithRelationInput | CustomInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomInquiries.
     */
    cursor?: CustomInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInquiries.
     */
    skip?: number
    distinct?: CustomInquiryScalarFieldEnum | CustomInquiryScalarFieldEnum[]
  }

  /**
   * CustomInquiry create
   */
  export type CustomInquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomInquiry.
     */
    data: XOR<CustomInquiryCreateInput, CustomInquiryUncheckedCreateInput>
  }

  /**
   * CustomInquiry createMany
   */
  export type CustomInquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomInquiries.
     */
    data: CustomInquiryCreateManyInput | CustomInquiryCreateManyInput[]
  }

  /**
   * CustomInquiry update
   */
  export type CustomInquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomInquiry.
     */
    data: XOR<CustomInquiryUpdateInput, CustomInquiryUncheckedUpdateInput>
    /**
     * Choose, which CustomInquiry to update.
     */
    where: CustomInquiryWhereUniqueInput
  }

  /**
   * CustomInquiry updateMany
   */
  export type CustomInquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomInquiries.
     */
    data: XOR<CustomInquiryUpdateManyMutationInput, CustomInquiryUncheckedUpdateManyInput>
    /**
     * Filter which CustomInquiries to update
     */
    where?: CustomInquiryWhereInput
    /**
     * Limit how many CustomInquiries to update.
     */
    limit?: number
  }

  /**
   * CustomInquiry upsert
   */
  export type CustomInquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomInquiry to update in case it exists.
     */
    where: CustomInquiryWhereUniqueInput
    /**
     * In case the CustomInquiry found by the `where` argument doesn't exist, create a new CustomInquiry with this data.
     */
    create: XOR<CustomInquiryCreateInput, CustomInquiryUncheckedCreateInput>
    /**
     * In case the CustomInquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomInquiryUpdateInput, CustomInquiryUncheckedUpdateInput>
  }

  /**
   * CustomInquiry delete
   */
  export type CustomInquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
    /**
     * Filter which CustomInquiry to delete.
     */
    where: CustomInquiryWhereUniqueInput
  }

  /**
   * CustomInquiry deleteMany
   */
  export type CustomInquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomInquiries to delete
     */
    where?: CustomInquiryWhereInput
    /**
     * Limit how many CustomInquiries to delete.
     */
    limit?: number
  }

  /**
   * CustomInquiry without action
   */
  export type CustomInquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInquiry
     */
    select?: CustomInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInquiry
     */
    omit?: CustomInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInquiryInclude<ExtArgs> | null
  }


  /**
   * Model PatientMedications
   */

  export type AggregatePatientMedications = {
    _count: PatientMedicationsCountAggregateOutputType | null
    _avg: PatientMedicationsAvgAggregateOutputType | null
    _sum: PatientMedicationsSumAggregateOutputType | null
    _min: PatientMedicationsMinAggregateOutputType | null
    _max: PatientMedicationsMaxAggregateOutputType | null
  }

  export type PatientMedicationsAvgAggregateOutputType = {
    Quantity: number | null
  }

  export type PatientMedicationsSumAggregateOutputType = {
    Quantity: number | null
  }

  export type PatientMedicationsMinAggregateOutputType = {
    PatientMedicationId: string | null
    PatientId: string | null
    MedicationId: string | null
    Quantity: number | null
  }

  export type PatientMedicationsMaxAggregateOutputType = {
    PatientMedicationId: string | null
    PatientId: string | null
    MedicationId: string | null
    Quantity: number | null
  }

  export type PatientMedicationsCountAggregateOutputType = {
    PatientMedicationId: number
    PatientId: number
    MedicationId: number
    Quantity: number
    _all: number
  }


  export type PatientMedicationsAvgAggregateInputType = {
    Quantity?: true
  }

  export type PatientMedicationsSumAggregateInputType = {
    Quantity?: true
  }

  export type PatientMedicationsMinAggregateInputType = {
    PatientMedicationId?: true
    PatientId?: true
    MedicationId?: true
    Quantity?: true
  }

  export type PatientMedicationsMaxAggregateInputType = {
    PatientMedicationId?: true
    PatientId?: true
    MedicationId?: true
    Quantity?: true
  }

  export type PatientMedicationsCountAggregateInputType = {
    PatientMedicationId?: true
    PatientId?: true
    MedicationId?: true
    Quantity?: true
    _all?: true
  }

  export type PatientMedicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientMedications to aggregate.
     */
    where?: PatientMedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationsOrderByWithRelationInput | PatientMedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientMedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientMedications
    **/
    _count?: true | PatientMedicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientMedicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientMedicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMedicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMedicationsMaxAggregateInputType
  }

  export type GetPatientMedicationsAggregateType<T extends PatientMedicationsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientMedications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientMedications[P]>
      : GetScalarType<T[P], AggregatePatientMedications[P]>
  }




  export type PatientMedicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientMedicationsWhereInput
    orderBy?: PatientMedicationsOrderByWithAggregationInput | PatientMedicationsOrderByWithAggregationInput[]
    by: PatientMedicationsScalarFieldEnum[] | PatientMedicationsScalarFieldEnum
    having?: PatientMedicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientMedicationsCountAggregateInputType | true
    _avg?: PatientMedicationsAvgAggregateInputType
    _sum?: PatientMedicationsSumAggregateInputType
    _min?: PatientMedicationsMinAggregateInputType
    _max?: PatientMedicationsMaxAggregateInputType
  }

  export type PatientMedicationsGroupByOutputType = {
    PatientMedicationId: string
    PatientId: string
    MedicationId: string
    Quantity: number | null
    _count: PatientMedicationsCountAggregateOutputType | null
    _avg: PatientMedicationsAvgAggregateOutputType | null
    _sum: PatientMedicationsSumAggregateOutputType | null
    _min: PatientMedicationsMinAggregateOutputType | null
    _max: PatientMedicationsMaxAggregateOutputType | null
  }

  type GetPatientMedicationsGroupByPayload<T extends PatientMedicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientMedicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientMedicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientMedicationsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientMedicationsGroupByOutputType[P]>
        }
      >
    >


  export type PatientMedicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PatientMedicationId?: boolean
    PatientId?: boolean
    MedicationId?: boolean
    Quantity?: boolean
    Patient?: boolean | PatientDefaultArgs<ExtArgs>
    Medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientMedications"]>



  export type PatientMedicationsSelectScalar = {
    PatientMedicationId?: boolean
    PatientId?: boolean
    MedicationId?: boolean
    Quantity?: boolean
  }

  export type PatientMedicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PatientMedicationId" | "PatientId" | "MedicationId" | "Quantity", ExtArgs["result"]["patientMedications"]>
  export type PatientMedicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Patient?: boolean | PatientDefaultArgs<ExtArgs>
    Medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $PatientMedicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientMedications"
    objects: {
      Patient: Prisma.$PatientPayload<ExtArgs>
      Medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PatientMedicationId: string
      PatientId: string
      MedicationId: string
      Quantity: number | null
    }, ExtArgs["result"]["patientMedications"]>
    composites: {}
  }

  type PatientMedicationsGetPayload<S extends boolean | null | undefined | PatientMedicationsDefaultArgs> = $Result.GetResult<Prisma.$PatientMedicationsPayload, S>

  type PatientMedicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientMedicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientMedicationsCountAggregateInputType | true
    }

  export interface PatientMedicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientMedications'], meta: { name: 'PatientMedications' } }
    /**
     * Find zero or one PatientMedications that matches the filter.
     * @param {PatientMedicationsFindUniqueArgs} args - Arguments to find a PatientMedications
     * @example
     * // Get one PatientMedications
     * const patientMedications = await prisma.patientMedications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientMedicationsFindUniqueArgs>(args: SelectSubset<T, PatientMedicationsFindUniqueArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientMedications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientMedicationsFindUniqueOrThrowArgs} args - Arguments to find a PatientMedications
     * @example
     * // Get one PatientMedications
     * const patientMedications = await prisma.patientMedications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientMedicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientMedicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientMedications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsFindFirstArgs} args - Arguments to find a PatientMedications
     * @example
     * // Get one PatientMedications
     * const patientMedications = await prisma.patientMedications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientMedicationsFindFirstArgs>(args?: SelectSubset<T, PatientMedicationsFindFirstArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientMedications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsFindFirstOrThrowArgs} args - Arguments to find a PatientMedications
     * @example
     * // Get one PatientMedications
     * const patientMedications = await prisma.patientMedications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientMedicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientMedicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientMedications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientMedications
     * const patientMedications = await prisma.patientMedications.findMany()
     * 
     * // Get first 10 PatientMedications
     * const patientMedications = await prisma.patientMedications.findMany({ take: 10 })
     * 
     * // Only select the `PatientMedicationId`
     * const patientMedicationsWithPatientMedicationIdOnly = await prisma.patientMedications.findMany({ select: { PatientMedicationId: true } })
     * 
     */
    findMany<T extends PatientMedicationsFindManyArgs>(args?: SelectSubset<T, PatientMedicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientMedications.
     * @param {PatientMedicationsCreateArgs} args - Arguments to create a PatientMedications.
     * @example
     * // Create one PatientMedications
     * const PatientMedications = await prisma.patientMedications.create({
     *   data: {
     *     // ... data to create a PatientMedications
     *   }
     * })
     * 
     */
    create<T extends PatientMedicationsCreateArgs>(args: SelectSubset<T, PatientMedicationsCreateArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientMedications.
     * @param {PatientMedicationsCreateManyArgs} args - Arguments to create many PatientMedications.
     * @example
     * // Create many PatientMedications
     * const patientMedications = await prisma.patientMedications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientMedicationsCreateManyArgs>(args?: SelectSubset<T, PatientMedicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PatientMedications.
     * @param {PatientMedicationsDeleteArgs} args - Arguments to delete one PatientMedications.
     * @example
     * // Delete one PatientMedications
     * const PatientMedications = await prisma.patientMedications.delete({
     *   where: {
     *     // ... filter to delete one PatientMedications
     *   }
     * })
     * 
     */
    delete<T extends PatientMedicationsDeleteArgs>(args: SelectSubset<T, PatientMedicationsDeleteArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientMedications.
     * @param {PatientMedicationsUpdateArgs} args - Arguments to update one PatientMedications.
     * @example
     * // Update one PatientMedications
     * const patientMedications = await prisma.patientMedications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientMedicationsUpdateArgs>(args: SelectSubset<T, PatientMedicationsUpdateArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientMedications.
     * @param {PatientMedicationsDeleteManyArgs} args - Arguments to filter PatientMedications to delete.
     * @example
     * // Delete a few PatientMedications
     * const { count } = await prisma.patientMedications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientMedicationsDeleteManyArgs>(args?: SelectSubset<T, PatientMedicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientMedications
     * const patientMedications = await prisma.patientMedications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientMedicationsUpdateManyArgs>(args: SelectSubset<T, PatientMedicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatientMedications.
     * @param {PatientMedicationsUpsertArgs} args - Arguments to update or create a PatientMedications.
     * @example
     * // Update or create a PatientMedications
     * const patientMedications = await prisma.patientMedications.upsert({
     *   create: {
     *     // ... data to create a PatientMedications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientMedications we want to update
     *   }
     * })
     */
    upsert<T extends PatientMedicationsUpsertArgs>(args: SelectSubset<T, PatientMedicationsUpsertArgs<ExtArgs>>): Prisma__PatientMedicationsClient<$Result.GetResult<Prisma.$PatientMedicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsCountArgs} args - Arguments to filter PatientMedications to count.
     * @example
     * // Count the number of PatientMedications
     * const count = await prisma.patientMedications.count({
     *   where: {
     *     // ... the filter for the PatientMedications we want to count
     *   }
     * })
    **/
    count<T extends PatientMedicationsCountArgs>(
      args?: Subset<T, PatientMedicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientMedicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientMedicationsAggregateArgs>(args: Subset<T, PatientMedicationsAggregateArgs>): Prisma.PrismaPromise<GetPatientMedicationsAggregateType<T>>

    /**
     * Group by PatientMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientMedicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientMedicationsGroupByArgs['orderBy'] }
        : { orderBy?: PatientMedicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientMedicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientMedicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientMedications model
   */
  readonly fields: PatientMedicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientMedications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientMedicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientMedications model
   */
  interface PatientMedicationsFieldRefs {
    readonly PatientMedicationId: FieldRef<"PatientMedications", 'String'>
    readonly PatientId: FieldRef<"PatientMedications", 'String'>
    readonly MedicationId: FieldRef<"PatientMedications", 'String'>
    readonly Quantity: FieldRef<"PatientMedications", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PatientMedications findUnique
   */
  export type PatientMedicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedications to fetch.
     */
    where: PatientMedicationsWhereUniqueInput
  }

  /**
   * PatientMedications findUniqueOrThrow
   */
  export type PatientMedicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedications to fetch.
     */
    where: PatientMedicationsWhereUniqueInput
  }

  /**
   * PatientMedications findFirst
   */
  export type PatientMedicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedications to fetch.
     */
    where?: PatientMedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationsOrderByWithRelationInput | PatientMedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientMedications.
     */
    cursor?: PatientMedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientMedications.
     */
    distinct?: PatientMedicationsScalarFieldEnum | PatientMedicationsScalarFieldEnum[]
  }

  /**
   * PatientMedications findFirstOrThrow
   */
  export type PatientMedicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedications to fetch.
     */
    where?: PatientMedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationsOrderByWithRelationInput | PatientMedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientMedications.
     */
    cursor?: PatientMedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientMedications.
     */
    distinct?: PatientMedicationsScalarFieldEnum | PatientMedicationsScalarFieldEnum[]
  }

  /**
   * PatientMedications findMany
   */
  export type PatientMedicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedications to fetch.
     */
    where?: PatientMedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationsOrderByWithRelationInput | PatientMedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientMedications.
     */
    cursor?: PatientMedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    distinct?: PatientMedicationsScalarFieldEnum | PatientMedicationsScalarFieldEnum[]
  }

  /**
   * PatientMedications create
   */
  export type PatientMedicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientMedications.
     */
    data: XOR<PatientMedicationsCreateInput, PatientMedicationsUncheckedCreateInput>
  }

  /**
   * PatientMedications createMany
   */
  export type PatientMedicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientMedications.
     */
    data: PatientMedicationsCreateManyInput | PatientMedicationsCreateManyInput[]
  }

  /**
   * PatientMedications update
   */
  export type PatientMedicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientMedications.
     */
    data: XOR<PatientMedicationsUpdateInput, PatientMedicationsUncheckedUpdateInput>
    /**
     * Choose, which PatientMedications to update.
     */
    where: PatientMedicationsWhereUniqueInput
  }

  /**
   * PatientMedications updateMany
   */
  export type PatientMedicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientMedications.
     */
    data: XOR<PatientMedicationsUpdateManyMutationInput, PatientMedicationsUncheckedUpdateManyInput>
    /**
     * Filter which PatientMedications to update
     */
    where?: PatientMedicationsWhereInput
    /**
     * Limit how many PatientMedications to update.
     */
    limit?: number
  }

  /**
   * PatientMedications upsert
   */
  export type PatientMedicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientMedications to update in case it exists.
     */
    where: PatientMedicationsWhereUniqueInput
    /**
     * In case the PatientMedications found by the `where` argument doesn't exist, create a new PatientMedications with this data.
     */
    create: XOR<PatientMedicationsCreateInput, PatientMedicationsUncheckedCreateInput>
    /**
     * In case the PatientMedications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientMedicationsUpdateInput, PatientMedicationsUncheckedUpdateInput>
  }

  /**
   * PatientMedications delete
   */
  export type PatientMedicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
    /**
     * Filter which PatientMedications to delete.
     */
    where: PatientMedicationsWhereUniqueInput
  }

  /**
   * PatientMedications deleteMany
   */
  export type PatientMedicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientMedications to delete
     */
    where?: PatientMedicationsWhereInput
    /**
     * Limit how many PatientMedications to delete.
     */
    limit?: number
  }

  /**
   * PatientMedications without action
   */
  export type PatientMedicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedications
     */
    select?: PatientMedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedications
     */
    omit?: PatientMedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationsInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyMinAggregateOutputType = {
    PharmacyId: string | null
    Name: string | null
    Content: string | null
    PharmacyThumbnail: string | null
    Location: string | null
    Email: string | null
    Phone: string | null
    Website: string | null
    LicenseNumber: string | null
    DateCreated: Date | null
  }

  export type PharmacyMaxAggregateOutputType = {
    PharmacyId: string | null
    Name: string | null
    Content: string | null
    PharmacyThumbnail: string | null
    Location: string | null
    Email: string | null
    Phone: string | null
    Website: string | null
    LicenseNumber: string | null
    DateCreated: Date | null
  }

  export type PharmacyCountAggregateOutputType = {
    PharmacyId: number
    Name: number
    Content: number
    PharmacyThumbnail: number
    Location: number
    Email: number
    Phone: number
    Website: number
    LicenseNumber: number
    DateCreated: number
    _all: number
  }


  export type PharmacyMinAggregateInputType = {
    PharmacyId?: true
    Name?: true
    Content?: true
    PharmacyThumbnail?: true
    Location?: true
    Email?: true
    Phone?: true
    Website?: true
    LicenseNumber?: true
    DateCreated?: true
  }

  export type PharmacyMaxAggregateInputType = {
    PharmacyId?: true
    Name?: true
    Content?: true
    PharmacyThumbnail?: true
    Location?: true
    Email?: true
    Phone?: true
    Website?: true
    LicenseNumber?: true
    DateCreated?: true
  }

  export type PharmacyCountAggregateInputType = {
    PharmacyId?: true
    Name?: true
    Content?: true
    PharmacyThumbnail?: true
    Location?: true
    Email?: true
    Phone?: true
    Website?: true
    LicenseNumber?: true
    DateCreated?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    PharmacyId: string
    Name: string
    Content: string
    PharmacyThumbnail: string | null
    Location: string | null
    Email: string | null
    Phone: string | null
    Website: string | null
    LicenseNumber: string | null
    DateCreated: Date
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PharmacyId?: boolean
    Name?: boolean
    Content?: boolean
    PharmacyThumbnail?: boolean
    Location?: boolean
    Email?: boolean
    Phone?: boolean
    Website?: boolean
    LicenseNumber?: boolean
    DateCreated?: boolean
  }, ExtArgs["result"]["pharmacy"]>



  export type PharmacySelectScalar = {
    PharmacyId?: boolean
    Name?: boolean
    Content?: boolean
    PharmacyThumbnail?: boolean
    Location?: boolean
    Email?: boolean
    Phone?: boolean
    Website?: boolean
    LicenseNumber?: boolean
    DateCreated?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PharmacyId" | "Name" | "Content" | "PharmacyThumbnail" | "Location" | "Email" | "Phone" | "Website" | "LicenseNumber" | "DateCreated", ExtArgs["result"]["pharmacy"]>

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      PharmacyId: string
      Name: string
      Content: string
      PharmacyThumbnail: string | null
      Location: string | null
      Email: string | null
      Phone: string | null
      Website: string | null
      LicenseNumber: string | null
      DateCreated: Date
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `PharmacyId`
     * const pharmacyWithPharmacyIdOnly = await prisma.pharmacy.findMany({ select: { PharmacyId: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly PharmacyId: FieldRef<"Pharmacy", 'String'>
    readonly Name: FieldRef<"Pharmacy", 'String'>
    readonly Content: FieldRef<"Pharmacy", 'String'>
    readonly PharmacyThumbnail: FieldRef<"Pharmacy", 'String'>
    readonly Location: FieldRef<"Pharmacy", 'String'>
    readonly Email: FieldRef<"Pharmacy", 'String'>
    readonly Phone: FieldRef<"Pharmacy", 'String'>
    readonly Website: FieldRef<"Pharmacy", 'String'>
    readonly LicenseNumber: FieldRef<"Pharmacy", 'String'>
    readonly DateCreated: FieldRef<"Pharmacy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    UserId: string | null
    Fullname: string | null
    Mobile: string | null
    Email: string | null
    Password: string | null
    Role: string | null
    IsActive: boolean | null
    LastLoginAt: Date | null
    DateCreated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    UserId: string | null
    Fullname: string | null
    Mobile: string | null
    Email: string | null
    Password: string | null
    Role: string | null
    IsActive: boolean | null
    LastLoginAt: Date | null
    DateCreated: Date | null
  }

  export type UserCountAggregateOutputType = {
    UserId: number
    Fullname: number
    Mobile: number
    Email: number
    Password: number
    Role: number
    IsActive: number
    LastLoginAt: number
    DateCreated: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    UserId?: true
    Fullname?: true
    Mobile?: true
    Email?: true
    Password?: true
    Role?: true
    IsActive?: true
    LastLoginAt?: true
    DateCreated?: true
  }

  export type UserMaxAggregateInputType = {
    UserId?: true
    Fullname?: true
    Mobile?: true
    Email?: true
    Password?: true
    Role?: true
    IsActive?: true
    LastLoginAt?: true
    DateCreated?: true
  }

  export type UserCountAggregateInputType = {
    UserId?: true
    Fullname?: true
    Mobile?: true
    Email?: true
    Password?: true
    Role?: true
    IsActive?: true
    LastLoginAt?: true
    DateCreated?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserId: string
    Fullname: string
    Mobile: string
    Email: string
    Password: string
    Role: string
    IsActive: boolean
    LastLoginAt: Date | null
    DateCreated: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    Fullname?: boolean
    Mobile?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    IsActive?: boolean
    LastLoginAt?: boolean
    DateCreated?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    UserId?: boolean
    Fullname?: boolean
    Mobile?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    IsActive?: boolean
    LastLoginAt?: boolean
    DateCreated?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserId" | "Fullname" | "Mobile" | "Email" | "Password" | "Role" | "IsActive" | "LastLoginAt" | "DateCreated", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      UserId: string
      Fullname: string
      Mobile: string
      Email: string
      Password: string
      Role: string
      IsActive: boolean
      LastLoginAt: Date | null
      DateCreated: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UserId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { UserId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly UserId: FieldRef<"User", 'String'>
    readonly Fullname: FieldRef<"User", 'String'>
    readonly Mobile: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'String'>
    readonly IsActive: FieldRef<"User", 'Boolean'>
    readonly LastLoginAt: FieldRef<"User", 'DateTime'>
    readonly DateCreated: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    MessageId: string | null
    Fullname: string | null
    Email: string | null
    Mobile: string | null
    Message: string | null
    DateSent: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    MessageId: string | null
    Fullname: string | null
    Email: string | null
    Mobile: string | null
    Message: string | null
    DateSent: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    MessageId: number
    Fullname: number
    Email: number
    Mobile: number
    Message: number
    DateSent: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    MessageId?: true
    Fullname?: true
    Email?: true
    Mobile?: true
    Message?: true
    DateSent?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    MessageId?: true
    Fullname?: true
    Email?: true
    Mobile?: true
    Message?: true
    DateSent?: true
  }

  export type ContactMessageCountAggregateInputType = {
    MessageId?: true
    Fullname?: true
    Email?: true
    Mobile?: true
    Message?: true
    DateSent?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    MessageId: string
    Fullname: string
    Email: string
    Mobile: string | null
    Message: string
    DateSent: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageId?: boolean
    Fullname?: boolean
    Email?: boolean
    Mobile?: boolean
    Message?: boolean
    DateSent?: boolean
  }, ExtArgs["result"]["contactMessage"]>



  export type ContactMessageSelectScalar = {
    MessageId?: boolean
    Fullname?: boolean
    Email?: boolean
    Mobile?: boolean
    Message?: boolean
    DateSent?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MessageId" | "Fullname" | "Email" | "Mobile" | "Message" | "DateSent", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MessageId: string
      Fullname: string
      Email: string
      Mobile: string | null
      Message: string
      DateSent: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `MessageId`
     * const contactMessageWithMessageIdOnly = await prisma.contactMessage.findMany({ select: { MessageId: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly MessageId: FieldRef<"ContactMessage", 'String'>
    readonly Fullname: FieldRef<"ContactMessage", 'String'>
    readonly Email: FieldRef<"ContactMessage", 'String'>
    readonly Mobile: FieldRef<"ContactMessage", 'String'>
    readonly Message: FieldRef<"ContactMessage", 'String'>
    readonly DateSent: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MedicationScalarFieldEnum: {
    MedicationId: 'MedicationId',
    Name: 'Name',
    Description: 'Description',
    Image: 'Image',
    DateCreated: 'DateCreated',
    StockQuantity: 'StockQuantity',
    StockLimit: 'StockLimit',
    ManufactureDate: 'ManufactureDate',
    ExpirationDate: 'ExpirationDate',
    IsAvailable: 'IsAvailable'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    PatientId: 'PatientId',
    Fullname: 'Fullname',
    Mobile: 'Mobile',
    NationalID: 'NationalID',
    Email: 'Email',
    DateCreated: 'DateCreated'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const CustomInquiryScalarFieldEnum: {
    CustomInquiryId: 'CustomInquiryId',
    PatientId: 'PatientId',
    ImageUpload: 'ImageUpload',
    Prescription: 'Prescription',
    Description: 'Description',
    Status: 'Status',
    DateCreated: 'DateCreated'
  };

  export type CustomInquiryScalarFieldEnum = (typeof CustomInquiryScalarFieldEnum)[keyof typeof CustomInquiryScalarFieldEnum]


  export const PatientMedicationsScalarFieldEnum: {
    PatientMedicationId: 'PatientMedicationId',
    PatientId: 'PatientId',
    MedicationId: 'MedicationId',
    Quantity: 'Quantity'
  };

  export type PatientMedicationsScalarFieldEnum = (typeof PatientMedicationsScalarFieldEnum)[keyof typeof PatientMedicationsScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    PharmacyId: 'PharmacyId',
    Name: 'Name',
    Content: 'Content',
    PharmacyThumbnail: 'PharmacyThumbnail',
    Location: 'Location',
    Email: 'Email',
    Phone: 'Phone',
    Website: 'Website',
    LicenseNumber: 'LicenseNumber',
    DateCreated: 'DateCreated'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    UserId: 'UserId',
    Fullname: 'Fullname',
    Mobile: 'Mobile',
    Email: 'Email',
    Password: 'Password',
    Role: 'Role',
    IsActive: 'IsActive',
    LastLoginAt: 'LastLoginAt',
    DateCreated: 'DateCreated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    MessageId: 'MessageId',
    Fullname: 'Fullname',
    Email: 'Email',
    Mobile: 'Mobile',
    Message: 'Message',
    DateSent: 'DateSent'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    MedicationId?: StringFilter<"Medication"> | string
    Name?: StringFilter<"Medication"> | string
    Description?: StringFilter<"Medication"> | string
    Image?: StringNullableFilter<"Medication"> | string | null
    DateCreated?: DateTimeFilter<"Medication"> | Date | string
    StockQuantity?: IntNullableFilter<"Medication"> | number | null
    StockLimit?: IntNullableFilter<"Medication"> | number | null
    ManufactureDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    ExpirationDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    IsAvailable?: BoolFilter<"Medication"> | boolean
    PatientMedications?: PatientMedicationsListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    MedicationId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Image?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
    StockQuantity?: SortOrderInput | SortOrder
    StockLimit?: SortOrderInput | SortOrder
    ManufactureDate?: SortOrderInput | SortOrder
    ExpirationDate?: SortOrderInput | SortOrder
    IsAvailable?: SortOrder
    PatientMedications?: PatientMedicationsOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    MedicationId?: string
    Name?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    Description?: StringFilter<"Medication"> | string
    Image?: StringNullableFilter<"Medication"> | string | null
    DateCreated?: DateTimeFilter<"Medication"> | Date | string
    StockQuantity?: IntNullableFilter<"Medication"> | number | null
    StockLimit?: IntNullableFilter<"Medication"> | number | null
    ManufactureDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    ExpirationDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    IsAvailable?: BoolFilter<"Medication"> | boolean
    PatientMedications?: PatientMedicationsListRelationFilter
  }, "MedicationId" | "Name">

  export type MedicationOrderByWithAggregationInput = {
    MedicationId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Image?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
    StockQuantity?: SortOrderInput | SortOrder
    StockLimit?: SortOrderInput | SortOrder
    ManufactureDate?: SortOrderInput | SortOrder
    ExpirationDate?: SortOrderInput | SortOrder
    IsAvailable?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    MedicationId?: StringWithAggregatesFilter<"Medication"> | string
    Name?: StringWithAggregatesFilter<"Medication"> | string
    Description?: StringWithAggregatesFilter<"Medication"> | string
    Image?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    DateCreated?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    StockQuantity?: IntNullableWithAggregatesFilter<"Medication"> | number | null
    StockLimit?: IntNullableWithAggregatesFilter<"Medication"> | number | null
    ManufactureDate?: DateTimeNullableWithAggregatesFilter<"Medication"> | Date | string | null
    ExpirationDate?: DateTimeNullableWithAggregatesFilter<"Medication"> | Date | string | null
    IsAvailable?: BoolWithAggregatesFilter<"Medication"> | boolean
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    PatientId?: StringFilter<"Patient"> | string
    Fullname?: StringFilter<"Patient"> | string
    Mobile?: StringFilter<"Patient"> | string
    NationalID?: StringNullableFilter<"Patient"> | string | null
    Email?: StringNullableFilter<"Patient"> | string | null
    DateCreated?: DateTimeFilter<"Patient"> | Date | string
    CustomInquiries?: CustomInquiryListRelationFilter
    PatientMedications?: PatientMedicationsListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    PatientId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    NationalID?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
    CustomInquiries?: CustomInquiryOrderByRelationAggregateInput
    PatientMedications?: PatientMedicationsOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    PatientId?: string
    Mobile?: string
    NationalID?: string
    Email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    Fullname?: StringFilter<"Patient"> | string
    DateCreated?: DateTimeFilter<"Patient"> | Date | string
    CustomInquiries?: CustomInquiryListRelationFilter
    PatientMedications?: PatientMedicationsListRelationFilter
  }, "PatientId" | "Mobile" | "NationalID" | "Email">

  export type PatientOrderByWithAggregationInput = {
    PatientId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    NationalID?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    PatientId?: StringWithAggregatesFilter<"Patient"> | string
    Fullname?: StringWithAggregatesFilter<"Patient"> | string
    Mobile?: StringWithAggregatesFilter<"Patient"> | string
    NationalID?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    DateCreated?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type CustomInquiryWhereInput = {
    AND?: CustomInquiryWhereInput | CustomInquiryWhereInput[]
    OR?: CustomInquiryWhereInput[]
    NOT?: CustomInquiryWhereInput | CustomInquiryWhereInput[]
    CustomInquiryId?: StringFilter<"CustomInquiry"> | string
    PatientId?: StringFilter<"CustomInquiry"> | string
    ImageUpload?: StringNullableFilter<"CustomInquiry"> | string | null
    Prescription?: StringFilter<"CustomInquiry"> | string
    Description?: StringFilter<"CustomInquiry"> | string
    Status?: StringFilter<"CustomInquiry"> | string
    DateCreated?: DateTimeFilter<"CustomInquiry"> | Date | string
    Patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type CustomInquiryOrderByWithRelationInput = {
    CustomInquiryId?: SortOrder
    PatientId?: SortOrder
    ImageUpload?: SortOrderInput | SortOrder
    Prescription?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DateCreated?: SortOrder
    Patient?: PatientOrderByWithRelationInput
  }

  export type CustomInquiryWhereUniqueInput = Prisma.AtLeast<{
    CustomInquiryId?: string
    AND?: CustomInquiryWhereInput | CustomInquiryWhereInput[]
    OR?: CustomInquiryWhereInput[]
    NOT?: CustomInquiryWhereInput | CustomInquiryWhereInput[]
    PatientId?: StringFilter<"CustomInquiry"> | string
    ImageUpload?: StringNullableFilter<"CustomInquiry"> | string | null
    Prescription?: StringFilter<"CustomInquiry"> | string
    Description?: StringFilter<"CustomInquiry"> | string
    Status?: StringFilter<"CustomInquiry"> | string
    DateCreated?: DateTimeFilter<"CustomInquiry"> | Date | string
    Patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "CustomInquiryId">

  export type CustomInquiryOrderByWithAggregationInput = {
    CustomInquiryId?: SortOrder
    PatientId?: SortOrder
    ImageUpload?: SortOrderInput | SortOrder
    Prescription?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DateCreated?: SortOrder
    _count?: CustomInquiryCountOrderByAggregateInput
    _max?: CustomInquiryMaxOrderByAggregateInput
    _min?: CustomInquiryMinOrderByAggregateInput
  }

  export type CustomInquiryScalarWhereWithAggregatesInput = {
    AND?: CustomInquiryScalarWhereWithAggregatesInput | CustomInquiryScalarWhereWithAggregatesInput[]
    OR?: CustomInquiryScalarWhereWithAggregatesInput[]
    NOT?: CustomInquiryScalarWhereWithAggregatesInput | CustomInquiryScalarWhereWithAggregatesInput[]
    CustomInquiryId?: StringWithAggregatesFilter<"CustomInquiry"> | string
    PatientId?: StringWithAggregatesFilter<"CustomInquiry"> | string
    ImageUpload?: StringNullableWithAggregatesFilter<"CustomInquiry"> | string | null
    Prescription?: StringWithAggregatesFilter<"CustomInquiry"> | string
    Description?: StringWithAggregatesFilter<"CustomInquiry"> | string
    Status?: StringWithAggregatesFilter<"CustomInquiry"> | string
    DateCreated?: DateTimeWithAggregatesFilter<"CustomInquiry"> | Date | string
  }

  export type PatientMedicationsWhereInput = {
    AND?: PatientMedicationsWhereInput | PatientMedicationsWhereInput[]
    OR?: PatientMedicationsWhereInput[]
    NOT?: PatientMedicationsWhereInput | PatientMedicationsWhereInput[]
    PatientMedicationId?: StringFilter<"PatientMedications"> | string
    PatientId?: StringFilter<"PatientMedications"> | string
    MedicationId?: StringFilter<"PatientMedications"> | string
    Quantity?: IntNullableFilter<"PatientMedications"> | number | null
    Patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    Medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }

  export type PatientMedicationsOrderByWithRelationInput = {
    PatientMedicationId?: SortOrder
    PatientId?: SortOrder
    MedicationId?: SortOrder
    Quantity?: SortOrderInput | SortOrder
    Patient?: PatientOrderByWithRelationInput
    Medication?: MedicationOrderByWithRelationInput
  }

  export type PatientMedicationsWhereUniqueInput = Prisma.AtLeast<{
    PatientMedicationId?: string
    AND?: PatientMedicationsWhereInput | PatientMedicationsWhereInput[]
    OR?: PatientMedicationsWhereInput[]
    NOT?: PatientMedicationsWhereInput | PatientMedicationsWhereInput[]
    PatientId?: StringFilter<"PatientMedications"> | string
    MedicationId?: StringFilter<"PatientMedications"> | string
    Quantity?: IntNullableFilter<"PatientMedications"> | number | null
    Patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    Medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }, "PatientMedicationId">

  export type PatientMedicationsOrderByWithAggregationInput = {
    PatientMedicationId?: SortOrder
    PatientId?: SortOrder
    MedicationId?: SortOrder
    Quantity?: SortOrderInput | SortOrder
    _count?: PatientMedicationsCountOrderByAggregateInput
    _avg?: PatientMedicationsAvgOrderByAggregateInput
    _max?: PatientMedicationsMaxOrderByAggregateInput
    _min?: PatientMedicationsMinOrderByAggregateInput
    _sum?: PatientMedicationsSumOrderByAggregateInput
  }

  export type PatientMedicationsScalarWhereWithAggregatesInput = {
    AND?: PatientMedicationsScalarWhereWithAggregatesInput | PatientMedicationsScalarWhereWithAggregatesInput[]
    OR?: PatientMedicationsScalarWhereWithAggregatesInput[]
    NOT?: PatientMedicationsScalarWhereWithAggregatesInput | PatientMedicationsScalarWhereWithAggregatesInput[]
    PatientMedicationId?: StringWithAggregatesFilter<"PatientMedications"> | string
    PatientId?: StringWithAggregatesFilter<"PatientMedications"> | string
    MedicationId?: StringWithAggregatesFilter<"PatientMedications"> | string
    Quantity?: IntNullableWithAggregatesFilter<"PatientMedications"> | number | null
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    PharmacyId?: StringFilter<"Pharmacy"> | string
    Name?: StringFilter<"Pharmacy"> | string
    Content?: StringFilter<"Pharmacy"> | string
    PharmacyThumbnail?: StringNullableFilter<"Pharmacy"> | string | null
    Location?: StringNullableFilter<"Pharmacy"> | string | null
    Email?: StringNullableFilter<"Pharmacy"> | string | null
    Phone?: StringNullableFilter<"Pharmacy"> | string | null
    Website?: StringNullableFilter<"Pharmacy"> | string | null
    LicenseNumber?: StringNullableFilter<"Pharmacy"> | string | null
    DateCreated?: DateTimeFilter<"Pharmacy"> | Date | string
  }

  export type PharmacyOrderByWithRelationInput = {
    PharmacyId?: SortOrder
    Name?: SortOrder
    Content?: SortOrder
    PharmacyThumbnail?: SortOrderInput | SortOrder
    Location?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
    LicenseNumber?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    PharmacyId?: string
    Email?: string
    Phone?: string
    LicenseNumber?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    Name?: StringFilter<"Pharmacy"> | string
    Content?: StringFilter<"Pharmacy"> | string
    PharmacyThumbnail?: StringNullableFilter<"Pharmacy"> | string | null
    Location?: StringNullableFilter<"Pharmacy"> | string | null
    Website?: StringNullableFilter<"Pharmacy"> | string | null
    DateCreated?: DateTimeFilter<"Pharmacy"> | Date | string
  }, "PharmacyId" | "Email" | "Phone" | "LicenseNumber">

  export type PharmacyOrderByWithAggregationInput = {
    PharmacyId?: SortOrder
    Name?: SortOrder
    Content?: SortOrder
    PharmacyThumbnail?: SortOrderInput | SortOrder
    Location?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Website?: SortOrderInput | SortOrder
    LicenseNumber?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    PharmacyId?: StringWithAggregatesFilter<"Pharmacy"> | string
    Name?: StringWithAggregatesFilter<"Pharmacy"> | string
    Content?: StringWithAggregatesFilter<"Pharmacy"> | string
    PharmacyThumbnail?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    Location?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    Website?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    LicenseNumber?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    DateCreated?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserId?: StringFilter<"User"> | string
    Fullname?: StringFilter<"User"> | string
    Mobile?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    IsActive?: BoolFilter<"User"> | boolean
    LastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    DateCreated?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    UserId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    IsActive?: SortOrder
    LastLoginAt?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserId?: string
    Mobile?: string
    Email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Fullname?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    IsActive?: BoolFilter<"User"> | boolean
    LastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    DateCreated?: DateTimeFilter<"User"> | Date | string
  }, "UserId" | "UserId" | "Mobile" | "Email">

  export type UserOrderByWithAggregationInput = {
    UserId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    IsActive?: SortOrder
    LastLoginAt?: SortOrderInput | SortOrder
    DateCreated?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserId?: StringWithAggregatesFilter<"User"> | string
    Fullname?: StringWithAggregatesFilter<"User"> | string
    Mobile?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    Password?: StringWithAggregatesFilter<"User"> | string
    Role?: StringWithAggregatesFilter<"User"> | string
    IsActive?: BoolWithAggregatesFilter<"User"> | boolean
    LastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    DateCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    MessageId?: StringFilter<"ContactMessage"> | string
    Fullname?: StringFilter<"ContactMessage"> | string
    Email?: StringFilter<"ContactMessage"> | string
    Mobile?: StringNullableFilter<"ContactMessage"> | string | null
    Message?: StringFilter<"ContactMessage"> | string
    DateSent?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    MessageId?: SortOrder
    Fullname?: SortOrder
    Email?: SortOrder
    Mobile?: SortOrderInput | SortOrder
    Message?: SortOrder
    DateSent?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    MessageId?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    Fullname?: StringFilter<"ContactMessage"> | string
    Email?: StringFilter<"ContactMessage"> | string
    Mobile?: StringNullableFilter<"ContactMessage"> | string | null
    Message?: StringFilter<"ContactMessage"> | string
    DateSent?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "MessageId">

  export type ContactMessageOrderByWithAggregationInput = {
    MessageId?: SortOrder
    Fullname?: SortOrder
    Email?: SortOrder
    Mobile?: SortOrderInput | SortOrder
    Message?: SortOrder
    DateSent?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    MessageId?: StringWithAggregatesFilter<"ContactMessage"> | string
    Fullname?: StringWithAggregatesFilter<"ContactMessage"> | string
    Email?: StringWithAggregatesFilter<"ContactMessage"> | string
    Mobile?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    Message?: StringWithAggregatesFilter<"ContactMessage"> | string
    DateSent?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type MedicationCreateInput = {
    MedicationId: string
    Name: string
    Description: string
    Image?: string | null
    DateCreated?: Date | string
    StockQuantity?: number | null
    StockLimit?: number | null
    ManufactureDate?: Date | string | null
    ExpirationDate?: Date | string | null
    IsAvailable?: boolean
    PatientMedications?: PatientMedicationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    MedicationId: string
    Name: string
    Description: string
    Image?: string | null
    DateCreated?: Date | string
    StockQuantity?: number | null
    StockLimit?: number | null
    ManufactureDate?: Date | string | null
    ExpirationDate?: Date | string | null
    IsAvailable?: boolean
    PatientMedications?: PatientMedicationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    MedicationId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    StockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    StockLimit?: NullableIntFieldUpdateOperationsInput | number | null
    ManufactureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAvailable?: BoolFieldUpdateOperationsInput | boolean
    PatientMedications?: PatientMedicationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    MedicationId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    StockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    StockLimit?: NullableIntFieldUpdateOperationsInput | number | null
    ManufactureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAvailable?: BoolFieldUpdateOperationsInput | boolean
    PatientMedications?: PatientMedicationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    MedicationId: string
    Name: string
    Description: string
    Image?: string | null
    DateCreated?: Date | string
    StockQuantity?: number | null
    StockLimit?: number | null
    ManufactureDate?: Date | string | null
    ExpirationDate?: Date | string | null
    IsAvailable?: boolean
  }

  export type MedicationUpdateManyMutationInput = {
    MedicationId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    StockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    StockLimit?: NullableIntFieldUpdateOperationsInput | number | null
    ManufactureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicationUncheckedUpdateManyInput = {
    MedicationId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    StockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    StockLimit?: NullableIntFieldUpdateOperationsInput | number | null
    ManufactureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PatientCreateInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
    CustomInquiries?: CustomInquiryCreateNestedManyWithoutPatientInput
    PatientMedications?: PatientMedicationsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
    CustomInquiries?: CustomInquiryUncheckedCreateNestedManyWithoutPatientInput
    PatientMedications?: PatientMedicationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomInquiries?: CustomInquiryUpdateManyWithoutPatientNestedInput
    PatientMedications?: PatientMedicationsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomInquiries?: CustomInquiryUncheckedUpdateManyWithoutPatientNestedInput
    PatientMedications?: PatientMedicationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInquiryCreateInput = {
    CustomInquiryId: string
    ImageUpload?: string | null
    Prescription: string
    Description: string
    Status?: string
    DateCreated?: Date | string
    Patient: PatientCreateNestedOneWithoutCustomInquiriesInput
  }

  export type CustomInquiryUncheckedCreateInput = {
    CustomInquiryId: string
    PatientId: string
    ImageUpload?: string | null
    Prescription: string
    Description: string
    Status?: string
    DateCreated?: Date | string
  }

  export type CustomInquiryUpdateInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Patient?: PatientUpdateOneRequiredWithoutCustomInquiriesNestedInput
  }

  export type CustomInquiryUncheckedUpdateInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    PatientId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInquiryCreateManyInput = {
    CustomInquiryId: string
    PatientId: string
    ImageUpload?: string | null
    Prescription: string
    Description: string
    Status?: string
    DateCreated?: Date | string
  }

  export type CustomInquiryUpdateManyMutationInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInquiryUncheckedUpdateManyInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    PatientId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientMedicationsCreateInput = {
    PatientMedicationId: string
    Quantity?: number | null
    Patient: PatientCreateNestedOneWithoutPatientMedicationsInput
    Medication: MedicationCreateNestedOneWithoutPatientMedicationsInput
  }

  export type PatientMedicationsUncheckedCreateInput = {
    PatientMedicationId: string
    PatientId: string
    MedicationId: string
    Quantity?: number | null
  }

  export type PatientMedicationsUpdateInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Patient?: PatientUpdateOneRequiredWithoutPatientMedicationsNestedInput
    Medication?: MedicationUpdateOneRequiredWithoutPatientMedicationsNestedInput
  }

  export type PatientMedicationsUncheckedUpdateInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    PatientId?: StringFieldUpdateOperationsInput | string
    MedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PatientMedicationsCreateManyInput = {
    PatientMedicationId: string
    PatientId: string
    MedicationId: string
    Quantity?: number | null
  }

  export type PatientMedicationsUpdateManyMutationInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PatientMedicationsUncheckedUpdateManyInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    PatientId?: StringFieldUpdateOperationsInput | string
    MedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PharmacyCreateInput = {
    PharmacyId: string
    Name: string
    Content: string
    PharmacyThumbnail?: string | null
    Location?: string | null
    Email?: string | null
    Phone?: string | null
    Website?: string | null
    LicenseNumber?: string | null
    DateCreated?: Date | string
  }

  export type PharmacyUncheckedCreateInput = {
    PharmacyId: string
    Name: string
    Content: string
    PharmacyThumbnail?: string | null
    Location?: string | null
    Email?: string | null
    Phone?: string | null
    Website?: string | null
    LicenseNumber?: string | null
    DateCreated?: Date | string
  }

  export type PharmacyUpdateInput = {
    PharmacyId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    PharmacyThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    LicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateInput = {
    PharmacyId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    PharmacyThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    LicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyCreateManyInput = {
    PharmacyId: string
    Name: string
    Content: string
    PharmacyThumbnail?: string | null
    Location?: string | null
    Email?: string | null
    Phone?: string | null
    Website?: string | null
    LicenseNumber?: string | null
    DateCreated?: Date | string
  }

  export type PharmacyUpdateManyMutationInput = {
    PharmacyId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    PharmacyThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    LicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    PharmacyId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    PharmacyThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Website?: NullableStringFieldUpdateOperationsInput | string | null
    LicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    UserId: string
    Fullname: string
    Mobile: string
    Email: string
    Password: string
    Role: string
    IsActive?: boolean
    LastLoginAt?: Date | string | null
    DateCreated?: Date | string
  }

  export type UserUncheckedCreateInput = {
    UserId: string
    Fullname: string
    Mobile: string
    Email: string
    Password: string
    Role: string
    IsActive?: boolean
    LastLoginAt?: Date | string | null
    DateCreated?: Date | string
  }

  export type UserUpdateInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    LastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    LastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    UserId: string
    Fullname: string
    Mobile: string
    Email: string
    Password: string
    Role: string
    IsActive?: boolean
    LastLoginAt?: Date | string | null
    DateCreated?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    LastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    LastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateInput = {
    MessageId: string
    Fullname: string
    Email: string
    Mobile?: string | null
    Message: string
    DateSent?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    MessageId: string
    Fullname: string
    Email: string
    Mobile?: string | null
    Message: string
    DateSent?: Date | string
  }

  export type ContactMessageUpdateInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Mobile?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DateSent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Mobile?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DateSent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    MessageId: string
    Fullname: string
    Email: string
    Mobile?: string | null
    Message: string
    DateSent?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Mobile?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DateSent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Mobile?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DateSent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PatientMedicationsListRelationFilter = {
    every?: PatientMedicationsWhereInput
    some?: PatientMedicationsWhereInput
    none?: PatientMedicationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientMedicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    MedicationId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Image?: SortOrder
    DateCreated?: SortOrder
    StockQuantity?: SortOrder
    StockLimit?: SortOrder
    ManufactureDate?: SortOrder
    ExpirationDate?: SortOrder
    IsAvailable?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    StockQuantity?: SortOrder
    StockLimit?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    MedicationId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Image?: SortOrder
    DateCreated?: SortOrder
    StockQuantity?: SortOrder
    StockLimit?: SortOrder
    ManufactureDate?: SortOrder
    ExpirationDate?: SortOrder
    IsAvailable?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    MedicationId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Image?: SortOrder
    DateCreated?: SortOrder
    StockQuantity?: SortOrder
    StockLimit?: SortOrder
    ManufactureDate?: SortOrder
    ExpirationDate?: SortOrder
    IsAvailable?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    StockQuantity?: SortOrder
    StockLimit?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomInquiryListRelationFilter = {
    every?: CustomInquiryWhereInput
    some?: CustomInquiryWhereInput
    none?: CustomInquiryWhereInput
  }

  export type CustomInquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    PatientId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    NationalID?: SortOrder
    Email?: SortOrder
    DateCreated?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    PatientId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    NationalID?: SortOrder
    Email?: SortOrder
    DateCreated?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    PatientId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    NationalID?: SortOrder
    Email?: SortOrder
    DateCreated?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type CustomInquiryCountOrderByAggregateInput = {
    CustomInquiryId?: SortOrder
    PatientId?: SortOrder
    ImageUpload?: SortOrder
    Prescription?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DateCreated?: SortOrder
  }

  export type CustomInquiryMaxOrderByAggregateInput = {
    CustomInquiryId?: SortOrder
    PatientId?: SortOrder
    ImageUpload?: SortOrder
    Prescription?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DateCreated?: SortOrder
  }

  export type CustomInquiryMinOrderByAggregateInput = {
    CustomInquiryId?: SortOrder
    PatientId?: SortOrder
    ImageUpload?: SortOrder
    Prescription?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DateCreated?: SortOrder
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type PatientMedicationsCountOrderByAggregateInput = {
    PatientMedicationId?: SortOrder
    PatientId?: SortOrder
    MedicationId?: SortOrder
    Quantity?: SortOrder
  }

  export type PatientMedicationsAvgOrderByAggregateInput = {
    Quantity?: SortOrder
  }

  export type PatientMedicationsMaxOrderByAggregateInput = {
    PatientMedicationId?: SortOrder
    PatientId?: SortOrder
    MedicationId?: SortOrder
    Quantity?: SortOrder
  }

  export type PatientMedicationsMinOrderByAggregateInput = {
    PatientMedicationId?: SortOrder
    PatientId?: SortOrder
    MedicationId?: SortOrder
    Quantity?: SortOrder
  }

  export type PatientMedicationsSumOrderByAggregateInput = {
    Quantity?: SortOrder
  }

  export type PharmacyCountOrderByAggregateInput = {
    PharmacyId?: SortOrder
    Name?: SortOrder
    Content?: SortOrder
    PharmacyThumbnail?: SortOrder
    Location?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Website?: SortOrder
    LicenseNumber?: SortOrder
    DateCreated?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    PharmacyId?: SortOrder
    Name?: SortOrder
    Content?: SortOrder
    PharmacyThumbnail?: SortOrder
    Location?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Website?: SortOrder
    LicenseNumber?: SortOrder
    DateCreated?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    PharmacyId?: SortOrder
    Name?: SortOrder
    Content?: SortOrder
    PharmacyThumbnail?: SortOrder
    Location?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Website?: SortOrder
    LicenseNumber?: SortOrder
    DateCreated?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    UserId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    IsActive?: SortOrder
    LastLoginAt?: SortOrder
    DateCreated?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    IsActive?: SortOrder
    LastLoginAt?: SortOrder
    DateCreated?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserId?: SortOrder
    Fullname?: SortOrder
    Mobile?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    IsActive?: SortOrder
    LastLoginAt?: SortOrder
    DateCreated?: SortOrder
  }

  export type ContactMessageCountOrderByAggregateInput = {
    MessageId?: SortOrder
    Fullname?: SortOrder
    Email?: SortOrder
    Mobile?: SortOrder
    Message?: SortOrder
    DateSent?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    MessageId?: SortOrder
    Fullname?: SortOrder
    Email?: SortOrder
    Mobile?: SortOrder
    Message?: SortOrder
    DateSent?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    MessageId?: SortOrder
    Fullname?: SortOrder
    Email?: SortOrder
    Mobile?: SortOrder
    Message?: SortOrder
    DateSent?: SortOrder
  }

  export type PatientMedicationsCreateNestedManyWithoutMedicationInput = {
    create?: XOR<PatientMedicationsCreateWithoutMedicationInput, PatientMedicationsUncheckedCreateWithoutMedicationInput> | PatientMedicationsCreateWithoutMedicationInput[] | PatientMedicationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutMedicationInput | PatientMedicationsCreateOrConnectWithoutMedicationInput[]
    createMany?: PatientMedicationsCreateManyMedicationInputEnvelope
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
  }

  export type PatientMedicationsUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<PatientMedicationsCreateWithoutMedicationInput, PatientMedicationsUncheckedCreateWithoutMedicationInput> | PatientMedicationsCreateWithoutMedicationInput[] | PatientMedicationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutMedicationInput | PatientMedicationsCreateOrConnectWithoutMedicationInput[]
    createMany?: PatientMedicationsCreateManyMedicationInputEnvelope
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PatientMedicationsUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<PatientMedicationsCreateWithoutMedicationInput, PatientMedicationsUncheckedCreateWithoutMedicationInput> | PatientMedicationsCreateWithoutMedicationInput[] | PatientMedicationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutMedicationInput | PatientMedicationsCreateOrConnectWithoutMedicationInput[]
    upsert?: PatientMedicationsUpsertWithWhereUniqueWithoutMedicationInput | PatientMedicationsUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: PatientMedicationsCreateManyMedicationInputEnvelope
    set?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    disconnect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    delete?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    update?: PatientMedicationsUpdateWithWhereUniqueWithoutMedicationInput | PatientMedicationsUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: PatientMedicationsUpdateManyWithWhereWithoutMedicationInput | PatientMedicationsUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: PatientMedicationsScalarWhereInput | PatientMedicationsScalarWhereInput[]
  }

  export type PatientMedicationsUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<PatientMedicationsCreateWithoutMedicationInput, PatientMedicationsUncheckedCreateWithoutMedicationInput> | PatientMedicationsCreateWithoutMedicationInput[] | PatientMedicationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutMedicationInput | PatientMedicationsCreateOrConnectWithoutMedicationInput[]
    upsert?: PatientMedicationsUpsertWithWhereUniqueWithoutMedicationInput | PatientMedicationsUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: PatientMedicationsCreateManyMedicationInputEnvelope
    set?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    disconnect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    delete?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    update?: PatientMedicationsUpdateWithWhereUniqueWithoutMedicationInput | PatientMedicationsUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: PatientMedicationsUpdateManyWithWhereWithoutMedicationInput | PatientMedicationsUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: PatientMedicationsScalarWhereInput | PatientMedicationsScalarWhereInput[]
  }

  export type CustomInquiryCreateNestedManyWithoutPatientInput = {
    create?: XOR<CustomInquiryCreateWithoutPatientInput, CustomInquiryUncheckedCreateWithoutPatientInput> | CustomInquiryCreateWithoutPatientInput[] | CustomInquiryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CustomInquiryCreateOrConnectWithoutPatientInput | CustomInquiryCreateOrConnectWithoutPatientInput[]
    createMany?: CustomInquiryCreateManyPatientInputEnvelope
    connect?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
  }

  export type PatientMedicationsCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientMedicationsCreateWithoutPatientInput, PatientMedicationsUncheckedCreateWithoutPatientInput> | PatientMedicationsCreateWithoutPatientInput[] | PatientMedicationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutPatientInput | PatientMedicationsCreateOrConnectWithoutPatientInput[]
    createMany?: PatientMedicationsCreateManyPatientInputEnvelope
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
  }

  export type CustomInquiryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<CustomInquiryCreateWithoutPatientInput, CustomInquiryUncheckedCreateWithoutPatientInput> | CustomInquiryCreateWithoutPatientInput[] | CustomInquiryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CustomInquiryCreateOrConnectWithoutPatientInput | CustomInquiryCreateOrConnectWithoutPatientInput[]
    createMany?: CustomInquiryCreateManyPatientInputEnvelope
    connect?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
  }

  export type PatientMedicationsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientMedicationsCreateWithoutPatientInput, PatientMedicationsUncheckedCreateWithoutPatientInput> | PatientMedicationsCreateWithoutPatientInput[] | PatientMedicationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutPatientInput | PatientMedicationsCreateOrConnectWithoutPatientInput[]
    createMany?: PatientMedicationsCreateManyPatientInputEnvelope
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
  }

  export type CustomInquiryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CustomInquiryCreateWithoutPatientInput, CustomInquiryUncheckedCreateWithoutPatientInput> | CustomInquiryCreateWithoutPatientInput[] | CustomInquiryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CustomInquiryCreateOrConnectWithoutPatientInput | CustomInquiryCreateOrConnectWithoutPatientInput[]
    upsert?: CustomInquiryUpsertWithWhereUniqueWithoutPatientInput | CustomInquiryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CustomInquiryCreateManyPatientInputEnvelope
    set?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    disconnect?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    delete?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    connect?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    update?: CustomInquiryUpdateWithWhereUniqueWithoutPatientInput | CustomInquiryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CustomInquiryUpdateManyWithWhereWithoutPatientInput | CustomInquiryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CustomInquiryScalarWhereInput | CustomInquiryScalarWhereInput[]
  }

  export type PatientMedicationsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientMedicationsCreateWithoutPatientInput, PatientMedicationsUncheckedCreateWithoutPatientInput> | PatientMedicationsCreateWithoutPatientInput[] | PatientMedicationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutPatientInput | PatientMedicationsCreateOrConnectWithoutPatientInput[]
    upsert?: PatientMedicationsUpsertWithWhereUniqueWithoutPatientInput | PatientMedicationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientMedicationsCreateManyPatientInputEnvelope
    set?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    disconnect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    delete?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    update?: PatientMedicationsUpdateWithWhereUniqueWithoutPatientInput | PatientMedicationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientMedicationsUpdateManyWithWhereWithoutPatientInput | PatientMedicationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientMedicationsScalarWhereInput | PatientMedicationsScalarWhereInput[]
  }

  export type CustomInquiryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CustomInquiryCreateWithoutPatientInput, CustomInquiryUncheckedCreateWithoutPatientInput> | CustomInquiryCreateWithoutPatientInput[] | CustomInquiryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CustomInquiryCreateOrConnectWithoutPatientInput | CustomInquiryCreateOrConnectWithoutPatientInput[]
    upsert?: CustomInquiryUpsertWithWhereUniqueWithoutPatientInput | CustomInquiryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CustomInquiryCreateManyPatientInputEnvelope
    set?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    disconnect?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    delete?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    connect?: CustomInquiryWhereUniqueInput | CustomInquiryWhereUniqueInput[]
    update?: CustomInquiryUpdateWithWhereUniqueWithoutPatientInput | CustomInquiryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CustomInquiryUpdateManyWithWhereWithoutPatientInput | CustomInquiryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CustomInquiryScalarWhereInput | CustomInquiryScalarWhereInput[]
  }

  export type PatientMedicationsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientMedicationsCreateWithoutPatientInput, PatientMedicationsUncheckedCreateWithoutPatientInput> | PatientMedicationsCreateWithoutPatientInput[] | PatientMedicationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationsCreateOrConnectWithoutPatientInput | PatientMedicationsCreateOrConnectWithoutPatientInput[]
    upsert?: PatientMedicationsUpsertWithWhereUniqueWithoutPatientInput | PatientMedicationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientMedicationsCreateManyPatientInputEnvelope
    set?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    disconnect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    delete?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    connect?: PatientMedicationsWhereUniqueInput | PatientMedicationsWhereUniqueInput[]
    update?: PatientMedicationsUpdateWithWhereUniqueWithoutPatientInput | PatientMedicationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientMedicationsUpdateManyWithWhereWithoutPatientInput | PatientMedicationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientMedicationsScalarWhereInput | PatientMedicationsScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutCustomInquiriesInput = {
    create?: XOR<PatientCreateWithoutCustomInquiriesInput, PatientUncheckedCreateWithoutCustomInquiriesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutCustomInquiriesInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutCustomInquiriesNestedInput = {
    create?: XOR<PatientCreateWithoutCustomInquiriesInput, PatientUncheckedCreateWithoutCustomInquiriesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutCustomInquiriesInput
    upsert?: PatientUpsertWithoutCustomInquiriesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutCustomInquiriesInput, PatientUpdateWithoutCustomInquiriesInput>, PatientUncheckedUpdateWithoutCustomInquiriesInput>
  }

  export type PatientCreateNestedOneWithoutPatientMedicationsInput = {
    create?: XOR<PatientCreateWithoutPatientMedicationsInput, PatientUncheckedCreateWithoutPatientMedicationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientMedicationsInput
    connect?: PatientWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutPatientMedicationsInput = {
    create?: XOR<MedicationCreateWithoutPatientMedicationsInput, MedicationUncheckedCreateWithoutPatientMedicationsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutPatientMedicationsInput
    connect?: MedicationWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutPatientMedicationsNestedInput = {
    create?: XOR<PatientCreateWithoutPatientMedicationsInput, PatientUncheckedCreateWithoutPatientMedicationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientMedicationsInput
    upsert?: PatientUpsertWithoutPatientMedicationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPatientMedicationsInput, PatientUpdateWithoutPatientMedicationsInput>, PatientUncheckedUpdateWithoutPatientMedicationsInput>
  }

  export type MedicationUpdateOneRequiredWithoutPatientMedicationsNestedInput = {
    create?: XOR<MedicationCreateWithoutPatientMedicationsInput, MedicationUncheckedCreateWithoutPatientMedicationsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutPatientMedicationsInput
    upsert?: MedicationUpsertWithoutPatientMedicationsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutPatientMedicationsInput, MedicationUpdateWithoutPatientMedicationsInput>, MedicationUncheckedUpdateWithoutPatientMedicationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PatientMedicationsCreateWithoutMedicationInput = {
    PatientMedicationId: string
    Quantity?: number | null
    Patient: PatientCreateNestedOneWithoutPatientMedicationsInput
  }

  export type PatientMedicationsUncheckedCreateWithoutMedicationInput = {
    PatientMedicationId: string
    PatientId: string
    Quantity?: number | null
  }

  export type PatientMedicationsCreateOrConnectWithoutMedicationInput = {
    where: PatientMedicationsWhereUniqueInput
    create: XOR<PatientMedicationsCreateWithoutMedicationInput, PatientMedicationsUncheckedCreateWithoutMedicationInput>
  }

  export type PatientMedicationsCreateManyMedicationInputEnvelope = {
    data: PatientMedicationsCreateManyMedicationInput | PatientMedicationsCreateManyMedicationInput[]
  }

  export type PatientMedicationsUpsertWithWhereUniqueWithoutMedicationInput = {
    where: PatientMedicationsWhereUniqueInput
    update: XOR<PatientMedicationsUpdateWithoutMedicationInput, PatientMedicationsUncheckedUpdateWithoutMedicationInput>
    create: XOR<PatientMedicationsCreateWithoutMedicationInput, PatientMedicationsUncheckedCreateWithoutMedicationInput>
  }

  export type PatientMedicationsUpdateWithWhereUniqueWithoutMedicationInput = {
    where: PatientMedicationsWhereUniqueInput
    data: XOR<PatientMedicationsUpdateWithoutMedicationInput, PatientMedicationsUncheckedUpdateWithoutMedicationInput>
  }

  export type PatientMedicationsUpdateManyWithWhereWithoutMedicationInput = {
    where: PatientMedicationsScalarWhereInput
    data: XOR<PatientMedicationsUpdateManyMutationInput, PatientMedicationsUncheckedUpdateManyWithoutMedicationInput>
  }

  export type PatientMedicationsScalarWhereInput = {
    AND?: PatientMedicationsScalarWhereInput | PatientMedicationsScalarWhereInput[]
    OR?: PatientMedicationsScalarWhereInput[]
    NOT?: PatientMedicationsScalarWhereInput | PatientMedicationsScalarWhereInput[]
    PatientMedicationId?: StringFilter<"PatientMedications"> | string
    PatientId?: StringFilter<"PatientMedications"> | string
    MedicationId?: StringFilter<"PatientMedications"> | string
    Quantity?: IntNullableFilter<"PatientMedications"> | number | null
  }

  export type CustomInquiryCreateWithoutPatientInput = {
    CustomInquiryId: string
    ImageUpload?: string | null
    Prescription: string
    Description: string
    Status?: string
    DateCreated?: Date | string
  }

  export type CustomInquiryUncheckedCreateWithoutPatientInput = {
    CustomInquiryId: string
    ImageUpload?: string | null
    Prescription: string
    Description: string
    Status?: string
    DateCreated?: Date | string
  }

  export type CustomInquiryCreateOrConnectWithoutPatientInput = {
    where: CustomInquiryWhereUniqueInput
    create: XOR<CustomInquiryCreateWithoutPatientInput, CustomInquiryUncheckedCreateWithoutPatientInput>
  }

  export type CustomInquiryCreateManyPatientInputEnvelope = {
    data: CustomInquiryCreateManyPatientInput | CustomInquiryCreateManyPatientInput[]
  }

  export type PatientMedicationsCreateWithoutPatientInput = {
    PatientMedicationId: string
    Quantity?: number | null
    Medication: MedicationCreateNestedOneWithoutPatientMedicationsInput
  }

  export type PatientMedicationsUncheckedCreateWithoutPatientInput = {
    PatientMedicationId: string
    MedicationId: string
    Quantity?: number | null
  }

  export type PatientMedicationsCreateOrConnectWithoutPatientInput = {
    where: PatientMedicationsWhereUniqueInput
    create: XOR<PatientMedicationsCreateWithoutPatientInput, PatientMedicationsUncheckedCreateWithoutPatientInput>
  }

  export type PatientMedicationsCreateManyPatientInputEnvelope = {
    data: PatientMedicationsCreateManyPatientInput | PatientMedicationsCreateManyPatientInput[]
  }

  export type CustomInquiryUpsertWithWhereUniqueWithoutPatientInput = {
    where: CustomInquiryWhereUniqueInput
    update: XOR<CustomInquiryUpdateWithoutPatientInput, CustomInquiryUncheckedUpdateWithoutPatientInput>
    create: XOR<CustomInquiryCreateWithoutPatientInput, CustomInquiryUncheckedCreateWithoutPatientInput>
  }

  export type CustomInquiryUpdateWithWhereUniqueWithoutPatientInput = {
    where: CustomInquiryWhereUniqueInput
    data: XOR<CustomInquiryUpdateWithoutPatientInput, CustomInquiryUncheckedUpdateWithoutPatientInput>
  }

  export type CustomInquiryUpdateManyWithWhereWithoutPatientInput = {
    where: CustomInquiryScalarWhereInput
    data: XOR<CustomInquiryUpdateManyMutationInput, CustomInquiryUncheckedUpdateManyWithoutPatientInput>
  }

  export type CustomInquiryScalarWhereInput = {
    AND?: CustomInquiryScalarWhereInput | CustomInquiryScalarWhereInput[]
    OR?: CustomInquiryScalarWhereInput[]
    NOT?: CustomInquiryScalarWhereInput | CustomInquiryScalarWhereInput[]
    CustomInquiryId?: StringFilter<"CustomInquiry"> | string
    PatientId?: StringFilter<"CustomInquiry"> | string
    ImageUpload?: StringNullableFilter<"CustomInquiry"> | string | null
    Prescription?: StringFilter<"CustomInquiry"> | string
    Description?: StringFilter<"CustomInquiry"> | string
    Status?: StringFilter<"CustomInquiry"> | string
    DateCreated?: DateTimeFilter<"CustomInquiry"> | Date | string
  }

  export type PatientMedicationsUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientMedicationsWhereUniqueInput
    update: XOR<PatientMedicationsUpdateWithoutPatientInput, PatientMedicationsUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientMedicationsCreateWithoutPatientInput, PatientMedicationsUncheckedCreateWithoutPatientInput>
  }

  export type PatientMedicationsUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientMedicationsWhereUniqueInput
    data: XOR<PatientMedicationsUpdateWithoutPatientInput, PatientMedicationsUncheckedUpdateWithoutPatientInput>
  }

  export type PatientMedicationsUpdateManyWithWhereWithoutPatientInput = {
    where: PatientMedicationsScalarWhereInput
    data: XOR<PatientMedicationsUpdateManyMutationInput, PatientMedicationsUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientCreateWithoutCustomInquiriesInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
    PatientMedications?: PatientMedicationsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutCustomInquiriesInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
    PatientMedications?: PatientMedicationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutCustomInquiriesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCustomInquiriesInput, PatientUncheckedCreateWithoutCustomInquiriesInput>
  }

  export type PatientUpsertWithoutCustomInquiriesInput = {
    update: XOR<PatientUpdateWithoutCustomInquiriesInput, PatientUncheckedUpdateWithoutCustomInquiriesInput>
    create: XOR<PatientCreateWithoutCustomInquiriesInput, PatientUncheckedCreateWithoutCustomInquiriesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutCustomInquiriesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutCustomInquiriesInput, PatientUncheckedUpdateWithoutCustomInquiriesInput>
  }

  export type PatientUpdateWithoutCustomInquiriesInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    PatientMedications?: PatientMedicationsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutCustomInquiriesInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    PatientMedications?: PatientMedicationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutPatientMedicationsInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
    CustomInquiries?: CustomInquiryCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPatientMedicationsInput = {
    PatientId: string
    Fullname: string
    Mobile: string
    NationalID?: string | null
    Email?: string | null
    DateCreated?: Date | string
    CustomInquiries?: CustomInquiryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPatientMedicationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPatientMedicationsInput, PatientUncheckedCreateWithoutPatientMedicationsInput>
  }

  export type MedicationCreateWithoutPatientMedicationsInput = {
    MedicationId: string
    Name: string
    Description: string
    Image?: string | null
    DateCreated?: Date | string
    StockQuantity?: number | null
    StockLimit?: number | null
    ManufactureDate?: Date | string | null
    ExpirationDate?: Date | string | null
    IsAvailable?: boolean
  }

  export type MedicationUncheckedCreateWithoutPatientMedicationsInput = {
    MedicationId: string
    Name: string
    Description: string
    Image?: string | null
    DateCreated?: Date | string
    StockQuantity?: number | null
    StockLimit?: number | null
    ManufactureDate?: Date | string | null
    ExpirationDate?: Date | string | null
    IsAvailable?: boolean
  }

  export type MedicationCreateOrConnectWithoutPatientMedicationsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutPatientMedicationsInput, MedicationUncheckedCreateWithoutPatientMedicationsInput>
  }

  export type PatientUpsertWithoutPatientMedicationsInput = {
    update: XOR<PatientUpdateWithoutPatientMedicationsInput, PatientUncheckedUpdateWithoutPatientMedicationsInput>
    create: XOR<PatientCreateWithoutPatientMedicationsInput, PatientUncheckedCreateWithoutPatientMedicationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPatientMedicationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPatientMedicationsInput, PatientUncheckedUpdateWithoutPatientMedicationsInput>
  }

  export type PatientUpdateWithoutPatientMedicationsInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomInquiries?: CustomInquiryUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPatientMedicationsInput = {
    PatientId?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Mobile?: StringFieldUpdateOperationsInput | string
    NationalID?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomInquiries?: CustomInquiryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedicationUpsertWithoutPatientMedicationsInput = {
    update: XOR<MedicationUpdateWithoutPatientMedicationsInput, MedicationUncheckedUpdateWithoutPatientMedicationsInput>
    create: XOR<MedicationCreateWithoutPatientMedicationsInput, MedicationUncheckedCreateWithoutPatientMedicationsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutPatientMedicationsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutPatientMedicationsInput, MedicationUncheckedUpdateWithoutPatientMedicationsInput>
  }

  export type MedicationUpdateWithoutPatientMedicationsInput = {
    MedicationId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    StockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    StockLimit?: NullableIntFieldUpdateOperationsInput | number | null
    ManufactureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicationUncheckedUpdateWithoutPatientMedicationsInput = {
    MedicationId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    StockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    StockLimit?: NullableIntFieldUpdateOperationsInput | number | null
    ManufactureDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PatientMedicationsCreateManyMedicationInput = {
    PatientMedicationId: string
    PatientId: string
    Quantity?: number | null
  }

  export type PatientMedicationsUpdateWithoutMedicationInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Patient?: PatientUpdateOneRequiredWithoutPatientMedicationsNestedInput
  }

  export type PatientMedicationsUncheckedUpdateWithoutMedicationInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    PatientId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PatientMedicationsUncheckedUpdateManyWithoutMedicationInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    PatientId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomInquiryCreateManyPatientInput = {
    CustomInquiryId: string
    ImageUpload?: string | null
    Prescription: string
    Description: string
    Status?: string
    DateCreated?: Date | string
  }

  export type PatientMedicationsCreateManyPatientInput = {
    PatientMedicationId: string
    MedicationId: string
    Quantity?: number | null
  }

  export type CustomInquiryUpdateWithoutPatientInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInquiryUncheckedUpdateWithoutPatientInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInquiryUncheckedUpdateManyWithoutPatientInput = {
    CustomInquiryId?: StringFieldUpdateOperationsInput | string
    ImageUpload?: NullableStringFieldUpdateOperationsInput | string | null
    Prescription?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientMedicationsUpdateWithoutPatientInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Medication?: MedicationUpdateOneRequiredWithoutPatientMedicationsNestedInput
  }

  export type PatientMedicationsUncheckedUpdateWithoutPatientInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    MedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PatientMedicationsUncheckedUpdateManyWithoutPatientInput = {
    PatientMedicationId?: StringFieldUpdateOperationsInput | string
    MedicationId?: StringFieldUpdateOperationsInput | string
    Quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}