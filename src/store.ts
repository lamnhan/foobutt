import {tx} from 'tinyx';

export type States = typeof states;
export type Store = typeof store;

const states = {
  name: 'Foobutt',
};
export const store = tx<States>(states);

export const CHANGE_NAME = createUpdateTransaction<string, string>(
  'name',
  name => name
);

/* Helpers */

function createUpdateTransaction<Payload, Value>(
  path: string,
  handler: TransactionHandler<Payload, Value>
) {
  return ((payload: Payload) => {
    return ({update}: Mutations<Value>) => {
      update(path, (currentValue: Value) => handler(payload, currentValue));
    };
  }) as Transaction;
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
