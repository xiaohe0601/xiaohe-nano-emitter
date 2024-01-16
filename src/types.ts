export type OptionalObject<T> = T | undefined;
export type OptionalNumber = OptionalObject<number>;
export type OptionalString = OptionalObject<string>;
export type OptionalBoolean = OptionalObject<boolean>;

export type NullableObject<T> = T | null;
export type NullableNumber = NullableObject<number>;
export type NullableString = NullableObject<string>;
export type NullableBoolean = NullableObject<boolean>;

export type NumberLike = number | `${number}`;

export type Arrayable<T> = T | T[];

export interface NanoEvents {
  [event: string]: any;
}

export interface DefaultNanoEvents extends NanoEvents {
  [event: string]: (...args: any[]) => void;
}

export interface NanoUnsubscribe {
  (): void;
}

export interface NanoEmitter<T extends NanoEvents = DefaultNanoEvents> {

  events: Partial<{ [E in keyof T]: T[E][] }>;

  on<K extends keyof T>(this: this, event: K, cb: T[K]): NanoUnsubscribe;

  emit<K extends keyof T>(this: this, event: K, ...args: Parameters<T[K]>): void;

}