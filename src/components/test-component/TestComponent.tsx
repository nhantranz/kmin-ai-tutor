import React from 'react';
import UserList from '@/components/user-list/UserList';
import styles from './TestComponent.module.scss';

// eslint-disable-next-line no-warning-comments
/* TODO delete me after project initialization */
import * as pack from '../../../package.json';

export default function TestComponent() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className={styles.testCircle}>
        NextJS {pack.dependencies.next} Starter Project has been setup successfully.
      </div>
      <UserList />
    </div>
  );
}