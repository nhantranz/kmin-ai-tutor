/* global RequestInit */

import { EApiResponse } from '@/types/EApiResponse';

/** This value should be picked up from the environment variable */
const baseUrl = 'http://localhost:3000/api';

/**
 * Base ApiService which provides the boilerplate for GET, POST, PUT, DELETE apis
 * Usage: extend this class with a specific API namespace (e.g. UserApi, provides the basePath (e.g. user))
 * All GET/POST/PUT/DELETE calls to [<HOST_URL>/user/] will now be available.
 * New APIs can be created in the inherited UserApi class.
 * */
export abstract class ApiServiceBase {
  readonly #baseUrl: string;

  readonly #path: string;

  readonly #baseConfig: RequestInit;

  protected constructor(path = '', baseConfig: RequestInit = {}) {
    this.#baseUrl = baseUrl; // TODO get this from environment variable
    this.#path = path;
    this.#baseConfig = baseConfig;
  }

  /**
   * Fetching data from an API using GET method
   * Assuming the response has json format. You'll need to create a new method to return other **Content-Type**
   * */
  public async get<T>(queryParams?: URLSearchParams, overrideConfig: RequestInit = {}): Promise<T | void> {
    let url = `${this.#baseUrl}/${this.#path}`;
    if (queryParams?.size) {
      url += `?${queryParams?.toString()}`;
    }

    return fetch(url, { method: 'GET', ...this.#baseConfig, ...overrideConfig })
      .then(response => {
        if (response.ok) {
          return response.json() as T;
        }

        throw new Error([
          `\n[GET][${response.status}] Request failed`,
          `Reasons: ${response.statusText}`,
          `URL: ${url}`,
          `Payload: ${queryParams?.toString()}`,
          `=========================`,
        ].join('\n'));
      })
      .catch(console.error);
  }

  public async post<T>(data: T): Promise<EApiResponse> {
    const url = `${this.#baseUrl}/${this.#path}`;
    return fetch(url, { method: 'POST', body: JSON.stringify(data) })
      .then(response => {
        if (response.ok) {
          return EApiResponse.Success;
        }

        throw new Error([
          `\n[POST][${response.status}] Request failed`,
          `Reasons: ${response.statusText}`,
          `URL: ${url}`,
          `Payload: ${JSON.stringify(data)}`,
          `=========================`,
        ].join('\n'));
      })
      .catch(err => {
        console.error(err);
        return EApiResponse.Failed;
      })
  }

  public async put<T>(data: T): Promise<EApiResponse> {
    const url = `${this.#baseUrl}/${this.#path}`;
    return fetch(url, { method: 'PUT', body: JSON.stringify(data) })
      .then(response => {
        if (response.ok) {
          return EApiResponse.Success;
        }

        throw new Error([
          `\n[PUT][${response.status}] Request failed`,
          `Reasons: ${response.statusText}`,
          `URL: ${url}`,
          `Payload: ${JSON.stringify(data)}`,
          `=========================`,
        ].join('\n'));
      })
      .catch(err => {
        console.error(err);
        return EApiResponse.Failed;
      })
  }

  public async delete(id: string): Promise<EApiResponse> {
    const url = `${this.#baseUrl}/${this.#path}/${id}`;
    return fetch(url, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          return EApiResponse.Success;
        }

        throw new Error([
          `\n[DELETE][${response.status}] Request failed`,
          `Reasons: ${response.statusText}`,
          `URL: ${url}`,
          `=========================`,
        ].join('\n'));
      })
      .catch(err => {
        console.error(err);
        return EApiResponse.Failed;
      });
  }
}
