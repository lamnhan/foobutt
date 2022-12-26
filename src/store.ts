import {tx} from 'tinyx';

export type States = typeof states;
export type Store = typeof store;

const states = {
  name: 'Foobutt',
};

const store = tx<States>(states);
export function loadStore() {
  return store;
}

export const CHANGE_NAME = createUpdateTransaction<string, string>(
  'name',
  name => name
);

export function AppStore() {
  return function (target: any, propertyKey: string) {
    Reflect.defineProperty(target, propertyKey, {
      get: () => document.querySelector('app-root')?.store,
    });
  };
}

// export function StoreSubscription() {
//   return function (target: any, propertyKey: string) {
//     console.log(target, propertyKey);
//     Reflect.defineProperty(target, propertyKey, {
//       get: () => {
//         const store = document.querySelector('app-root')?.store;
//         const unsubscribe = store?.subscribe((states: States) => {
//           console.log('States hanged: ', states);
//           Reflect.defineProperty(target, propertyKey, {
//             get: () => ({
//               store,
//               states,
//               unsubscribe,
//             }),
//           });
//         });
//         return {store, states, unsubscribe};
//       },
//     });
//   };
// }

/* Helpers */

function createUpdateTransaction<Payload, Value>(
  path: string,
  handler: TransactionHandler<Payload, Value>
) {
  return function (payload: Payload) {
    return ({update}: Mutations<Value>) => {
      update(path, (currentValue: Value) => handler(payload, currentValue));
    };
  } as Transaction;
}

type TransactionHandler<Payload, Value> = (
  payload: Payload,
  value: Value
) => Value;

type UpdateMutation<Value> = (
  path: string,
  handler: (currentValue: Value) => Value
) => unknown;
interface Mutations<Value> {
  update: UpdateMutation<Value>;
}
