let age: number = 50;
let userName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialozed: undefined = undefined;
let callback = (a: number) => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number];
person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Loading {
  LOADING,
  READY,
}

const page = {
  isLoading: Loading.READY,
};

if (page.isLoading === Loading.READY) {
  console.log('Loading: ', Loading.READY);
}

if (page.isLoading === Loading.LOADING) {
  console.log('Loading: ', Loading.LOADING);
}

let qwe: string | number;

qwe = 2;

let literal: 'enable' | 'disable';

literal = 'disable';

// Укажите типы для следующих функций

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.

type ObjectType = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: ObjectType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2: ObjectType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
