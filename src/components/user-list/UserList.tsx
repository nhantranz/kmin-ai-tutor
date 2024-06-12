'use client';

import React, { useState } from 'react';
import { apiService } from '@/utils/api-service';

export default function UserList() {
  const [users, setUsers] = useState<{ name: string, age: number }[]>([]);

  function getAllUsers() {
    apiService.user.get<{ name: string, age: number }[]>().then((res) => {
      if (res) setUsers(res);
    });
  }

  function getSingleUser() {
    apiService.user.get<{ name: string, age: number }[]>(new URLSearchParams({ id: '1' })).then(res => {
      if (res) setUsers(res);
    });
  }

  function getFailedAPI() {
    apiService.failed.get();
  }

  return (
    <>
      <button
        type="button"
        onClick={getAllUsers}
        className="bg-blue-600 hover:bg-blue-900 transition-all duration-300 text-white p-3 my-4 rounded-xl">
        [Sample API Call] Get a list of Users
      </button>
      <button
        type="button"
        onClick={getSingleUser}
        className="bg-green-600 hover:bg-green-900 transition-all duration-300 text-white p-3 mb-4 rounded-xl">
        [Sample API Call] Get a single user
      </button>
      <button
        type="button"
        onClick={getFailedAPI}
        className="bg-red-600 hover:bg-red-900 transition-all duration-300 text-white p-3 mb-4 rounded-xl">
        [Sample API Call] Failed API (Check console log)
      </button>
      {Boolean(users.length) && <div className="p-5 bg-white rounded-2xl w-72">
        {users?.map(usr => (
          <div key={usr.name} className="mb-3 flex justify-between">
            <span>Name: {usr.name}</span>
            <span>Age: {usr.age}</span>
          </div>
        ))}
      </div>}
    </>
  );
}