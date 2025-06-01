import { v4 as uuidv4 } from 'uuid';

export const todo = [
  {
    id: uuidv4(),
    date: '2025-05-03',
    descr: 'Description todo - 1',
    priority: 'low',
    theme: 'green',
    isDone: false,
  },
  {
    id: uuidv4(),
    date: '2025-05-12',
    descr: 'Description todo - 2',
    priority: 'low',
    theme: 'orange',
    isDone: false,
  },
  {
    id: uuidv4(),
    date: '2025-05-15',
    descr: 'Description todo - 3',
    priority: 'high',
    theme: 'red',
    isDone: false,
  },
  {
    id: uuidv4(),
    date: '2025-05-25',
    descr: 'Description todo - 4',
    priority: 'medium',
    theme: 'green',
    isDone: false,
  },
];
